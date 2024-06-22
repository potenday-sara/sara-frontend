'use client';

import { cva } from 'class-variance-authority';
import { useEffect, useState, memo } from 'react';
import MainSara from '@/asset/character/MainSara.svg';
import MainMara from '@/asset/character/MainMara.svg';
import { useSaraMara } from '@/feature/main/hooks/useSaraMara';
import Button from '@/components/atoms/Button';

type MainCharacterProps = {
  type: 'sara' | 'mara';
};

const MainCharacterClassNames = cva('flex flex-col items-center py-[15px] gap-[15px] justify-center gap', {
  variants: {
    type: {
      sara: 'bg-sara-secondary',
      mara: 'bg-mara-secondary',
    },
  },
});

const MainButtonClassNames = cva('py-4 flex justify-center bg-white w-[360px] rounded-md', {
  variants: {
    type: {
      sara: 'text-sara-primary',
      mara: 'text-mara-primary',
    },
  },
});

function MainCharacter({ type }: MainCharacterProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  return (
    <div className={MainCharacterClassNames({ type })}>
      {type === 'sara' ? <MainSara /> : <MainMara />}
      <Button className={MainButtonClassNames({ type })} onClick={() => null} label="에게 물어보기" />
    </div>
  );
}

export default memo(MainCharacter);
