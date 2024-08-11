import React from 'react';
import SaraCircleCharacter from '@/asset/logo/SaraCircleCharacter.svg';
import MaraCircleCharacter from '@/asset/logo/MaraCircleCharacter.svg';
import SaraMara from '@/app/[lang]/main/_asset/sara-mara.svg';
import FirstTime from '@/app/[lang]/main/_asset/first-time.svg';
import DontKnow from '@/app/[lang]/main/_asset/dont-know.svg';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import HiSara from '@/app/[lang]/main/_asset/hi-sara.svg';
import HiMara from '@/app/[lang]/main/_asset/hi-mara.svg';
import YouKnow from '@/app/[lang]/main/_asset/you-know.svg';

import Dot from '@/app/_asset/dot.svg';
import LocaleOnboardFirst from '@/app/[lang]/main/_components/LocaleOnboardFirst';
import LocaleOnboardSecond from '@/app/[lang]/main/_components/LocaleOnboardSecond';
import LocaleOnboardThird from '@/app/[lang]/main/_components/LocaleOnboardThird';

interface Props {
  onRequestClose: () => void;
}

const getComponents = (props, stage) => {
  const comp = [
    <LocaleOnboardFirst {...props} />,
    <LocaleOnboardSecond {...props} />,
    <LocaleOnboardThird {...props} />,
  ];

  return comp[stage];
};

export default function LocaleOnboard({ onRequestClose }: Props) {
  const [stage, setStage] = React.useState(0);
  const handleClickNextButton = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setStage(stage + 1);
  };

  const handleClickPrevButton = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setStage(stage - 1);
  };

  const handleClickCloseButton = () => {
    onRequestClose();
  };

  const props = {
    onClickNextButton: handleClickNextButton,
    onClickPrevButton: handleClickPrevButton,
    onClickCloseButton: handleClickCloseButton,
  };

  return (
    <div className="rounded-[16px] flex flex-col w-[361px] overflow-hidden bg-white pb-8">
      {getComponents(props, stage)}
    </div>
  );
}
