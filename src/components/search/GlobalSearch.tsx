import { useCallback, useMemo, useRef, useState } from 'react';
import type { SearchFocus, SearchResult } from '../../types';
import { useZones } from '../../hooks/useZones';
import { useGlobalShortcut } from '../../hooks/useGlobalShortcut';
import { useClickOutside } from '../../hooks/useClickOutside';
import { buildSearchIndex, searchGrouped } from '../../utils/search';
import { SearchDropdown } from './SearchDropdown';
import styles from './GlobalSearch.module.css';

interface GlobalSearchProps {
  onSelectResult: (focus: SearchFocus) => void;
}

export function GlobalSearch({ onSelectResult }: GlobalSearchProps) {
  const { zones } = useZones();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const index = useMemo(() => buildSearchIndex(zones), [zones]);
  const groups = useMemo(() => searchGrouped(index, query), [index, query]);
  const flatResults = groups.flatMap((g) => g.items);
  const trimmedQuery = query.trim();

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  useGlobalShortcut(focusInput);
  useClickOutside(wrapperRef, close);

  const select = (item: SearchResult) => {
    onSelectResult({ zoneId: item.zoneId, spotId: item.spotId, key: Date.now() });
    setQuery('');
    setIsOpen(false);
    inputRef.current?.blur();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((i) => Math.min(i + 1, flatResults.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((i) => Math.max(i - 1, 0));
        break;
      case 'Enter':
        if (flatResults[activeIndex]) select(flatResults[activeIndex]);
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const showDropdown = isOpen && trimmedQuery.length > 0;

  return (
    <div className={styles.searchContainer} ref={wrapperRef}>
      <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>

      <input
        ref={inputRef}
        type="text"
        placeholder="Keresés rendszámra, autóra, zónára..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setIsOpen(true);
          setActiveIndex(0);
        }}
        onFocus={() => setIsOpen(true)}
        onKeyDown={onKeyDown}
        className={styles.searchInput}
        aria-label="Globális keresés"
        aria-expanded={showDropdown}
      />

      {!query && <kbd className={styles.shortcut}>Ctrl K</kbd>}

      {showDropdown && (
        <SearchDropdown
          groups={groups}
          query={trimmedQuery}
          activeIndex={activeIndex}
          onHover={setActiveIndex}
          onSelect={select}
        />
      )}
    </div>
  );
}
