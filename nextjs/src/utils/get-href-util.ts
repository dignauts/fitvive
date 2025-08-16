import { ROUTE } from '@/constants/routing-constants';
import { LinkAPI } from '@/types/api/common-types';

export const getHref = ({ externalLink, internalLink, type }: LinkAPI): string => {
  if (type === 'internal' && typeof internalLink === 'object' && internalLink) {
    return internalLink.slug;
  }

  return externalLink ?? ROUTE.HOME;
};
