import { withPayload } from '@payloadcms/next/withPayload';
import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs']
    };

    return webpackConfig;
  }
};

const withNextIntl = createNextIntlPlugin('./src/i18n/requests-i18n.ts');

export default withNextIntl(
  withPayload(nextConfig, { devBundleServerPackages: false })
);
