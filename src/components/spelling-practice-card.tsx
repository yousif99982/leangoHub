

"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { type Word } from "@/lib/data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import { RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { updateStudentProgressInStorage } from "@/lib/storage";
import { type WordProgress } from "@/lib/storage";
import { updateLearningStats, updateXp, XP_AMOUNTS, getStatsForUser } from "@/lib/stats.tsx";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { XpToast } from "./xp-toast";
import { useLanguage } from "@/hooks/use-language";


interface SpellingPracticeCardProps {
  allWords: (Word & Partial<WordProgress>)[];
  userId: string;
}

type FeedbackState = "idle" | "correct" | "incorrect" | "processing";

export function SpellingPracticeCard({ allWords, userId }: SpellingPracticeCardProps) {
  const [practiceWords, setPracticeWords] = useState<(Word & Partial<WordProgress>)[]>([]);
  const [currentWord, setCurrentWord] = useState<(Word & Partial<WordProgress>) | null>(null);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<FeedbackState>("idle");
  const { toast } = useToast();
  const { t, translateContent } = useLanguage();
  
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  const [spelledToday, setSpelledToday] = useState(0);

  const DAILY_LIMIT = 10;

  useEffect(() => {
    const loadStats = async () => {
        const stats = await getStatsForUser(userId);
        const today = new Date().toISOString().split('T')[0];

        if (stats.spellingPractice?.date === today) {
            setSpelledToday(stats.spellingPractice.count);
        } else {
            setSpelledToday(0);
        }
    }
    loadStats();

    const words = allWords.filter((w) => w.strength && w.strength > 0);
    setPracticeWords(words);
  }, [allWords, userId]);

  const uniqueUnits = useMemo(() => {
    return Array.from(new Set(practiceWords.map((word) => word.unit).filter(Boolean)));
  }, [practiceWords]);

  const lessonsForSelectedUnit = useMemo(() => {
    if (!selectedUnit) return [];
    return Array.from(new Set(
      practiceWords
        .filter((word) => word.unit === selectedUnit)
        .map((word) => word.lesson)
        .filter(Boolean)
    ));
  }, [practiceWords, selectedUnit]);

  const filteredPracticeWords = useMemo(() => {
    return practiceWords.filter(word => {
        const unitMatch = !selectedUnit || word.unit === selectedUnit;
        const lessonMatch = !selectedLesson || word.lesson === selectedLesson;
        return unitMatch && lessonMatch;
    });
  }, [practiceWords, selectedUnit, selectedLesson]);

  const selectNewWord = useCallback(() => {
    if (spelledToday >= DAILY_LIMIT) {
        setCurrentWord(null);
        return;
    }
    if (filteredPracticeWords.length === 0) {
      setCurrentWord(null);
      return;
    }
    const randomIndex = Math.floor(Math.random() * filteredPracticeWords.length);
    setCurrentWord(filteredPracticeWords[randomIndex]);
    setAnswer("");
    setFeedback("idle");
  }, [filteredPracticeWords, spelledToday]);

  useEffect(() => {
    selectNewWord();
  }, [selectNewWord]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentWord || !answer.trim() || feedback !== 'idle' || spelledToday >= DAILY_LIMIT) return;

    setFeedback('processing'); // Disable button immediately
    const correct = answer.trim().toLowerCase() === currentWord.word.toLowerCase();
    
    await updateLearningStats({ userId, spelledCount: 1 });
    setSpelledToday(prev => prev + 1);

    if (correct) {
      setFeedback("correct");
      const newStrength = (currentWord.strength || 0) + 1;
      const nextReview = currentWord.nextReview ? new Date(currentWord.nextReview) : new Date();
      if(currentWord.id && userId) {
        updateStudentProgressInStorage(userId, currentWord.id, {
            strength: newStrength,
            nextReview: nextReview,
        });
      }
      
      const { amount } = await updateXp(userId, 'spell_correct');
      toast({
        description: <XpToast event="spell_correct" amount={amount} />,
        duration: 3000,
      });
      
      setTimeout(selectNewWord, 1500);
    } else {
      setFeedback("incorrect");
       const newStrength = Math.max(0, (currentWord.strength || 1) - 1);
       const nextReview = currentWord.nextReview ? new Date(currentWord.nextReview) : new Date();
       if(currentWord.id && userId) {
        updateStudentProgressInStorage(userId, currentWord.id, {
            strength: newStrength,
            nextReview: nextReview,
        });
       }
       toast({
        title: "Incorrect",
        description: `The correct spelling is "${currentWord.word}". We'll keep practicing.`,
        variant: "destructive"
       });
       setTimeout(() => {
         setAnswer(currentWord.word);
         setTimeout(selectNewWord, 2000);
       }, 1000);
    }
  };

  const getInputColor = () => {
    if (feedback === "correct") return "border-green-500 focus-visible:ring-green-500";
    if (feedback === "incorrect") return "border-destructive focus-visible:ring-destructive";
    return "";
  };

  const clearFilters = () => {
      setSelectedUnit(null);
      setSelectedLesson(null);
  }

  const handleUnitChange = (unit: string) => {
      setSelectedUnit(unit === "all" ? null : unit);
      setSelectedLesson(null);
  }

  const handleLessonChange = (lesson: string) => {
      setSelectedLesson(lesson === "all" ? null : lesson);
  }


  if (practiceWords.length === 0) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('spellingPractice.title')}</CardTitle>
                <CardDescription>{t('spellingPractice.description')}</CardDescription>
            </CardHeader>
            <CardContent>
                 <div className="text-center text-muted-foreground py-8">
                    <p>{t('spellingPractice.noWordsYet')}</p>
                    <p>{t('spellingPractice.noWordsYetHint')}</p>
                </div>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>{t('spellingPractice.title')}</span>
           <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-muted-foreground">
              {t('spellingPractice.todayCounter', spelledToday, DAILY_LIMIT)}
            </span>
            <Button variant="ghost" size="icon" onClick={selectNewWord} disabled={spelledToday >= DAILY_LIMIT}>
              <RefreshCw className="h-4 w-4" />
              <span className="sr-only">{t('spellingPractice.newWord')}</span>
            </Button>
          </div>
        </CardTitle>
        <CardDescription>
          {t('spellingPractice.description')}
        </CardDescription>
        <div className="flex items-center space-x-2 pt-4">
            <Select onValueChange={handleUnitChange} value={selectedUnit || "all"}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('spellingPractice.filterByUnit')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('spellingPractice.allUnits')}</SelectItem>
                {uniqueUnits.map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {translateContent(unit)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select onValueChange={handleLessonChange} value={selectedLesson || "all"} disabled={!selectedUnit}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('spellingPractice.filterByLesson')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('spellingPractice.allLessons')}</SelectItem>
                {lessonsForSelectedUnit.map((lesson) => (
                  <SelectItem key={lesson} value={lesson}>
                    {translateContent(lesson)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
             {(selectedUnit || selectedLesson) && <Button variant="ghost" onClick={clearFilters}>{t('spellingPractice.clearFilters')}</Button>}
          </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {spelledToday >= DAILY_LIMIT ? (
            <div className="text-center text-muted-foreground py-8">
                <p>{t('spellingPractice.limitReached')}</p>
                <p>{t('spellingPractice.comeBack')}</p>
            </div>
        ) : currentWord ? (
          <>
            <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-secondary rounded-lg">
              <Image
                src={currentWord.imageUrl}
                alt={currentWord.word}
                width={100}
                height={100}
                className="rounded-md object-cover"
              />
              <p className="text-center md:text-left flex-1">{currentWord.definition}</p>
            </div>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder={t('spellingPractice.placeholder')}
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className={cn("pr-8", getInputColor())}
                  readOnly={feedback !== 'idle'}
                />
                {feedback === "correct" && <CheckCircle className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500"/>}
                {feedback === "incorrect" && <XCircle className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-destructive"/>}
              </div>
              <Button type="submit" disabled={feedback !== 'idle'}>{t('spellingPractice.check')}</Button>
            </form>
          </>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            <p>{filteredPracticeWords.length > 0 ? t('spellingPractice.loading') : t('spellingPractice.noWordsForFilters')}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
