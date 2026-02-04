import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import post from './schemas/post';

/**
 * Sanity configuration. This file defines the project settings and the
 * schema types available in your Studio. Note that the projectId and
 * dataset should be provided via environment variables. When running
 * locally you can create a `.env` file in this directory containing
 * SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET values.
 */
export default defineConfig({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  title: 'Noti-Blog Studio',
  plugins: [deskTool()],
  schema: {
    types: [post],
  },
});
