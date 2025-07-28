// storage-adapter-import-placeholder
import path from 'path';
import { fileURLToPath } from 'url';

import { sqliteAdapter } from '@payloadcms/db-sqlite';
import { payloadCloudPlugin } from '@payloadcms/payload-cloud';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { buildConfig } from 'payload';
import sharp from 'sharp';

import { MediaCollection } from '@/collections/media-collection';
import { UsersCollection } from '@/collections/users-collection';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: UsersCollection.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  collections: [UsersCollection, MediaCollection],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts')
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || ''
    }
  }),
  sharp,
  plugins: [
    payloadCloudPlugin()
  ]
});
