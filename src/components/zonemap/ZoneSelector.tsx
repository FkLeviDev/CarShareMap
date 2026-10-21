import type { Zone } from '../../types';
import { ZONE_TYPE_LABELS } from '../../constants/labels';
import styles from './ZoneSelector.module.css';

interface ZoneSelectorProps {
  zones: Zone[];
  selectedZoneId: string;
  onSelectZone: (zoneId: string) => void;
}

export function ZoneSelector({ zones, selectedZoneId, onSelectZone }: ZoneSelectorProps) {
  if (zones.length === 0) {
    return (
      <div className={styles.emptyNotice}>
        Ebben a kategóriában nincs zóna.
      </div>
    );
  }

  return (
    <div className={styles.zoneSelector}>
      {zones.map((zone) => {
        const isActive = zone.id === selectedZoneId;
        return (
          <button
            key={zone.id}
            type="button"
            className={`${styles.zoneTab} ${isActive ? styles.activeZone : ''}`}
            onClick={() => onSelectZone(zone.id)}
          >
            <span className={styles.typeDots}>
              {zone.types.map((t) => (
                <span key={t} className={`${styles.typeDot} ${styles[t]}`} title={ZONE_TYPE_LABELS[t]} />
              ))}
            </span>
            <span className={styles.zoneName}>{zone.name}</span>
            <span className={styles.badge}>{zone.occupancyRate}%</span>
          </button>
        );
      })}
    </div>
  );
}