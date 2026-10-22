import { useEffect, useState } from 'react';

// Közös cache URL-enként, hogy ugyanazt az adatot ne töltsük le többször
const cache = new Map<string, Promise<unknown>>();

function loadOnce<T>(url: string): Promise<T> {
  if (!cache.has(url)) {
    const promise = fetch(url).then((res) => {
      if (!res.ok) throw new Error(`Nem sikerült betölteni: ${url}`);
      return res.json();
    });
    // Hiba esetén legközelebb újrapróbálhassa
    promise.catch(() => cache.delete(url));
    cache.set(url, promise);
  }
  return cache.get(url) as Promise<T>;
}

/** JSON adat betöltése URL-ről, betöltés- és hibaállapottal */
export function useFetchData<T>(url: string, initial: T) {
  const [data, setData] = useState<T>(initial);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    loadOnce<T>(url)
      .then((d) => { if (!cancelled) setData(d); })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : 'Ismeretlen hiba történt.');
      })
      .finally(() => { if (!cancelled) setIsLoading(false); });
    return () => { cancelled = true; };
  }, [url]);

  return { data, isLoading, error };
}
