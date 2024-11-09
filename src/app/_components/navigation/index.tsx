'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import NavSara from './asset/nav-sara.svg';
import NavMara from './asset/nav-mara.svg';
import NavLounge from './asset/lounge.svg';
import { useTranslation } from '@/app/_hooks/useTranslation';

const NAV = [
  {
    icon: <NavSara />,
    text: 'nav-sara',
    path: '/question/?theme=sara',
    activeColor: 'sara-primary',
  },
  {
    icon: <NavLounge />,
    text: 'nav-lounge',
    path: '/lounge',
    activeColor: 'black',
  },
  {
    icon: <NavMara />,
    text: 'nav-mara',
    path: '/question/?theme=mara',
    activeColor: 'mara-primary',
  },
];

type Nav = {
  icon: React.ReactNode;
  text: string;
  isActive: boolean;
  handleClick: () => void;
  activeColor: string;
};

function NavigationButton({ icon, text, handleClick, isActive, activeColor }: Nav) {
  return (
    <button
      onClick={handleClick}
      className={`flex flex-col  flex-1 justify-center items-center gap-1.5 font-12-title-100 ${
        isActive ? `text-${activeColor}` : 'text-neutral-400'
      }`}
      type="button"
    >
      <div className="icon">{icon}</div>
      <div className="text">{text}</div>
    </button>
  );
}

function Navigation() {
  const [{ t }, lang] = useTranslation('main');
  const router = useRouter();
  const pathName = usePathname();
  const theme = useSearchParams()?.get('theme');

  const handleClick = (path: string) => {
    router.push(`/${lang}${path}`);
  };

  const isActive = (target: string) => {
    if (!pathName) return false;

    const [_, __, path] = pathName.split('/');

    if (theme) return target === `/${path}/?theme=${theme}`;
    return target === `/${path}`;
  };

  isActive('/question/?theme=sara');
  return (
    <div className="flex items-center w-full h-[58px] bg-neutral-50 sticky left-0 bottom-0 border-solid border-[1px] border-neutral-100">
      {NAV.map(({ icon, text, path, activeColor }, index) => (
        <NavigationButton
          isActive={isActive(path)}
          activeColor={activeColor}
          handleClick={() => handleClick(path)}
          icon={icon}
          text={t(text)}
          key={index}
        />
      ))}
    </div>
  );
}

export default Navigation;
