import { MetadataRoute } from 'next';
import config from '@/data/game.config.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = config.seo.baseUrl;

  return config.routes.map((route) => ({
    url: `${baseUrl}${route.path === '/' ? '' : route.path}`,
    lastModified: new Date(),
    changeFrequency: (route.priority === '1.0' || route.priority === '0.9') ? 'daily' : 'weekly',
    priority: parseFloat(route.priority),
  }));
}
