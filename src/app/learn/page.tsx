
import { Suspense } from 'react';
import LearnClientPage from './learn-client-page';
import { Loader2 } from 'lucide-react';

function LearnPageLoading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <Loader2 className="h-8 w-8 animate-spin" />
        </div>
    );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<LearnPageLoading />}>
      <LearnClientPage />
    </Suspense>
  );
}
