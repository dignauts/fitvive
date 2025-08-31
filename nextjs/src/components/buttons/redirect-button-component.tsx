import { getTranslations } from 'next-intl/server';
import { FC } from 'react';

import ButtonComponent from '@/components/buttons/button-component';
import { RedirectButtonComponentProps } from '@/types/props/redirect-button-props';
import { createClassNameManager } from '@/utils/cn-util';

const cn = createClassNameManager('redirectButton');

const RedirectButtonComponent: FC<RedirectButtonComponentProps> = async ({
  className, href, name, testId
}) => {
  const t = await getTranslations();

  return (
    <ButtonComponent
      className={cn({ additionalClassNames: className })}
      linkProps={{ href }}
      testId={testId}
    >
      {name || t('button.view_all_trainers')}
    </ButtonComponent>
  );
};

export default RedirectButtonComponent;
