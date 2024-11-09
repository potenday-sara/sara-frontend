import Footer from '@/components/organisms/Footer/Footer';
import Navigation from '@/app/_components/navigation';

export default function Layout({ children, params }: { children: any; params: { id: string } }) {
  return (
    <div className="relative h-auto" id="main">
      {children}
      <div>
        <Footer />
      </div>
      <Navigation />
    </div>
  );
}
