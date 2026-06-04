import { MetadataRoute } from 'next'

const pujaSlugs = [
  'mangal-dosh',
  'kaal-sarp-dosh',
  'rudrabhishek',
  'mahamrityunjay',
  'mangal-bhat-puja',
  'kumbh-ark-vivah',
  'guru-chandal-dosh',
  'angarak-dosh',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ujjainpujaseva.in'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...pujaSlugs.map((slug) => ({
      url: `${baseUrl}/puja/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}