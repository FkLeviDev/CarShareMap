import type { SearchResult } from '../../types';
import { HighlightText } from './HighlightText';
import styles from './SearchResultItem.module.css';

interface SearchResultItemProps {
  item: SearchResult;
  icon: string;
  query: string;
  isActive: boolean;
  onHover: () => void;
  onSelect: () => void;
}

export function SearchResultItem({ item, icon, query, isActive, onHover, onSelect }: SearchResultItemProps) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={isActive}
      className={`${styles.resultItem} ${isActive ? styles.active : ''}`}
      onMouseEnter={onHover}
      onClick={onSelect}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.text}>
        <span className={styles.title}>
          <HighlightText text={item.title} query={query} />
        </span>
        <span className={styles.subtitle}>
          <HighlightText text={item.subtitle} query={query} />
        </span>
      </span>
      <span className={styles.enterHint}>↵</span>
    </button>
  );
}
