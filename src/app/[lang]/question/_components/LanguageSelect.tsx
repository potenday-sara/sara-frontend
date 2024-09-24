import { useEffect, useState } from 'react';
import { cva } from 'class-variance-authority';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { Locale } from '@/app/i18n/i18n.config';
import BottomArrow from '@/app/_asset/bottom-arrow.svg';
import Globe from '@/app/_asset/globe.svg';

const buttonClassName = cva('hover:bg-neutral-50 flex items-center h-9 w-[86px] px-2 gap-1', {
  variants: {
    isSelected: {
      true: 'bg-neutral-50',
    },
  },
});

interface Props {
  lang: Locale;
}

export default function LanguageSelect({ lang }: Props) {
  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Locale>(lang);
  const pathname = usePathname(); // 현재 경로를 가져옴
  const searchParams = useSearchParams(); // 쿼리 파라미터를 가져옴
  const router = useRouter(); // 라우터 가져오기

  const handleLanguageSelect = (language: Locale) => {
    if (!pathname || !searchParams) return;
    const updatedPathname = pathname.replace(`/${lang}/`, `/${language}/`);

    const updatedSearchParams = searchParams.toString();

    router.push(`${updatedPathname}?${updatedSearchParams}`);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!e.target) return;
      if (!(e.target as HTMLElement).closest('.border') && !(e.target as HTMLElement).closest('.border-neutral-600')) {
        setIsLanguageSelectOpen(false);
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <>
      {isLanguageSelectOpen && (
        <div className="border font-14-title-100 text-neutral-500 shadow flex flex-col w-[78px] overflow-hidden rounded-[8px]">
          <button type="button" className="hover:bg-neutral-50" onClick={() => handleLanguageSelect('ko')}>
            {selectedLanguage === 'ko' ? (
              <div className={buttonClassName({ isSelected: selectedLanguage === 'ko' })}>
                <Globe />
                KO
              </div>
            ) : (
              <div className="flex justify-center items-center h-9">KO</div>
            )}
          </button>
          <button
            className="border-solid border-t-[1px] border-b-[1px] border-neutral-100 hover:bg-neutral-50 "
            type="button"
            onClick={() => handleLanguageSelect('en')}
          >
            {selectedLanguage === 'en' ? (
              <div className={buttonClassName({ isSelected: selectedLanguage === 'en' })}>
                <Globe />
                EN
              </div>
            ) : (
              <div className="flex justify-center items-center h-9">EN</div>
            )}
          </button>
          <button type="button" className="hover:bg-neutral-50" onClick={() => handleLanguageSelect('jp')}>
            {selectedLanguage === 'jp' ? (
              <div className={buttonClassName({ isSelected: selectedLanguage === 'jp' })}>
                <Globe />
                JP
              </div>
            ) : (
              <div className="flex justify-center items-center h-9">JP</div>
            )}
          </button>
        </div>
      )}
      {!isLanguageSelectOpen && (
        <div
          onClick={() => setIsLanguageSelectOpen(true)}
          className="h-9 w-[86px] px-2 cursor-pointer shadow-2xl flex gap-1 font-14-title-100 items-center border border-solid py-2 rounded-[8px] border-neutral-100 text-neutral-600"
        >
          <Globe />
          {lang.toUpperCase()}
          <BottomArrow />
        </div>
      )}
    </>
  );
}
