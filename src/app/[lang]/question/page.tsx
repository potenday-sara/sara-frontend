'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import SaraCircle from '@/asset/logo/sara-circle.svg';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import SaraCircleJP from '@/asset/logo/sara-jp.svg';
import MaraCircleJP from '@/asset/logo/mara-jp.svg';
import SaraCircleEN from '@/asset/logo/sara-en.svg';
import MaraCircleEN from '@/asset/logo/mara-en.svg';
import MaraCircle from '@/asset/logo/mara-circle.svg';
import { DESCRIPTION_CONSTANT, PLACEHOLDER_CONSTANT } from '@/app/[lang]/question/_constant';
import QuestionForm from '@/app/[lang]/question/_components/QuestionForm';
import { Theme } from '@/feature/question/ThemeContext';
import Tag from '@/app/[lang]/question/_components/Tag';
import FloatingButton from '@/app/[lang]/question/_components/FloatingButton';
import { useOnboard } from '@/app/[lang]/question/_context/OnboardContext';
import { useTranslation } from '@/app/_hooks/useTranslation';
import KakaoAdFit from '@/components/organisms/KaKaoAdfit.jsx';
import LanguageSelect from '@/app/[lang]/question/_components/LanguageSelect';
// import useMutateQuestion from '@/query/question';

export default function page() {
  const theme = useSearchParams()?.get('theme') as Theme;

  const router = useRouter();
  const [_, lang] = useTranslation('question');

  const handleClickLogo = () => {
    router.push(`/${lang}/main`);
  };

  const handleClickTag = (tagTheme: Theme) => {
    router.replace(`/${lang}/question/?theme=${tagTheme}`);
  };

  const { forthItem } = useOnboard();

  return (
    <div>
      <Tag type="sara" isActive={theme === 'sara'} theme={theme} onClick={handleClickTag} />
      <Tag type="mara" isActive={theme === 'mara'} theme={theme} onClick={handleClickTag} />
      <div className="z-50 absolute mt-[20px] left-0" ref={forthItem}>
        <FloatingButton theme={theme} />
      </div>
      <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-3 items-center relative">
        <div className="absolute left-[70px]">
          <LanguageSelect lang={lang} />
        </div>
        <div className="logo cursor-pointer w-[130px]" onClick={handleClickLogo}>
          {lang === 'jp' && (theme === 'sara' ? <SaraCircleJP /> : <MaraCircleJP />)}
          {lang === 'en' && (theme === 'sara' ? <SaraCircleEN /> : <MaraCircleEN />)}
          {lang === 'ko' && (theme === 'sara' ? <SaraCircle /> : <MaraCircle />)}
        </div>
        <div className="character h-[120px] w-[120px]">
          {theme === 'sara' ? <SaraCircleCharacter /> : <MaraCircleCharacter />}
        </div>
        <div>
          <QuestionForm
            theme={theme}
            descriptionPlaceHolder={DESCRIPTION_CONSTANT}
            itemPlaceHolder={PLACEHOLDER_CONSTANT}
          />
        </div>
      </div>
    </div>
  );
}
