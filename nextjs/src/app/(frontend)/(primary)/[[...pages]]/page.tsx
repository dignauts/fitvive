import FaqBlockComponent from '@/components/blocks/faq-block-component';
import HeaderBlockComponent from '@/components/blocks/header-block-component';
import { ASSET } from '@/constants/assets-constants';
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

const PageWithPrimaryLayout = async ({ params }: CatchAllDynamicPageProps) => {
  const page = await getPageBySlug({ params });

  return !page ? <div>Not found</div> : (
    <>
      {page.isBreadcrumbsVisible && <HeaderBlockComponent pageTitle={page.pageTitle} />}
      {
        page.layout && page.layout.map((section) => (
          <FaqBlockComponent
            faq={section.faq}
            header={section.header}
            key={section.id}
          />
        ))
      }
    </>
  );
};

export default PageWithPrimaryLayout;
