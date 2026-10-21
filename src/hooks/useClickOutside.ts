import { useEffect } from 'react';
import type { RefObject } from 'react';

/** Az elemen kívüli kattintásra meghívja a callbacket */
export function useClickOutside(ref: RefObject<HTMLElement | null>, onOutside: () => void) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onOutside();
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [ref, onOutside]);
}
