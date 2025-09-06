import ContactBlockComponent from '@/components/blocks/contact-block-component';
import EmployeesBlockComponent from '@/components/blocks/employees-block-component';
import FaqBlockComponent from '@/components/blocks/faq-block-component';
import HeaderBlockComponent from '@/components/blocks/header-block-component';
import ProgramsBlockComponent from '@/components/blocks/programs-block-component';
import QuickNewsMarqueeBlockComponent from '@/components/blocks/quick-news-marquee-block-component';
import { ASSET } from '@/constants/assets-constants';
import { BLOCK_TYPE } from '@/constants/blocks-constants';
import { getPageBySlug } from '@/services/get/get-page-by-slug';
import { CatchAllDynamicPageProps } from '@/types/props/common-props';

export async function generateMetadata({ params }: CatchAllDynamicPageProps) {
  const page = await getPageBySlug({ params });

  return {
    metadataBase: new URL('https://fitvive.com'),
    title: page?.meta?.title || page?.pageTitle,
    description: page?.meta?.description,
    keywords: page?.meta?.keywords,
    openGraph: {
      images: [
        {
          url: page?.meta?.thumbnail || ASSET.THUMBNAIL,
          width: 1200,
          height: 630
        }
      ]
    }
  };
}

const blocks = {
  [BLOCK_TYPE.CONTACT_FORM]: ContactBlockComponent,
  [BLOCK_TYPE.EMPLOYEES]: EmployeesBlockComponent,
  [BLOCK_TYPE.FAQ]: FaqBlockComponent,
  [BLOCK_TYPE.PROGRAMS]: ProgramsBlockComponent,
  [BLOCK_TYPE.QUICK_NEWS_MARQUEE]: QuickNewsMarqueeBlockComponent
} as const;

const PageWithPrimaryLayout = async ({ params }: CatchAllDynamicPageProps) => {
  const page = await getPageBySlug({ params });

  return !page ? <div>Not found</div> : (
    <>
      {page.isBreadcrumbsVisible && <HeaderBlockComponent pageTitle={page.pageTitle} />}
      {
        page.layout && page.layout.map(({ id, ...section }) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Component = blocks[section.blockType] as any;

          if (!Component) return null;

          return (
            <Component key={id} {...section} />
          );
        })
      }
    </>
  );
};

export default PageWithPrimaryLayout;
