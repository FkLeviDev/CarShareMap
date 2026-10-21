import type { ParkingSpot, Zone } from '../../types';
import { SpotCard } from './SpotCard';
import styles from './SpotGrid.module.css';

interface SpotGridProps {
  zone: Zone | null;
  highlightedSpotId?: string | null;
  onSelectSpot?: (spot: ParkingSpot) => void;
}

export function SpotGrid({ zone, highlightedSpotId, onSelectSpot }: SpotGridProps) {
  if (!zone) {
    return (
      <div className={styles.placeholderBox}>
        <span>[ Válassz ki egy zónát a fenti listából a részletekhez ]</span>
      </div>
    );
  }

  return (
    <div className={styles.zoneContent}>
      <div className={styles.zoneSubHeader}>
        <h4>Aktív zóna: {zone.name}</h4>
      </div>

      {zone.spots.length === 0 ? (
        <p className={styles.emptySpots}>Ebben a zónában még nincsenek rögzített parkolóhelyek.</p>
      ) : (
        <div className={styles.spotsGrid}>
          {zone.spots.map((spot) => (
            <SpotCard
              key={spot.id}
              spot={spot}
              highlighted={spot.id === highlightedSpotId}
              onSelect={onSelectSpot}
            />
          ))}
        </div>
      )}
    </div>
  );
}
