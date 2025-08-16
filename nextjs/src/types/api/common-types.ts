import { Page } from '@/payload-types';
import { WithIdentifier } from '@/types/generics-types';

export type LinkAPI = WithIdentifier<{
  label: string;
  type: 'internal' | 'external';
  internalLink?: (number | null) | Page;
  externalLink?: string | null;
}>
