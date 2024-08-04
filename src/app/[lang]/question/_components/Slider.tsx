'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { useRandomQuestion } from '@/app/[lang]/question/_query/useQuestion';
import Balloon from '@/app/_components/balloon/Ballon';
import Close from '@/app/_asset/close.svg';

interface Props {
  theme: Theme;
}

export default function LoungeSlider({ theme }: Props) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  const router = useRouter();
  const { data: questions, isLoading } = useRandomQuestion({ type: theme });
  const [isBalloonVisible, setIsBalloonVisible] = useState(true);

  const handleCloseBalloon = () => {
    setIsBalloonVisible(false);
  };

  console.log('theme', theme);

  return (
    <div className="relative w-full flex flex-col bg-white rounded-[10px] ">
      {isBalloonVisible && !isLoading && (
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 z-50">
          <Balloon
            position="bubble-left-top"
            classNames={getCssByTheme(
              theme,
              [
                'text-sara-primary bg-sara-secondary border-sara-25% slider-shadow-sara',
                'text-mara-primary bg-mara-secondary border-mara-25% slider-shadow-mara',
              ],
              'border border-solid font-16-title-100',
            )}
          >
            <div
              className="flex items-center gap-3 relative "
              style={{
                zIndex: 999999999,
              }}
            >
              <div>다른사람들의 질문 더 보러가기</div>
              <button
                onClick={handleCloseBalloon}
                className="relative"
                type="button"
                style={{
                  zIndex: 999999999,
                }}
              >
                <Close />
              </button>
            </div>
          </Balloon>
        </div>
      )}
      <div
        className={getCssByTheme(
          theme,
          ['text-sara-primary slider-shadow-sara', 'text-mara-primary slider-shadow-mara'],
          'flex justify-between overflow-hidden',
        )}
      >
        <div className="flex p-[10px] items-center gap-1.5 ">
          <div className="w-12">
            <Logo logo="sara" />
          </div>
          <div className="w-12">
            <Logo logo="mara" />
          </div>

          <h2 className="font-14-title-100">라운지</h2>
        </div>
        <div
          onClick={() => router.push(`/lounge/`)}
          style={{
            zIndex: 999999999,
          }}
          className={getCssByTheme(
            theme,
            ['bg-sara-primary', 'bg-mara-primary'],
            'relative cursor-pointer text-white flex items-center font-12-medium-100 px-3 py-[10px] rounded-tr-[10px]',
          )}
        >
          더 보러가기
        </div>
      </div>
      {isLoading ? null : (
        <div className="slider-container overflow-hidden">
          <Slider {...settings}>
            {questions?.data.results.map((question) => (
              <div
                key={question.id}
                className={getCssByTheme(
                  theme,
                  ['text-sara-primary', 'text-mara-primary'],
                  'border-x !flex flex-col gap-[6px] p-[10px] h-[56px] cursor-pointer relative z-50',
                )}
                onClick={() => router.push(`/lounge/${question.id}/`)}
              >
                <div className="font-14-title-100 truncate">{question.product}</div>
                <div className="font-12-medium-100 truncate text-black-#666">{question.content}</div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
