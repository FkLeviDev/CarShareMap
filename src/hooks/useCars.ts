import type { Car } from '../types';
import { useFetchData } from './useFetchData';

// Ha lesz kész backend, csak ezt az URL-t kell átírni
const CARS_URL = '/data/cars.json';
const EMPTY: Car[] = [];

export function useCars() {
  const { data, isLoading, error } = useFetchData<Car[]>(CARS_URL, EMPTY);
  return { cars: data, isLoading, error };
}
