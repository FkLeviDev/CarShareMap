import { useEffect, useRef } from 'react';
import type { ParkingSpot } from '../../types';
import { SPOT_STATUS_LABELS } from '../../constants/labels';
import styles from './SpotCard.module.css';

interface SpotCardProps {
  spot: ParkingSpot;
  highlighted?: boolean;
  onSelect?: (spot: ParkingSpot) => void;
}

export function SpotCard({ spot, highlighted, onSelect }: SpotCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Keresőből kiválasztva: görgessünk oda
  useEffect(() => {
    if (highlighted) ref.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, [highlighted]);

  return (
    <div
      ref={ref}
      className={`${styles.spotCard} ${styles[spot.status]} ${highlighted ? styles.highlighted : ''}`}
      onClick={() => onSelect?.(spot)}
    >
      <div className={styles.spotHeader}>
        <span className={styles.spotNumber}>{spot.spotNumber}</span>
        <span className={styles.spotStatusBadge}>{SPOT_STATUS_LABELS[spot.status]}</span>
      </div>

      <div className={styles.spotBody}>
        {spot.carModel ? (
          <>
            <p className={styles.carModel}>{spot.carModel}</p>
            <p className={styles.plateNumber}>{spot.plateNumber}</p>
          </>
        ) : (
          <p className={styles.emptyText}>Üres parkolóhely</p>
        )}
      </div>
    </div>
  );
}
