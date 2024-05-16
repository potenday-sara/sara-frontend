import { redirect } from 'next/navigation';
import Logo from '@/components/atoms/Logo/Logo';

export default function page({ searchParams, params }) {
  const { viewPort } = searchParams;
  if (viewPort === 'mobile') {
    redirect('/mobile');
  }
  redirect('/desktop');

  return (
    <div className="bg-sara-50% text-sara-25 font-24-title-140 text-mara-primary">
      <Logo size="sm" type="sara" />
      <p>페이지</p>
    </div>
  );
}
