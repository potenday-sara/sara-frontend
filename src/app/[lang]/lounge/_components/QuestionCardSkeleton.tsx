import React from 'react';

export default function QuestionCardSkeleton() {
  return (
    <div className="h-[98px] animate-pulse rounded-[16px] p-2.5 items-center border border-solid border-black-#eee flex gap-4">
      <div />
      <div className="flex-1 py-1 flex flex-col gap-3 pr-12">
        <div className="h-2 bg-slate-200 rounded w-[120px]" />
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="h-2 bg-slate-200 rounded col-span-2" />
          <div className="h-2 bg-slate-200 rounded col-span-1" />
        </div>
        <div className="h-2 bg-slate-200 rounded w-[60px]" />
      </div>
    </div>
  );
}
