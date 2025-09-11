import { Media, PricingFeature } from '@/payload-types';
import { BaseComponentProps } from '@/types/props/common-props';

export interface SubscriptionItemComponentProps extends BaseComponentProps {
  isRecommended?: boolean | null;
  icon: number | Media;
  title: string;
  description: string;
  prices: {
    monthly: number;
    yearly: number;
  };
  features: (number | PricingFeature)[];
}

export interface SubscriptionItemPriceComponentProps extends BaseComponentProps {
  price: number;
  suffix: string;
}
