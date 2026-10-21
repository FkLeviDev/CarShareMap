import type { SearchFocus } from '../../types';
import { GlobalSearch } from '../search/GlobalSearch';
import { UserProfile } from './UserProfile';
import styles from './Header.module.css';

interface HeaderProps {
  onSelectResult: (focus: SearchFocus) => void;
}

export function Header({ onSelectResult }: HeaderProps) {
  return (
    <header className={styles.topHeader}>
      <GlobalSearch onSelectResult={onSelectResult} />
      <UserProfile name="Admin" />
    </header>
  );
}
