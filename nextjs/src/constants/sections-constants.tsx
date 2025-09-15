import ContactBlockComponent from '@/components/blocks/contact-block-component';
import EmployeesBlockComponent from '@/components/blocks/employees-block-component';
import FaqBlockComponent from '@/components/blocks/faq-block-component';
import HeroBlockComponent from '@/components/blocks/hero-block-component';
import PricingBlockComponent from '@/components/blocks/pricing-block-component';
import ProgramsBlockComponent from '@/components/blocks/programs-block-component';
import QuickNewsMarqueeBlockComponent from '@/components/blocks/quick-news-marquee-block-component';
import { BLOCK_TYPE } from '@/constants/blocks-constants';

export const sections = {
  [BLOCK_TYPE.CONTACT_FORM]: ContactBlockComponent,
  [BLOCK_TYPE.EMPLOYEES]: EmployeesBlockComponent,
  [BLOCK_TYPE.FAQ]: FaqBlockComponent,
  [BLOCK_TYPE.HERO]: HeroBlockComponent,
  [BLOCK_TYPE.SUBSCRIPTION]: PricingBlockComponent,
  [BLOCK_TYPE.PROGRAMS]: ProgramsBlockComponent,
  [BLOCK_TYPE.QUICK_NEWS_MARQUEE]: QuickNewsMarqueeBlockComponent
} as const;
