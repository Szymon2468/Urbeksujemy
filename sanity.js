import { createClient, createImageUrlBuilder } from 'next-sanity';

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false
};

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const sanityClient = createClient(config);
