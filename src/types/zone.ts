/** Parkolóhely állapota (az utolsó három telephelyi állapot) */
export type SpotStatus =
  | 'free'
  | 'occupied'
  | 'charging'
  | 'reserved'
  | 'cleaning'
  | 'repair'
  | 'ready';

/** Zóna típusa: elvitel / leadás / telephely */
export type ZoneType = 'pickup' | 'dropoff' | 'depot';

/** Zónaszűrő értéke (minden zóna, vagy egy adott típus) */
export type ZoneFilter = 'all' | ZoneType;

export interface ParkingSpot {
  id: string;
  spotNumber: string;
  status: SpotStatus;
  carModel?: string;
  plateNumber?: string;
}

export interface Zone {
  id: string;
  name: string;
  types: ZoneType[];
  occupancyRate: number;
  spots: ParkingSpot[];
}
