import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Group, ThemeIcon } from '@mantine/core';
import classes from '@/components/Layout/LayoutTypes/SimpleSideBar.module.css';
import SimpleSideBarBottomContent from '@/components/Layout/LayoutTypes/SimpleSideBarBottomContent';
import { LinksGroup } from '@/components/Layout/LinksGroup';
import Views from '@/components/Layout/Views';
import navigationConfig from '@/configs/navigation.config';
import AuthorityCheck from '@/route/AuthorityCheck';
import { useAppSelector } from '@/store';
import { HeaderTabs } from './HeaderTabs';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState('');
  const { t } = useTranslation();
  const userAuthority = useAppSelector((state) => state.auth.user.role);

  useEffect(() => {
    const currentPath = location.pathname.split('/')[1];
    setActive(currentPath);
  }, [location.pathname]);

  const links = navigationConfig.map((item, index) => {
    let links: { label: string; link: string }[] = [];

    if (item.subMenu && item.subMenu.length > 0) {
      links = item.subMenu.map((i) => ({
        key: i.key,
        label: i.title,
        link: i.path,
      }));
      return <LinksGroup key={index} icon={item.icon} label={item.title} links={links} />;
    }
    return (
      <AuthorityCheck
        userAuthority={userAuthority ? userAuthority : []}
        authority={item.authority}
        key={index}
      >
        <Link
          className={classes.link}
          data-active={item.path.split('/')[1] === active ? 'true' : undefined}
          to={item.path}
          key={index}
          onClick={(event) => {
            event.preventDefault();
            navigate(item.path);
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <ThemeIcon variant="light" size={30}>
              <item.icon size={18} />
            </ThemeIcon>
            <Box ml="md">{item.title}</Box>
          </Box>
        </Link>
      </AuthorityCheck>
    );
  });

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <Group className={classes.header} justify="space-between">
          <img className={classes.logo} alt="Mantine Logo" src="/logo/logo-light-full.svg" />
          App Name{' '}
        </Group>
        <div className={classes.body}>{links}</div>
      </div>
      <div className={classes.footer}>
        <SimpleSideBarBottomContent />
      </div>
    </nav>
  );
}

export default function SimpleSideBar() {
  return (
    <div
      style={{
        backgroundColor: 'rgb(241,240,240)',
        display: 'flex',
        flex: ' 1 1 auto',
      }}
    >
      <SideBar />
      <div
        style={{
          backgroundColor: 'rgb(241,240,240)',
          flex: 1,
        }}
      >
        <HeaderTabs />
        <div className={classes.mainContent}>
          <Views />
        </div>
      </div>
    </div>
  );
}
