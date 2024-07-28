import React, { cloneElement, useEffect, useRef, useState } from 'react';

type DropdownProps = {
  trigger: React.ReactElement;
  items: any[];
  onClickItem: (item: any) => void;
};

function Dropdown({ trigger, items, onClickItem }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const clickTrigger = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-50" ref={ref}>
      <div onClick={clickTrigger}>{trigger}</div>
      {showDropdown && (
        <div
          className="flex default-shadow flex-col overflow-y-scroll hide-scrollbar h-[125px] p-[5px]
        gap-[5px]
        items-center rounded-[12px] grow-0 bg-white absolute
        w-full temp"
        >
          {items.map((item) => {
            return (
              <div
                onClick={() => {
                  onClickItem({
                    id: item.id,
                    label: item.name,
                    code: item.code,
                  });
                  setShowDropdown(false);
                }}
                key={item.id}
                className="grow-0 w-full h-[28px] shrink-0 rounded-[8px] pl-[6px] flex items-center break-keep bg-white hover:bg-black-#ddd cursor-pointer"
              >
                <span className="font-14-title-100">{item.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
