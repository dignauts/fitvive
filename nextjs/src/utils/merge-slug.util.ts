import { ROUTE } from '@/constants/routing-constants';
import { CatchAllPagesType } from '@/types/common-types';

export const mergeSlug = ({ pages }: CatchAllPagesType) => {
  if (!pages) return ROUTE.HOME;

  return pages.join('/');
};
