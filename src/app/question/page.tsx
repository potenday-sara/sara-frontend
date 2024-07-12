'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { number } from 'prop-types';
import Logo from '@/components/atoms/Logo/Logo';
import SaraCircle from '@/asset/logo/sara-circle.svg';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import Refresh from '@/asset/svg/refresh.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import MaraCircle from '@/asset/logo/mara-circle.svg';
import { DESCRIPTION_CONSTANT, PLACEHOLDER_CONSTANT } from '@/app/question/_constant';
import useInterval from '@/app/_hooks/useInterval';
import QuestionForm from '@/app/question/_components/QuestionForm';
import { Theme } from '@/feature/question/ThemeContext';
// import useMutateQuestion from '@/query/question';

export default function page({ searchParams }: { searchParams: { type: Theme } }) {
  const theme = searchParams.type || 'sara';
  return (
    <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-2 items-center">
      <div className="logo h-[64px]">{theme === 'sara' ? <SaraCircle /> : <MaraCircle />}</div>
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
  );
}
