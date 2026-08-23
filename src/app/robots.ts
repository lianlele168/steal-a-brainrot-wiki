import { MetadataRoute } from 'next';
import config from '@/data/game.config.json';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${config.seo.baseUrl}/sitemap.xml`,
  };
}
