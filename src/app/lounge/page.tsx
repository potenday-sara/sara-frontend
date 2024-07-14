'use client';

import { useState } from 'react';
import QuestionList from '@/app/lounge/_components/QuestionList';

export type Tab = '최신' | '베스트';

export default function page() {
  const [activeTab, setActiveTab] = useState<Tab>('최신');

  const handleClickTab = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex flex-col flex-1 h-full">
      <div className="border-solid border-b border-black-#f4 px-8">
        <nav className="flex space-x-1 gap-8 font-16-title-100">
          <button
            onClick={() => handleClickTab('최신')}
            className={`py-2 text-center transition duration-300 ${
              activeTab === '최신' ? 'border-b-2 border-black-#333' : 'border-b-2 border-transparent'
            }`}
          >
            최신
          </button>
          <button
            onClick={() => handleClickTab('베스트')}
            className={`py-2 text-center transition duration-300 ${
              activeTab === '베스트' ? 'border-b-2 border-black-#333' : 'border-b-2 border-transparent '
            }`}
          >
            베스트
          </button>
        </nav>
      </div>
      <QuestionList tab={activeTab} />
    </main>
  );
}
