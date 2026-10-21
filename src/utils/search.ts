import type { SearchResult, SearchResultGroup, Zone } from '../types';
import { SEARCH_GROUPS } from '../constants/labels';

const MAX_PER_GROUP = 5;

/** Kereshető lista építése a zónákból (autók, zónák, üres helyek) */
export function buildSearchIndex(zones: Zone[]): SearchResult[] {
  const results: SearchResult[] = [];

  for (const zone of zones) {
    results.push({
      kind: 'zone',
      id: zone.id,
      title: zone.name,
      subtitle: `${zone.spots.length} parkolóhely · ${zone.occupancyRate}% foglalt`,
      zoneId: zone.id,
    });

    for (const spot of zone.spots) {
      const hasCar = spot.plateNumber && spot.plateNumber !== '-';
      results.push(
        hasCar
          ? {
              kind: 'car',
              id: spot.id,
              title: spot.plateNumber!,
              subtitle: `${spot.carModel ?? ''} · ${zone.name} · ${spot.spotNumber}`,
              zoneId: zone.id,
              spotId: spot.id,
            }
          : {
              kind: 'spot',
              id: spot.id,
              title: spot.spotNumber,
              subtitle: `${spot.carModel ?? 'Üres hely'} · ${zone.name}`,
              zoneId: zone.id,
              spotId: spot.id,
            },
      );
    }
  }

  return results;
}

/** Szűrés a keresőszövegre, csoportosítva és csoportonként limitálva */
export function searchGrouped(index: SearchResult[], query: string): SearchResultGroup[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return SEARCH_GROUPS.map((group) => ({
    ...group,
    items: index
      .filter(
        (r) =>
          r.kind === group.kind &&
          (r.title.toLowerCase().includes(q) || r.subtitle.toLowerCase().includes(q)),
      )
      .slice(0, MAX_PER_GROUP),
  })).filter((group) => group.items.length > 0);
}
