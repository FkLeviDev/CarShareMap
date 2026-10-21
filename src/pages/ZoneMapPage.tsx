import { useState, useEffect } from 'react';
import type { ParkingSpot, SearchFocus, ZoneFilter } from '../types';
import { useZones } from '../hooks/useZones';
import { ZoneSelector } from '../components/zonemap/ZoneSelector';
import { SpotGrid } from '../components/zonemap/SpotGrid';
import { ZoneTypeFilter } from '../components/zonemap/ZoneTypeFilter';
import styles from './ZoneMapPage.module.css';

interface ZoneMapPageProps {
  focus?: SearchFocus | null;
}

export function ZoneMapPage({ focus }: ZoneMapPageProps) {
  const { zones, isLoading, error } = useZones();
  const [selectedZoneId, setSelectedZoneId] = useState<string>('');
  const [typeFilter, setTypeFilter] = useState<ZoneFilter>('all');
  const [highlightedSpotId, setHighlightedSpotId] = useState<string | null>(null);

  // Keresőből érkező ugrás: szűrő törlése, zóna kiválasztása, hely kiemelése
  useEffect(() => {
    if (!focus) return;
    setTypeFilter('all');
    setSelectedZoneId(focus.zoneId);
    setHighlightedSpotId(focus.spotId ?? null);
    const t = setTimeout(() => setHighlightedSpotId(null), 2500);
    return () => clearTimeout(t);
  }, [focus]);

  const visibleZones =
    typeFilter === 'all' ? zones : zones.filter((z) => z.types.includes(typeFilter));

  // Ha a kiválasztott zóna kiesik a szűrésből, az első látható zónára ugrunk
  const currentZone =
    visibleZones.find((z) => z.id === selectedZoneId) || visibleZones[0] || null;

  const handleSelectSpot = (spot: ParkingSpot) => {
    console.log('Kiválasztott parkolóhely:', spot);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.sectionHeader}>
        <h3>Városi Zónák és Parkolóhely-monitor</h3>
        <p>Válassz egy zónát a Győri Carsharing depók megtekintéséhez.</p>
      </div>

      {/* 1. Betöltési állapot */}
      {isLoading && (
        <div className={styles.statusBox}>
          <p>Zónák és parkolóhelyek betöltése...</p>
        </div>
      )}

      {/* 2. Hiba állapot */}
      {error && (
        <div className={styles.errorBox}>
          <p>Hiba: {error}</p>
        </div>
      )}

      {/* 3. Sikeres betöltés esetén a komponensek megjelenítése */}
      {!isLoading && !error && (
        <>
          <ZoneTypeFilter zones={zones} value={typeFilter} onChange={setTypeFilter} />

          <ZoneSelector
            zones={visibleZones}
            selectedZoneId={currentZone?.id ?? ''}
            onSelectZone={setSelectedZoneId}
          />

          <SpotGrid
            zone={currentZone}
            highlightedSpotId={highlightedSpotId}
            onSelectSpot={handleSelectSpot}
          />
        </>
      )}
    </div>
  );
}