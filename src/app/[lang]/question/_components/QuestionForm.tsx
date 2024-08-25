'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import Refresh from '@/asset/svg/refresh.svg';
import useInterval from '@/app/_hooks/useInterval';
import { makeRandomNumber } from '@/app/[lang]/question/_utils';
import { Theme } from '@/feature/main/hooks/useSaraMara';
import { CONSTANTS_TEXT, PLACEHOLDERTYPE } from '@/app/[lang]/question/_constant';
import postQuestion from '@/apis/question/mutateQuestion';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useQuestion } from '@/app/[lang]/question/_context/QuestionContext';
import { useOnboard } from '@/app/[lang]/question/_context/OnboardContext';
import { getLocale, useTranslation } from '@/app/_hooks/useTranslation';
import BottomArrow from '@/app/_asset/bottom-arrow.svg';
import TopArrow from '@/app/_asset/top-arrow.svg';

type QuestionFormProps = {
  descriptionPlaceHolder: { title: string; contents: string }[];
  itemPlaceHolder: PLACEHOLDERTYPE[];
  theme: Theme;
};

type TIME = 10;
const TIME: TIME = 10;

export default function QuestionForm({ descriptionPlaceHolder, itemPlaceHolder, theme }: QuestionFormProps) {
  const router = useRouter();
  const [{ t }, lang] = useTranslation('question');

  const [itemName, setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false);

  const { handleSetItemDescription, handleSetItemName, handleSetQuestionId } = useQuestion();

  const [timerFlag, setTimerFlag] = useState<boolean>(false);

  // const { mutate: postSubmitQuestion } = useMutateQuestion();

  const [timer, setTimer] = useState<number>(5);
  const [selectedPlaceHolder, setSelectedPlaceHolder] = useState<number[]>(makeRandomNumber(7, itemPlaceHolder.length));

  const handleSubmitQuestion = async () => {
    try {
      const res = await postQuestion({
        content: itemDescription,
        product: itemName,
        type: theme,
        language: getLocale(lang),
      });

      handleSetItemDescription(res.data.content);
      handleSetItemName(res.data.product);
      handleSetQuestionId(res.data.id);

      router.push(`/${lang}/question/progress?theme=${res.data.type}&keyword=${res.data.product}`);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleRunTimer = useCallback(() => {
    setTimer((prev) => {
      if (prev === 1) {
        setSelectedPlaceHolder(makeRandomNumber(7, itemPlaceHolder.length));
        return TIME;
      }
      return prev - 1;
    });
  }, []);

  const { intervalId } = useInterval(handleRunTimer, 1000, timerFlag);
  const handleClickRefreshTimer = () => {
    setTimer(TIME);
    setSelectedPlaceHolder(makeRandomNumber(7, itemPlaceHolder.length));
    setTimerFlag((prev) => !prev);
  };

  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    // console.log(DefaultHeight);
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [itemDescription]);

  const handleClickPlaceHolder = (item: string) => {
    setItemName(item);
    clearInterval(intervalId);
  };

  const handleChangeToggle = () => {
    setIsOpenToggle((prev) => !prev);
  };

  const handleChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  const handleChangeItemDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setItemDescription(e.target.value);
  };

  const RefreshButtonClassName = cva(
    'flex flex-col gap-1 items-center p-[9px] justify-center w-[54px] grow-0  border border-blue-50 rounded-[8px] font-10-medium-100 ',
    {
      variants: {
        theme: {
          sara: 'bg-sara-primary text-white',
          mara: 'bg-mara-primary text-white',
        },
      },
    },
  );

  const DescriptionPlaceHolderClassName = cva(
    'cursor-pointer h-[36px] flex justify-center gap-2 items-center font-14-title-100',
    {
      variants: {
        theme: {
          sara: 'text-sara-primary bg-primary-100',
          mara: 'text-mara-primary bg-secondary-100',
        },
      },
    },
  );

  const { firstItem, secondItem, thirdItem } = useOnboard();

  return (
    <div className="question-form flex flex-col gap-3 w-full">
      <div className="제품명 ">
        <div className="flex flex-col gap-2">
          <h2 className="font-14-title-100">{t(`question_item_label_${theme}`)}</h2>
          <div className="flex flex-col rounded-[10px] border border-solid border-gray-100 overflow-hidden">
            <div ref={firstItem}>
              <input
                onChange={handleChangeItemName}
                id="input"
                type="text"
                placeholder={t('question_item_label_placeholder')}
                value={itemName}
                className="question-base-input p-[24px] align-middle"
                autoComplete="off"
              />
            </div>
            <div className="line w-full h-[1px] bg-gray-100" />
            <div className="flex w-full h-auto p-2 gap-2">
              <div className={RefreshButtonClassName({ theme })}>
                추천상품
                <div
                  className="cursor-pointer relative flex justify-center items-center"
                  onClick={handleClickRefreshTimer}
                >
                  <Refresh />

                  <div className="cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 font-14-title-100 -translate-y-1/2">
                    {timer}
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap flex-1 items-start gap-1 font-12-medium-100">
                {selectedPlaceHolder.map((index) => (
                  <div
                    onClick={() => handleClickPlaceHolder(itemPlaceHolder[index][lang])}
                    key={index}
                    className="p-2 cursor-pointer shrink-0 text-neutral-600 rounded-[8px] h-auto grow-0 bg-gray-#eaea border border-solid border-gray-#f6f6 bg-g"
                  >
                    {itemPlaceHolder[index][lang]}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="고민이유">
        <div className="flex flex-col gap-2" ref={secondItem}>
          <h2 className="font-14-title-100">{t(`question_reason_label_${theme}`)}</h2>
          <div className="flex flex-col rounded-[10px] border border-solid border-gray-100 overflow-hidden">
            <textarea
              ref={ref}
              onChange={handleChangeItemDescription}
              id="input"
              placeholder={t('question_reason_placeholder')}
              value={itemDescription}
              rows={1}
              className="question-base-input resize-none font-14-medium-140 p-[24px] text-center"
            />
            <div className="line w-full h-[1px] bg-gray-100" />
            <div className="flex flex-col w-full h-auto height-transition">
              <div onClick={handleChangeToggle} className={DescriptionPlaceHolderClassName({ theme })}>
                {t(isOpenToggle ? 'tutorial_askingTip_close' : 'tutorial_askingTip_open')}
                {isOpenToggle ? <TopArrow /> : <BottomArrow />}
              </div>
              {isOpenToggle && (
                <div className={getCssByTheme(theme, ['bg-primary-50', 'bg-secondary-50'], 'py-5 px-4')}>
                  {descriptionPlaceHolder.map((item, index) => (
                    <>
                      <div key={item.contents} className="flex flex-col gap-2">
                        <div
                          className={getCssByTheme(
                            theme,
                            ['text-primary-600', 'text-secondary-600'],
                            'font-12-title-100',
                          )}
                        >
                          {t(item.title)}
                        </div>
                        <div
                          className={getCssByTheme(
                            theme,
                            ['text-primary-700', 'text-secondary-700'],
                            'font-12-medium-140  whitespace-pre-rap break-keep',
                          )}
                        >
                          {t(item.contents)}
                        </div>
                      </div>
                      {index !== 2 && (
                        <div
                          className={getCssByTheme(
                            theme,
                            ['text-primary-200', 'text-secondary-200'],
                            'divide w-full h-[1px] my-4',
                          )}
                        />
                      )}
                    </>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        ref={thirdItem}
        type="submit"
        onClick={handleSubmitQuestion}
        className={getCssByTheme(
          theme,
          ['bg-sara-primary', 'bg-mara-primary'],
          'button h-[48px] rounded-[10px] text-white font-14-title-100 flex justify-center items-center',
        )}
      >
        {t(`question_submit_${theme}`)} {itemName}
      </button>
    </div>
  );
}
