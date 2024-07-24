'use client';

import { useRouter } from 'next/navigation';
import SaraCircle from '@/asset/logo/sara-circle.svg';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import MaraCircle from '@/asset/logo/mara-circle.svg';
import { DESCRIPTION_CONSTANT, PLACEHOLDER_CONSTANT } from '@/app/question/_constant';
import QuestionForm from '@/app/question/_components/QuestionForm';
import { Theme } from '@/feature/question/ThemeContext';
import Tag from '@/app/question/_components/Tag';
// import useMutateQuestion from '@/query/question';

export default function page({ searchParams }: { searchParams: { theme: Theme } }) {
  const theme = searchParams.theme || 'sara';
  const router = useRouter();

  const handleClickLogo = () => {
    router.push('/main');
  };

  const handleClickTag = (tagTheme: Theme) => {
    router.replace(`/question/?theme=${tagTheme}`);
  };

  return (
    <>
      <Tag type="sara" isActive={theme === 'sara'} theme={theme} onClick={handleClickTag} />
      <Tag type="mara" isActive={theme === 'mara'} theme={theme} onClick={handleClickTag} />
      <div className="w-full pt-8 px-4 pb-4 bg-white rounded-[20px] flex flex-col gap-2 items-center relative">
        <div className="logo h-[64px]">
          <span className="cursor-pointer" onClick={handleClickLogo}>
            {theme === 'sara' ? <SaraCircle /> : <MaraCircle />}
          </span>
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
    </>
  );
}
