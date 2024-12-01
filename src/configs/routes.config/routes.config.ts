import { lazy } from 'react';
import type { Routes } from '@/@types/routes';
import authRoute from './authRoute';

export const publicRoutes: Routes = [...authRoute];

export const protectedRoutes = [
  {
    key: 'dashboard',
    path: '/dashboard',
    component: lazy(() => import('@/pages/examples/Dashboard')),
    authority: [],
  },
];
