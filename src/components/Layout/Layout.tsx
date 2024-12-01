import React, { lazy, Suspense, useMemo } from 'react';
import LoadingScreen from '@/components/LoadingScreen/LoadingScreen';
import useAuth from '@/utils/hooks/useAuth';
import useLocale from '@/utils/hooks/useLocale';

export function Layout() {
  const { authenticated } = useAuth();

  useLocale();

  const AppLayout = useMemo(() => {
    if (authenticated) {
      return lazy(() => import('./LayoutTypes/SimpleSideBar'));
    }
    return lazy(() => import('./AuthLayout'));
  }, [authenticated]);

  return (
    <Suspense
      fallback={
        <div className="flex flex-auto flex-col h-[100vh]">
          <LoadingScreen />
        </div>
      }
    >
      <AppLayout />
    </Suspense>
  );
}
