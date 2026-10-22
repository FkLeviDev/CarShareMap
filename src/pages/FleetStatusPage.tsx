import { useMemo} from 'react';
import type { Car } from '../types';
import { useCars } from '../hooks/useCars';
import { useZones } from '../hooks/useZones';
import { CarGrid } from '../components/fleet/CarGrid';
import styles from './FleetStatusPage.module.css';


export function FleetStatusPage() {
  const { cars, isLoading, error } = useCars();
  const { zones } = useZones();


  // zoneId → zóna neve, a kártyák helyszín mezőjéhez
  const zoneNames = useMemo(
    () => Object.fromEntries(zones.map((z) => [z.id, z.name])),
    [zones],
  );

  const handleSelectCar = (car: Car) => {
    console.log('Kiválasztott autó:', car);
  };
  
  return (
    <div className={styles.pageContainer}>
      <div className={styles.sectionHeader}>
        <div>
          <h3>Flotta</h3>
          <p>A carsharing flotta összes autója.</p>
        </div>
        {!isLoading && !error && <span className={styles.count}>{cars.length} autó</span>}
      </div>

      {isLoading && <div className={styles.statusBox}>Autók betöltése...</div>}
      {error && <div className={styles.errorBox}>Hiba: {error}</div>}

      {!isLoading && !error && (
        <CarGrid cars={cars} zoneNames={zoneNames} onSelectCar={handleSelectCar} />
      )}
    </div>
  );
}
