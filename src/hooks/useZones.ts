import type { Zone } from '../types';
import { useFetchData } from './useFetchData';

// Ha lesz kész backend, csak ezt az URL-t kell átírni
const ZONES_URL = '/data/zones.json';
const EMPTY: Zone[] = [];

export function useZones() {
  const { data, isLoading, error } = useFetchData<Zone[]>(ZONES_URL, EMPTY);
  return { zones: data, isLoading, error };
}
