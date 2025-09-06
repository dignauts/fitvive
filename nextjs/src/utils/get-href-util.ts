import { ROUTE } from '@/constants/routing-constants';
import { LinkAPI } from '@/types/api/common-types';

export const getHref = ({
  externalLink, internalLink, type
}: Pick<LinkAPI, 'externalLink' | 'internalLink' | 'type'>): string => {
  if (type === 'internal' && typeof internalLink === 'object' && internalLink) {
    return internalLink.slug;
  }

  return externalLink ?? ROUTE.HOME;
};
