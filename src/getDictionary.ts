import 'server-only';

const dictionary = () => import('@/dictionaries/description.json');

export const getDictionary = async () => dictionary();
