import { getPageBySlug } from '@/services/get/get-page-by-slug';
import { CatchAllDynamicPageProps } from '@/types/props/common-props';

const PageWithPrimaryLayout = async ({ params }: CatchAllDynamicPageProps) => {
  const page = await getPageBySlug({ params });

  return (
    <div style={{ height: 3000, background: 'transparent' }}>
      sdasd
    </div>
  );
};

export default PageWithPrimaryLayout;
