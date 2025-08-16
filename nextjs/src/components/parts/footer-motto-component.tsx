import RichTextComponent from '@/components/main/rich-text-component';
import { Footer } from '@/payload-types';
import { cn } from '@/utils/cn-util';

const FooterMottoComponent = ({ motto }: Pick<Footer, 'motto'>) => motto && (
  <RichTextComponent
    className={cn('footer', { element: 'motto' })}
    color='highlighted'
    variant='d2'
    weight='semi'
  >
    {motto}
  </RichTextComponent>
);

export default FooterMottoComponent;
