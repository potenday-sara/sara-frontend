import { useLocation } from 'react-router-dom';

const useGetRoute = () => {
  const { pathname } = useLocation();
  const route = pathname.split('/').slice(1);
  return route;
};

export default useGetRoute;
