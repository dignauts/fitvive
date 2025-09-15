import { FC } from 'react';

import ButtonComponent from '@/components/buttons/button-component';
import { LinkButtonsComponentProps } from '@/types/props/link-buttons-props';
import { createClassNameManager } from '@/utils/cn-util';
import { getHref } from '@/utils/get-href-util';
import '@/scss/link-buttons-component.scss';

const cn = createClassNameManager('linkButtons');

const LinkButtonsComponent: FC<LinkButtonsComponentProps> = ({
  className, links, position = 'left', testId
}) => links && links.length > 0 && (
  <div
    className={cn({
      additionalClassNames: className,
      modifiers: {
        position
      }
    })}
    data-testid={testId}
  >
    {
      links.map((link) => (
        <ButtonComponent
          key={link.id}
          linkProps={{
            href: getHref(link),
            isExternal: link.type === 'external'
          }}
          size='large'
        >
          {link.label}
        </ButtonComponent>
      ))
    }
  </div>
);

export default LinkButtonsComponent;
