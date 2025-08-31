
"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import { type User, type Word } from "@/lib/data";
import { getUserById, getStudentsBySupervisorId, getWordsBySupervisor, getPeerMessages, getStudentProgress } from "@/lib/firestore";
import { type WordProgress } from "@/lib/storage";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MessageSquare, GraduationCap, Trophy } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

type ClassmateWithStats = User & {
    learningCount: number;
    masteredCount: number;
};

async function getWordsForStudent(studentId: string): Promise<(Word & WordProgress)[]> {
    const student = await getUserById(studentId);
    if (!student?.supervisorId) return [];

    const supervisorWords = await getWordsBySupervisor(student.supervisorId);
    const studentProgress = await getStudentProgress(studentId);
    const studentProgressMap = new Map(studentProgress.map(p => [p.id, p]));

    const mergedWords = supervisorWords.map(supervisorWord => {
        const progress = studentProgressMap.get(supervisorWord.id);
        return {
            ...supervisorWord,
            strength: progress?.strength ?? 0,
            nextReview: progress ? new Date(progress.nextReview) : new Date(),
            studentId: studentId
        };
    });

    return mergedWords;
}

export default function ClassmatesPage() {
    const searchParams = useSearchParams();
    const userId = searchParams.get("userId");
    const [classmates, setClassmates] = useState<ClassmateWithStats[]>([]);
    const [unreadCounts, setUnreadCounts] = useState<Record<string, number>>({});

    const fetchData = useCallback(async () => {
        if (userId) {
            const currentUser = await getUserById(userId);
            if (currentUser && currentUser.supervisorId) {
                const allStudents = await getStudentsBySupervisorId(currentUser.supervisorId);
                
                const foundClassmatesPromises = allStudents
                    .filter(student => student.id !== userId)
                    .map(async (student) => {
                         const words = await getWordsForStudent(student.id);
                         const mastered = words.filter(w => w.strength === -1).length;
                         const learning = words.length - mastered;
                         return {
                             ...student,
                             learningCount: learning,
                             masteredCount: mastered
                         }
                    });

                const foundClassmates = await Promise.all(foundClassmatesPromises);
                setClassmates(foundClassmates);

                const counts: Record<string, number> = {};
                for (const classmate of foundClassmates) {
                    const conversationId = [userId, classmate.id].sort().join('-');
                    const conversation = await getPeerMessages(conversationId);
                    const unreadCount = conversation.filter(m => !m.read && m.senderId === classmate.id).length;
                    if (unreadCount > 0) {
                        counts[classmate.id] = unreadCount;
                    }
                }
                setUnreadCounts(counts);
            }
        }
    }, [userId]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);
    
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold font-headline">My Classmates</h1>
            <p className="text-muted-foreground">
                See other students from your class and their progress.
            </p>
            <Card>
                <CardHeader>
                    <CardTitle>Class List</CardTitle>
                    <CardDescription>
                        A list of all students learning under your supervisor. Go to the unified "Chat" page to message them.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {classmates.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {classmates.map(classmate => {
                                const unreadCount = unreadCounts[classmate.id] || 0;
                                return (
                                    <div key={classmate.id} className="p-4 border rounded-lg flex flex-col gap-4">
                                        <div className="flex items-center justify-between gap-4 w-full">
                                            <div className="flex items-center gap-3">
                                                <Image 
                                                    src={classmate.avatar}
                                                    alt={classmate.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <p className="font-semibold">{classmate.name}</p>
                                                    <p className="text-sm text-muted-foreground">{classmate.grade && classmate.section ? `Grade ${classmate.grade} | Section ${classmate.section}` : ''}</p>
                                                </div>
                                            </div>
                                             <Link href={`/dashboard/chat?userId=${userId}&contactId=${classmate.id}`} passHref>
                                                <Button variant="ghost" size="icon" className="relative">
                                                    <MessageSquare className="h-5 w-5"/>
                                                    {unreadCount > 0 && (
                                                        <Badge className="absolute -top-1 -right-1 h-4 w-4 justify-center p-0">{unreadCount}</Badge>
                                                    )}
                                                </Button>
                                            </Link>
                                        </div>
                                        <div className="flex items-center justify-around gap-4 pt-3 border-t">
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <GraduationCap className="h-5 w-5 text-primary"/>
                                                <span className="font-semibold text-foreground">{classmate.learningCount}</span>
                                                <span>Learning</span>
                                            </div>
                                             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Trophy className="h-5 w-5 text-amber-500"/>
                                                <span className="font-semibold text-foreground">{classmate.masteredCount}</span>
                                                <span>Mastered</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                         <div className="text-center text-muted-foreground py-12">
                            You don't have any classmates yet.
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
