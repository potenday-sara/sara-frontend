'use client';

import { useEffect, useState } from 'react';
import QuestionList from '@/app/[lang]/lounge/_components/QuestionList';
import { useTranslation } from '@/app/_hooks/useTranslation';

export type Tab = '최신' | '베스트';

export default function page() {
  const [activeTab, setActiveTab] = useState<Tab>('최신');

  const handleClickTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  const [{ t }] = useTranslation('lounge');

  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="border-solid border-b border-black-#f4 px-8">
        <nav className="flex space-x-1 gap-8 font-16-title-100">
          <button
            type="button"
            onClick={() => handleClickTab('최신')}
            className={`py-2 text-center transition duration-300 ${
              activeTab === '최신' ? 'border-b-2 border-black-#333' : 'border-b-2 border-transparent'
            }`}
          >
            {t('lounge_tab_latest')}
          </button>
          <button
            type="button"
            onClick={() => handleClickTab('베스트')}
            className={`py-2 text-center transition duration-300 ${
              activeTab === '베스트' ? 'border-b-2 border-black-#333' : 'border-b-2 border-transparent '
            }`}
          >
            {t('lounge_tab_best')}
          </button>
        </nav>
      </div>
      <QuestionList tab={activeTab} />
    </main>
  );
}
