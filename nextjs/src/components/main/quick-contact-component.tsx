import { getTranslations } from 'next-intl/server';

import ContactDetailsListComponent from '@/components/lists/contact-details-list-component';
import SocialMediaIconsListComponent from '@/components/lists/social-media-icons-list-component';
import TypographyComponent from '@/components/main/typography-component';
import { getContactDetails } from '@/services/get/get-contact-details';
import { cn } from '@/utils/cn-util';

import '@/scss/quick-contact-component.scss';

const QuickContactComponent = async () => {
  const t = await getTranslations();
  const contactDetails = await getContactDetails();

  return (
    <div className={cn('quickContact')}>
      <TypographyComponent
        className={cn('quickContact', { element: 'title' })}
        color='secondary'
        component='h2'
        variant='h2'
        weight='bold'
      >
        {t('component.quick_contact.title')}
      </TypographyComponent>
      <ContactDetailsListComponent items={contactDetails?.contactItems} />
      <SocialMediaIconsListComponent {...contactDetails?.socialMedia} />
    </div>
  );
};

export default QuickContactComponent;
