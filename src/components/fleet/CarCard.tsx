import type { Car } from '../../types';
import { StatusBadge } from './StatusBadge';
import { BatteryBar } from './BatteryBar';
import styles from './CarCard.module.css';

interface CarCardProps {
  car: Car;
  /** Zóna neve, ha parkol valahol */
  locationName?: string;
  onSelect?: (car: Car) => void;
}

export function CarCard({ car, locationName, onSelect }: CarCardProps) {
  return (
    <article className={styles.card} onClick={() => onSelect?.(car)}>
      <header className={styles.header}>
        <div>
          <h4 className={styles.name}>{car.brand} {car.model}</h4>
          <span className={styles.plate}>{car.plateNumber}</span>
        </div>
        <StatusBadge status={car.status} />
      </header>

      <BatteryBar level={car.batteryLevel} />

      <dl className={styles.meta}>
        <div>
          <dt>Helyszín</dt>
          <dd>{locationName ?? (car.status === 'rented' ? 'Úton' : '–')}</dd>
        </div>
        <div>
          <dt>Futás</dt>
          <dd>{car.mileageKm.toLocaleString('hu-HU')} km</dd>
        </div>
        <div>
          <dt>Évjárat</dt>
          <dd>{car.year}</dd>
        </div>
      </dl>
    </article>
  );
}
