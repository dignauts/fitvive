import { payloadService } from '@/services/payload-service';
import { CatchAllDynamicPageProps } from '@/types/props/common-props';
import { mergeSlug } from '@/utils/merge-slug.util';

export const getPageBySlug = async ({ params }: CatchAllDynamicPageProps) => {
  const { pages } = await params;
  const slug = mergeSlug({ pages });

  try {
    const payload = await payloadService();
    const page = await payload.find({
      collection: 'pages',
      limit: 1,
      where: {
        slug: {
          equals: slug
        }
      }
    });

    return page.docs.at(0) || null;
  } catch (error) {
    console.error(error);

    return null;
  }
};
