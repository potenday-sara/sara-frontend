import Logo from '@/components/atoms/Logo/Logo';
import DesktopNavItems from '@/components/organisms/Navbar/DesktopNavbar/DesktopNavItems';

interface layoutProps {
  children: React.ReactNode;
}

const NAV_ITEMS = [
  { name: '홈', href: '/desktop' },
  { name: '질문하기', href: '/desktop/question' },
  { name: '사라마라 라운지', href: '/desktop/lounge' },
] as const;

export default function layout({ children }: layoutProps) {
  return (
    <body className="w-[1440px]">
      <nav className="fixed top-0 backdrop-blur-sm w-full h-[60px] flex items-center px-[40px] gap-[42px]">
        <Logo size="xxs" type="sara" />
        <DesktopNavItems NAV_ITEMS={NAV_ITEMS} />
      </nav>
      <main className="mt-[60px]">{children}</main>
    </body>
  );
}
