import type { SearchResultKind, SpotStatus, ZoneType } from '../types';

export const ZONE_TYPE_LABELS: Record<ZoneType, string> = {
  pickup: 'Elvitel',
  dropoff: 'Leadás',
  depot: 'Telephely',
};

export const SPOT_STATUS_LABELS: Record<SpotStatus, string> = {
  free: 'Szabad',
  occupied: 'Foglalt',
  charging: 'Töltődik',
  reserved: 'Fenntartott',
  cleaning: 'Takarítás',
  repair: 'Javítás',
  ready: 'Kiadható',
};

export const SEARCH_GROUPS: { kind: SearchResultKind; label: string; icon: string }[] = [
  { kind: 'car', label: 'Autók', icon: '🚗' },
  { kind: 'zone', label: 'Zónák', icon: '📍' },
  { kind: 'spot', label: 'Parkolóhelyek', icon: '🅿️' },
];
