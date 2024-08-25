import React from 'react';
import Image from 'next/image';
import { useQuestion } from '@/app/[lang]/question/_context/QuestionContext';
import BaroSara from '@/app/[lang]/question/_asset/baro-sara.svg';
import BaroMara from '@/app/[lang]/question/_asset/bara-mara.svg';
import { Theme, useSaraMara } from '@/feature/question/ThemeContext';
import Dropdown from '@/app/_components/dropdown';
import SelectInput from '@/app/_components/input/SelectInput';
import useShop from '@/app/[lang]/question/_hooks/useShop';
import Pagination from '@/app/_components/pagination';
import Rocket from '@/app/[lang]/question/_asset/rocket.png';
import Logo from '@/components/atoms/Logo/Logo';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useTranslation } from '@/app/_hooks/useTranslation';

interface Props {}

export default function Shop() {
  const { itemName } = useQuestion();
  const [{ t }] = useTranslation('question');
  const { theme } = useSaraMara();
  const {
    categories,
    handleSetNextPage,
    handleSetPrevPage,
    handleCategoryChange,
    nowPage,
    maxPage,
    nowCategory,
    displayItems,
    keyword,
  } = useShop();

  if (!categories) {
    return <div>로딩 중</div>;
  }

  return (
    <div className="w-full relative bg-white rounded-[24px] pt-4 px-4 py-10 flex flex-col gap-2">
      {keyword ? (
        <>
          <div
            className={getCssByTheme(
              theme,
              ['text-sara-primary', 'text-mara-primary'],
              'font-16-title-100 flex items-center gap-1.5 justify-center',
            )}
          >
            방금 물어본거 바로 <Logo logo={theme} />
          </div>
          <div
            className={getCssByTheme(
              theme,
              ['bg-sara-secondary text-sara-primary', 'bg-mara-secondary text-mara-primary'],
              'w-full p-2 flex justify-center items-center font-20-title-140 rounded-[10px]',
            )}
          >
            {keyword || '에어팟 맥스'}
          </div>
        </>
      ) : (
        <div className="flex items-end justify-between">
          <Dropdown
            onClickItem={handleCategoryChange}
            items={categories}
            trigger={<SelectInput theme={theme} value={nowCategory.label} />}
          />
          <div className="mb-[9px]">{theme === 'sara' ? <BaroSara /> : <BaroMara />}</div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        {displayItems?.map((item) => (
          <div
            onClick={() => {
              window.open(item.product_url, '_blank');
            }}
            className="cursor-pointer h-[98px] rounded-[16px] p-[10px] items-center border border-solid border-black-#eee flex gap-4"
          >
            <div
              className="image w-[76px] h-full"
              style={{
                backgroundSize: 'cover',
                borderRadius: '8px',
                backgroundImage: `url(${item.product_image})`,
              }}
            />
            <div className="flex-1 flex flex-col gap-[6px]">
              <p className="font-14-title-100 text-black-#666 two-line-truncate">{item.product_name}</p>
              <p className="font-14-title-100">
                {item.product_price.toLocaleString()} {t('money')}
              </p>
              {item.is_rocket && (
                // <div
                //   className="h-4 w-[60px]"
                //   style={{
                //     backgroundSize: 'cover',
                //     backgroundImage: `url(${Rocket})`,
                //   }}
                // />
                <Image src={Rocket} alt="로켓배송" className="w-[60px] h-4" />
              )}
            </div>
          </div>
        ))}
      </div>
      <Pagination
        nowPage={nowPage}
        maxPage={maxPage}
        leftClick={handleSetPrevPage}
        rightClick={handleSetNextPage}
        type={theme}
      />
    </div>
  );
}
