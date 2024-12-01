import classes from '@/components/Layout/LayoutTypes/SimpleSideBar.module.css';
import useAuth from '@/utils/hooks/useAuth';
import { IconLogout } from '@tabler/icons-react';

export default function SimpleSideBarBottomContent() {
  const { signOut } = useAuth();

  return (
    <>
      <div
        className={classes.link}
        onClick={(event) => {
          signOut();
        }}
      >
        <IconLogout className={classes.icon} />
        <span>Exit</span>
      </div>
    </>
  );
}
