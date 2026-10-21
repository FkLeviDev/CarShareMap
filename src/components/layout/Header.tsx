import styles from './Header.module.css';

interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function Header({ searchTerm, onSearchChange }: HeaderProps) {
  return (
    <header className={styles.topHeader}>
      <div className={styles.searchBarContainer}>
        <input 
          type="text" 
          placeholder="🔍 Keresés rendszámra, márkára vagy zónára..." 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.globalSearchInput}
        />
      </div>
      <div className={styles.userProfile}>
        <span>(Admin)</span>
      </div>
    </header>
  );
}