'use client';

import { useRouter } from 'next/navigation';
import LeftArrow from '@/asset/svg/left-arrow.svg';
import { useTranslation } from '@/app/_hooks/useTranslation';

export default function Header() {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  const handleClickLounge = () => {
    router.push('/lounge');
  };

  const [{ t }] = useTranslation('lounge');

  return (
    <nav className="sticky w-full flex justify-center items-center py-2 h-[56px] bg-white top-0 z-50">
      <button
        onClick={handleClickBack}
        className="absolute left-5 top-2  border border-solid rounded-[8px] w-[40px] h-[40px] flex justify-center items-center"
        type="button"
      >
        <LeftArrow />
      </button>
      <h1 className="font-14-title-100">
        <span onClick={handleClickLounge} className="cursor-pointer">
          {t('lounge_title')}
        </span>
      </h1>
    </nav>
  );
}
