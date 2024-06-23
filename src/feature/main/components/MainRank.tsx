import React, { useContext } from 'react';
import { cva } from 'class-variance-authority';
import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo/Logo';
import { Product, TrendData } from '@/feature/main/constants/trend';
import { HandleThemeAction, Theme } from '@/feature/main/hooks/useSaraMara';

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

const TitleButtonClassName = cva(
  'px-[15px] cursor-pointer py-2 rounded-[18px] font-14-title-100 text-white flex-shrink-0',
  {
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
  },
);

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
      <div className="buttons flex w-full">
        <Button
          className={ThemeSelectButtonClassName({ defaultSara: theme !== 'sara', themeSara: theme === 'sara' })}
          onClick={() => handleClickThemeSelectButton('sara')}
          label={<Logo logo="sara" />}
        />
        <Button
          className={ThemeSelectButtonClassName({ defaultMara: theme !== 'mara', themeMara: theme === 'mara' })}
          onClick={() => handleClickThemeSelectButton('mara')}
          label={<Logo logo="mara" />}
        />
      </div>
      <div className="bg-black-#f4">
        <ul className="w-full flex px-[15px] py-2 overflow-auto gap-1 hide-scrollbar">
          {trend[theme].map((item, index) => (
            <li
              key={index}
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
            <li
              onClick={() => handleClickTrend(trend)}
              key={index}
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default React.memo(MainRank);
