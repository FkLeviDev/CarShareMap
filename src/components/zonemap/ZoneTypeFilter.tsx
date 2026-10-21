import type { Zone, ZoneFilter } from '../../types';
import { ZONE_TYPE_LABELS } from '../../constants/labels';
import styles from './ZoneTypeFilter.module.css';

interface ZoneTypeFilterProps {
  zones: Zone[];
  value: ZoneFilter;
  onChange: (value: ZoneFilter) => void;
}

const OPTIONS: ZoneFilter[] = ['all', 'pickup', 'dropoff', 'depot'];

export function ZoneTypeFilter({ zones, value, onChange }: ZoneTypeFilterProps) {
  const countFor = (option: ZoneFilter) =>
    option === 'all' ? zones.length : zones.filter((z) => z.types.includes(option)).length;

  return (
    <div className={styles.segmented} role="tablist">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          role="tab"
          aria-selected={value === option}
          className={`${styles.segment} ${value === option ? styles.active : ''}`}
          onClick={() => onChange(option)}
        >
          {option !== 'all' && <span className={`${styles.dot} ${styles[option]}`} />}
          {option === 'all' ? 'Mind' : ZONE_TYPE_LABELS[option]}
          <span className={styles.count}>{countFor(option)}</span>
        </button>
      ))}
    </div>
  );
}
