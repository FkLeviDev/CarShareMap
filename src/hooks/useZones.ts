import { useEffect, useState } from 'react';
import type { Zone } from '../types';

// Ha lesz kész backend, csak ezt az URL-t kell átírni
const ZONES_URL = '/data/zones.json';

// Közös cache, hogy a Header és a ZoneMapPage ne töltse le kétszer
let zonesPromise: Promise<Zone[]> | null = null;

function loadZones(): Promise<Zone[]> {
  if (!zonesPromise) {
    zonesPromise = fetch(ZONES_URL).then((res) => {
      if (!res.ok) throw new Error('Nem sikerült betölteni a zóna adatokat.');
      return res.json() as Promise<Zone[]>;
    });
    // Hiba esetén legközelebb újrapróbálhassa
    zonesPromise.catch(() => { zonesPromise = null; });
  }
  return zonesPromise;
}

export function useZones() {
  const [zones, setZones] = useState<Zone[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadZones()
      .then((data) => { if (!cancelled) setZones(data); })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Ismeretlen hiba történt.');
      })
      .finally(() => { if (!cancelled) setIsLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return { zones, isLoading, error };
}
