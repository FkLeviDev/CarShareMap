import type { Car } from '../../types';
import { CarCard } from './CarCard';
import styles from './CarGrid.module.css';

interface CarGridProps {
  cars: Car[];
  /** zoneId → zóna neve */
  zoneNames: Record<string, string>;
  onSelectCar?: (car: Car) => void;
}

export function CarGrid({ cars, zoneNames, onSelectCar }: CarGridProps) {
  if (cars.length === 0) {
    return <div className={styles.empty}>Nincs megjeleníthető autó.</div>;
  }

  return (
    <div className={styles.grid}>
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          locationName={car.zoneId ? zoneNames[car.zoneId] : undefined}
          onSelect={onSelectCar}
        />
      ))}
    </div>
  );
}
