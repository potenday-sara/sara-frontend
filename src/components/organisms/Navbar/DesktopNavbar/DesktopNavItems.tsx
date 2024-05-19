'use client';

import Link from 'next/link';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

interface DesktopNavItemsProps {
  NAV_ITEMS: Readonly<{ name: string; href: string }[]>;
}

export default function DesktopNavItems({ NAV_ITEMS }: DesktopNavItemsProps) {
  const pathname = usePathname();
  return (
    <ul className="flex gap-[36px] h-full">
      {NAV_ITEMS.map((nav) => (
        <li
          key={nav.name}
          className={classNames(' flex items-center', {
            'font-16-title-100 border-b-[2px] border-solid border-b-black-#333 -mb-[2px]': nav.href === `${pathname}`,
          })}
        >
          <Link href={nav.href}>
            <span>{nav.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
