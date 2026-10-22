/** Flottaautó állapota */
export type CarStatus =
  | 'available'   // Elérhető, bérelhető
  | 'rented'      // Épp bérlésben
  | 'charging'    // Töltődik
  | 'cleaning'    // Takarítás / felkészítés
  | 'maintenance'; // Javítás, szerviz

export interface Car {
  id: string;
  plateNumber: string;
  brand: string;
  model: string;
  year: number;
  status: CarStatus;
  /** Akkumulátor töltöttség, 0–100 */
  batteryLevel: number;
  /** Futott kilométer */
  mileageKm: number;
  /** Hol parkol most (bérlés közben üres) */
  zoneId?: string;
  spotId?: string;
}
