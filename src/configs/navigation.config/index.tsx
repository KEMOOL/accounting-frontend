import { IconDashboard } from '@tabler/icons-react';
import type { NavigationTree } from '@/@types/navigation';

const navigationConfig: NavigationTree[] = [
  {
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    translateKey: '',
    icon: IconDashboard,
    authority: [],
    subMenu: [
      {
        key: 'dashboard',
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: '',
        authority: [],
      },
    ],
  },
];

export default navigationConfig;
