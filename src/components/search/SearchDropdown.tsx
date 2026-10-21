import type { SearchResult, SearchResultGroup } from '../../types';
import { SearchResultItem } from './SearchResultItem';
import styles from './SearchDropdown.module.css';

interface SearchDropdownProps {
  groups: SearchResultGroup[];
  query: string;
  activeIndex: number;
  onHover: (index: number) => void;
  onSelect: (item: SearchResult) => void;
}

export function SearchDropdown({ groups, query, activeIndex, onHover, onSelect }: SearchDropdownProps) {
  // Folyamatos index a csoportokon át (billentyűs navigációhoz)
  let runningIndex = -1;

  return (
    <div className={styles.dropdown} role="listbox">
      {groups.length === 0 ? (
        <div className={styles.noResults}>Nincs találat erre: „{query}”</div>
      ) : (
        groups.map((group) => (
          <div key={group.kind} className={styles.group}>
            <div className={styles.groupLabel}>{group.label}</div>
            {group.items.map((item) => {
              runningIndex += 1;
              const i = runningIndex;
              return (
                <SearchResultItem
                  key={`${item.kind}-${item.id}`}
                  item={item}
                  icon={group.icon}
                  query={query}
                  isActive={i === activeIndex}
                  onHover={() => onHover(i)}
                  onSelect={() => onSelect(item)}
                />
              );
            })}
          </div>
        ))
      )}

      <div className={styles.footer}>
        <span><kbd>↑</kbd><kbd>↓</kbd> navigálás</span>
        <span><kbd>↵</kbd> megnyitás</span>
        <span><kbd>Esc</kbd> bezárás</span>
      </div>
    </div>
  );
}
