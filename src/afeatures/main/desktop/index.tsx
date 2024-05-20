import Logo from '@/components/atoms/Logo/Logo';
import DesktopNavItems from '@/components/organisms/Navbar/DesktopNavbar/DesktopNavItems';

interface indexProps {}

const NAV_ITEMS = [
  { name: '홈', href: '/' },
  { name: '질문하기', href: '/question' },
  { name: '사라마라 라운지', href: '/lounge' },
] as const;

export default function index({}: indexProps) {
  return (
    <main className="min-w-[1440px] w-full min-h-[100vh] flex flex-col">
      <header className="fixed top-0 backdrop-blur-sm w-full h-[60px] flex items-center px-[40px] gap-[42px]">
        <Logo size="xxs" type="sara" />
        <DesktopNavItems NAV_ITEMS={NAV_ITEMS} />
      </header>
      <main className="pt-[60px] grow">ㅋㄷ</main>
    </main>
  );
}
