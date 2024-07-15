'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';
import { useRouter } from 'next/navigation';
import Refresh from '@/asset/svg/refresh.svg';
import useInterval from '@/app/_hooks/useInterval';
import { makeRandomNumber } from '@/app/question/_utils';
import { Theme } from '@/feature/main/hooks/useSaraMara';
import { CONSTANTS_TEXT } from '@/app/question/_constant';
import postQuestion from '@/apis/question/mutateQuestion';
import getCssByTheme from '@/app/_utils/getCssByTheme';
import { useQuestion } from '@/app/question/_context/QuestionContext';

type QuestionFormProps = {
  descriptionPlaceHolder: { title: string; contents: string }[];
  itemPlaceHolder: { item: string; description: string }[];
  theme: Theme;
};

export default function QuestionForm({ descriptionPlaceHolder, itemPlaceHolder, theme }: QuestionFormProps) {
  const router = useRouter();

  const [itemName, setItemName] = useState<string>('');
  const [itemDescription, setItemDescription] = useState<string>('');
  const [isOpenToggle, setIsOpenToggle] = useState<boolean>(false);

  const { handleSetItemDescription, handleSetItemName, handleSetQuestionId } = useQuestion();

  const [timerFlag, setTimerFlag] = useState<boolean>(false);

  // const { mutate: postSubmitQuestion } = useMutateQuestion();

  const [timer, setTimer] = useState<number>(5);
  const [selectedPlaceHolder, setSelectedPlaceHolder] = useState<number[]>(
    makeRandomNumber(11, itemPlaceHolder.length),
  );

  const handleSubmitQuestion = async () => {
    try {
      const res = await postQuestion({ content: itemDescription, product: itemName, type: theme });

      handleSetItemDescription(res.data.content);
      handleSetItemName(res.data.product);
      handleSetQuestionId(res.data.id);

      router.push(`/question/progress?type=${res.data.type}`);
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleRunTimer = useCallback(() => {
    setTimer((prev) => {
      if (prev === 1) {
        setSelectedPlaceHolder(makeRandomNumber(15, itemPlaceHolder.length));
        return 5;
      }
      return prev - 1;
    });
  }, []);

  const { intervalId } = useInterval(handleRunTimer, 1000, timerFlag);
  const handleClickRefreshTimer = () => {
    setTimer(5);
    setSelectedPlaceHolder(makeRandomNumber(15, itemPlaceHolder.length));
    setTimerFlag((prev) => !prev);
  };

  const ref = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    // console.log(DefaultHeight);
    ref.current.style.height = `${ref.current.scrollHeight}px`;
  }, [itemDescription]);

  const handleClickPlaceHolder = (item: string, description: string) => {
    setItemName(item);
    setItemDescription(description);
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

  const DescriptionPlaceHolderClassName = cva('h-[36px] flex justify-center items-center font-14-title-100', {
    variants: {
      theme: {
        sara: 'text-sara-primary bg-primary-100',
        mara: 'text-mara-primary bg-secondary-100',
      },
    },
  });

  return (
    <div className="question-form flex flex-col gap-3 w-full">
      <div className="제품명 ">
        <label className="flex flex-col gap-2" htmlFor="input">
          <h2 className="font-14-title-100">{CONSTANTS_TEXT.item_name_label[theme].ko}</h2>
          <div className="flex flex-col rounded-[10px] border border-solid border-gray-100 overflow-hidden">
            <input
              onChange={handleChangeItemName}
              id="input"
              type="text"
              placeholder="사고싶은 물건을 입력해주세요"
              value={itemName}
              className="question-base-input p-[24px] align-middle"
              autoComplete="off"
            />
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
                    onClick={() =>
                      handleClickPlaceHolder(itemPlaceHolder[index].item, itemPlaceHolder[index].description)
                    }
                    key={index}
                    className="p-2 shrink-0 text-neutral-600 rounded-[8px] h-auto grow-0 bg-gray-#eaea border border-solid border-gray-#f6f6 bg-g"
                  >
                    {itemPlaceHolder[index].item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </label>
      </div>
      <div className="고민이유">
        <label className="flex flex-col gap-2" htmlFor="input">
          <h2 className="font-14-title-100">{CONSTANTS_TEXT.item_description_label[theme].ko}</h2>
          <div className="flex flex-col rounded-[10px] border border-solid border-gray-100 overflow-hidden">
            <textarea
              ref={ref}
              onChange={handleChangeItemDescription}
              id="input"
              placeholder="고민하고 있는 이유를 알려주세요"
              value={itemDescription}
              rows={1}
              className="question-base-input resize-none font-14-medium-140 p-[24px] text-center"
            />
            <div className="line w-full h-[1px] bg-gray-100" />
            <div className="flex flex-col w-full h-auto height-transition">
              <div onClick={handleChangeToggle} className={DescriptionPlaceHolderClassName({ theme })}>
                이렇게 질문해보세요!
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
                          {item.title}
                        </div>
                        <div
                          className={getCssByTheme(
                            theme,
                            ['text-primary-700', 'text-secondary-700'],
                            'font-12-medium-140  whitespace-pre-rap break-keep',
                          )}
                        >
                          {item.contents}
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
        </label>
      </div>
      <button
        type="submit"
        onClick={handleSubmitQuestion}
        className={getCssByTheme(
          theme,
          ['bg-sara-primary', 'bg-mara-primary'],
          'button h-[48px] rounded-[10px] text-white font-14-title-100 flex justify-center items-center',
        )}
      >
        {CONSTANTS_TEXT.submit_button[theme].ko}
      </button>
    </div>
  );
}
