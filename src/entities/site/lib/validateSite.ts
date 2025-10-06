import type { Site } from '../model/types';

export function validateSite(site: Partial<Site>): site is Site {
  const numberKeys: (keyof Site)[] = ['id', 'longitude', 'latitude'];
  
  return (
    numberKeys.every(
      key => typeof site[key] === 'number' && !Number.isNaN(site[key] as number)
    ) &&
    typeof site.name === 'string' &&
    site.name.trim().length > 0
  );
}
