import { BaseComponentProps } from '@/types/props/common-props';

export interface ExpandButtonComponentProps extends BaseComponentProps {
  isExpanded?: boolean;
  onExpand?: () => void;
}
