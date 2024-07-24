'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRouter } from 'next/navigation';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';
import { useRandomQuestion } from '@/app/question/_query/useQuestion';

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

  return (
    <div className="w-full flex flex-col bg-white rounded-[10px] overflow-hidden ">
      <div
        className={getCssByTheme(
          theme,
          ['text-sara-primary slider-shadow-sara', 'text-mara-primary slider-shadow-mara'],
          'flex p-[10px] items-center gap-1.5 ',
        )}
      >
        <div className="w-12">
          <Logo logo="sara" />
        </div>
        <div className="w-12">
          <Logo logo="mara" />
        </div>

        <h2 className="font-14-title-100">라운지</h2>
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
                  '!flex flex-col gap-[6px] p-[10px] h-[56px] cursor-pointer relative z-50',
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
