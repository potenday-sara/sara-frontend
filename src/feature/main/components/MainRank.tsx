import React, { useContext } from 'react';
import { cva } from 'class-variance-authority';
import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo/Logo';
import { Product, TrendData } from '@/feature/main/constants/trend';
import { HandleThemeAction, Theme } from '@/feature/main/hooks/useSaraMara';
import KakaoAdFit from '@/app/_components/ads/KakaoAdfit';

type Props = {
  theme: 'sara' | 'mara';
  trend: TrendData;
  handleThemeAction: HandleThemeAction;
};

const ThemeSelectButtonClassName = cva('flex-1 py-[19px] flex justify-center', {
  variants: {
    defaultSara: {
      true: 'text-sara-25% bg-sara-secondary',
    },
    defaultMara: {
      true: 'text-mara-25% bg-mara-secondary',
    },
    themeSara: {
      true: ' text-white bg-sara-primary',
    },
    themeMara: {
      true: ' text-white bg-mara-primary',
    },
  },
});

const TitleButtonClassName = cva('px-[15px] cursor-pointer py-2 rounded-[18px] font-14-title-100 flex-shrink-0', {
  variants: {
    selected: {
      true: 'text-white',
      false: 'bg-white text-black-#666',
    },
    theme: {
      sara: 'bg-sara-primary',
      mara: 'bg-mara-primary',
    },
  },
});

const TrendButtonClassName = cva('px-3 py-2 rounded-lg flex justify-center items-center  font-15-title-100', {
  variants: {
    theme: {
      sara: 'bg-sara-secondary text-sara-primary',
      mara: 'bg-mara-secondary text-mara-primary',
    },
  },
});

function MainRank({ theme, trend, handleThemeAction }: Props) {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

  const handleClickThemeSelectButton = (theme: Theme) => {
    console.log('theme', theme);
    handleThemeAction.handleSetTheme(theme);
    handleThemeAction.handleStopInterval();
  };

  const handleClickTitle = (index: number) => {
    handleThemeAction.handleStopInterval();
    setSelectedIndex(index);
  };

  const handleClickTrend = (item: Product) => {
    handleThemeAction.handleRestartInterval();
    window.open(item.link);
  };

  return (
    <div className="w-full">
      <div className="kakao-ad-a">
        <KakaoAdFit disabled={false} height={50} width={320} unit="DAN-FK6YA47rI1C6QYtZ" />
      </div>

      <div className="buttons flex w-full">
        <button
          type="button"
          className={ThemeSelectButtonClassName({ defaultSara: theme !== 'sara', themeSara: theme === 'sara' })}
          onClick={() => handleClickThemeSelectButton('sara')}
        >
          <div className="w-[64px]">
            <Logo logo="sara" />
          </div>
        </button>
        <button
          className={ThemeSelectButtonClassName({ defaultMara: theme !== 'mara', themeMara: theme === 'mara' })}
          onClick={() => handleClickThemeSelectButton('mara')}
        >
          <div className="w-[64px]">
            <Logo logo="mara" />
          </div>
        </button>
      </div>
      <div className="bg-black-#f4">
        <ul className="w-full flex px-[15px] py-2 overflow-auto gap-1 hide-scrollbar">
          {trend[theme].map((item, index) => (
            <li
              key={item.title}
              onClick={() => handleClickTitle(index)}
              className={TitleButtonClassName({
                selected: selectedIndex === index,
                theme,
              })}
            >
              {item.title}
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-[1px]">
          {trend[theme][selectedIndex].contents.map((trend, index) => (
            <div
              onClick={() => handleClickTrend(trend)}
              key={trend.product}
              className="flex bg-white items-center h-[64px] gap-3 px-4 font-14-title-100 cursor-pointer"
            >
              <div
                className={TrendButtonClassName({
                  theme,
                })}
              >
                {index + 1}
              </div>
              <div>{trend.product}</div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(MainRank);
