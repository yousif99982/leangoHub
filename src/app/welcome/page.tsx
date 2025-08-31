
"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Logo } from "@/components/logo";

export default function WelcomePage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const userId = searchParams.get("userId");

    useEffect(() => {
        if (!userId) {
            router.push("/login");
        }
    }, [userId, router]);

    const handleContinue = () => {
        if (userId) {
            router.push(`/dashboard?userId=${userId}`);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-secondary p-4">
            <Card className="w-full max-w-md text-center">
                <CardHeader>
                    <div className="flex justify-center mb-4">
                        <Logo className="h-20 w-20" />
                    </div>
                    <CardTitle className="text-3xl font-headline">Welcome to LinguaLeap!</CardTitle>
                    <CardDescription className="text-lg">
                        Your account has been created successfully.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        You're all set to begin your personalized language learning journey.
                    </p>
                    <Button onClick={handleContinue} size="lg">
                        Go to my Dashboard
                    </Button>
                </CardContent>
            </Card>
        </main>
    );
}
