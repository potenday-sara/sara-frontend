import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { Theme } from '@/feature/question/ThemeContext';

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

  return (
    <div className="w-full flex flex-col bg-white rounded-[10px] overflow-hidden">
      <div
        className={getCssByTheme(
          theme,
          ['text-sara-primary', 'text-mara-primary'],
          'flex p-[10px] items-center gap-1.5',
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
      <div className="slider-container overflow-hidden">
        <Slider {...settings}>
          <div className="bg-yellow-kakao h-[40px]">
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
