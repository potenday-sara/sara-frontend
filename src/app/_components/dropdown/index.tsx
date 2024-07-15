import React, { cloneElement, useEffect, useState } from 'react';

type DropdownProps = {
  trigger: React.ReactElement;
  children: React.ReactNode;
};

function Dropdown({ trigger, children }: DropdownProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  useEffect(() => {
    const clickBody = () => {
      console.log('here');
      setShowDropdown(false);
    };
    document.body.addEventListener('click', clickBody, false);

    return () => {
      document.body.removeEventListener('click', clickBody, false);
    };
  }, []);

  const clickTrigger = (e) => {
    e.stopPropagation();
    setShowDropdown((prev) => !prev);
  };
  return (
    <div className="relative z-50">
      <div onClick={clickTrigger}>{trigger}</div>
      {showDropdown && (
        <div
          className="flex default-shadow flex-col overflow-y-scroll hide-scrollbar h-[125px] p-[5px]
        gap-[5px]
        items-center rounded-[12px] grow-0 bg-white absolute
        w-full temp"
        >
          {children}
        </div>
      )}
    </div>
  );
}

type ItemProps = {
  label: string;
};

function Item({ label }: ItemProps) {
  return (
    <div className="grow-0 w-full h-[28px] shrink-0 rounded-[8px] pl-[6px] flex items-center break-keep bg-white hover:bg-black-#ddd cursor-pointer">
      <span className="font-14-title-100">{label}</span>
    </div>
  );
}

Dropdown.Item = Item;

export default Dropdown;
