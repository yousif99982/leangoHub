
'use client';

import { getWeek, startOfWeek } from 'date-fns';
import { XpToast } from '@/components/xp-toast';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export type LearningStats = {
  timeSpentSeconds: number;
  totalWordsReviewed: number;
  xp: number;
  reviewedToday: {
    count: number;
    date: string;
    timeSpentSeconds: number;
    completedTests: string[];
  };
  activityLog: string[];
  spellingPractice: {
    count: number;
    date: string;
  };
  lastLoginDate: string;
  weekStartDate?: string; // ISO date string for start of the week
};

export type XpEvent =
  | 'review_word'
  | 'spell_correct'
  | 'daily_login'
  | 'master_word'
  | 'grammar_test';

export const XP_AMOUNTS: Record<XpEvent, number> = {
    review_word: 5,
    spell_correct: 5,
    daily_login: 20,
    master_word: 10,
    grammar_test: 20
};

export const getInitialStats = (today: string): LearningStats => ({
    timeSpentSeconds: 0,
    totalWordsReviewed: 0,
    xp: 0,
    reviewedToday: { count: 0, date: today, timeSpentSeconds: 0, completedTests: [] },
    activityLog: [],
    spellingPractice: { count: 0, date: today },
    lastLoginDate: '1970-01-01',
    weekStartDate: startOfWeek(new Date(), { weekStartsOn: 1 }).toISOString(), // Monday
});

export const getStatsForUser = async (userId: string): Promise<LearningStats> => {
    const today = new Date();
    const todayStr = today.toLocaleDateString('en-CA');
    const startOfThisWeek = startOfWeek(today, { weekStartsOn: 1 });

    const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
    const statsSnap = await getDoc(statsDocRef);

    let stats: LearningStats;

    if (statsSnap.exists()) {
        stats = statsSnap.data() as LearningStats;
    } else {
        stats = getInitialStats(todayStr);
        // If no stats exist, save the initial stats to Firestore
        await setDoc(statsDocRef, stats);
    }

    // --- Data Migration & Defaults ---
    if (typeof stats.xp !== 'number') stats.xp = 0;
    if (!stats.lastLoginDate) stats.lastLoginDate = '1970-01-01';
    if (!stats.weekStartDate) stats.weekStartDate = startOfThisWeek.toISOString();

    // --- Weekly XP Reset Logic ---
    const lastWeekStartDate = new Date(stats.weekStartDate);
    if (getWeek(today, { weekStartsOn: 1 }) !== getWeek(lastWeekStartDate, { weekStartsOn: 1 })) {
        stats.xp = 0; // Reset XP
        stats.weekStartDate = startOfThisWeek.toISOString();
    }

    // --- Daily Data Reset Logic ---
    if (!stats.reviewedToday || stats.reviewedToday.date !== todayStr) {
        stats.reviewedToday = { count: 0, date: todayStr, timeSpentSeconds: 0, completedTests: [] };
    }
    if (!stats.spellingPractice || stats.spellingPractice.date !== todayStr) {
        stats.spellingPractice = { count: 0, date: todayStr };
    }
    if (!Array.isArray(stats.activityLog)) stats.activityLog = [];
    if (!Array.isArray(stats.reviewedToday.completedTests)) stats.reviewedToday.completedTests = [];
    if (typeof stats.reviewedToday.timeSpentSeconds !== 'number') stats.reviewedToday.timeSpentSeconds = 0;

    return stats;
}

export const updateXp = async (userId: string, event: XpEvent) => {
    if (!userId) return { updated: false, amount: 0 };

    const stats = await getStatsForUser(userId);
    const amount = XP_AMOUNTS[event];
    const today = new Date().toLocaleDateString('en-CA');

    if (event === 'daily_login') {
        if (stats.lastLoginDate === today) {
            return { updated: false, amount: 0 }; // Already awarded today
        }
        stats.lastLoginDate = today;
    }

    stats.xp += amount;

    const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
    await setDoc(statsDocRef, stats, { merge: true });

    return { updated: true, amount };
};


type UpdateStatsParams = {
  userId: string;
  reviewedCount?: number;
  durationSeconds?: number;
  testName?: string;
  spelledCount?: number;
  toast?: (props: any) => void;
};

export const updateLearningStats = async ({
  userId,
  reviewedCount = 0,
  durationSeconds = 0,
  testName,
  spelledCount = 0,
  toast,
}: UpdateStatsParams) => {
  if (!userId) return;

  const stats = await getStatsForUser(userId);
  const today = new Date().toLocaleDateString('en-CA');

  // Update stats
  stats.totalWordsReviewed += reviewedCount;
  stats.timeSpentSeconds += durationSeconds;
  stats.reviewedToday.count += reviewedCount;
  stats.reviewedToday.timeSpentSeconds += durationSeconds;
  stats.spellingPractice.count += spelledCount;

  // Log activity
  if (!stats.activityLog.includes(today)) {
    stats.activityLog.push(today);
  }

  // Log completed test and award XP
  if (testName && !stats.reviewedToday.completedTests.includes(testName)) {
      stats.reviewedToday.completedTests.push(testName);
      stats.xp += XP_AMOUNTS.grammar_test;
      if (toast) {
           toast({
              description: <XpToast event="grammar_test" amount={XP_AMOUNTS.grammar_test} />,
              duration: 3000,
          });
      }
  }

  const statsDocRef = doc(db, `users/${userId}/app-data/stats`);
  await setDoc(statsDocRef, stats, { merge: true });
};
