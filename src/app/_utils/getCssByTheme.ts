import { Theme } from '@/feature/main/hooks/useSaraMara';

const getCssByTheme = (nowTheme: Theme, className: [string, string], restClassName: string) => {
  return `${className[nowTheme === 'sara' ? 0 : 1]} ${restClassName}`;
};

export default getCssByTheme;