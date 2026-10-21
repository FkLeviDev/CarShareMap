import styles from './HomePage.module.css';

interface HomePageProps {
  onNavigate: (tab: 'map' | 'fleet' | 'stats') => void;
} 

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.hero}>
        <h2>CarShare Flotta- és Zónamonitorozó Rendszer</h2>
        <p>
          Valós idejű telephelyi felügyelet, zónákra osztott parkolóhelyek kezelése, 
          valamint a flottaautók állapotának követése egyetlen modern felületen.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.primaryBtn} onClick={() => onNavigate('map')}>
            🗺️ Zónatérkép megtekintése
          </button>
          <button className={styles.secondaryBtn} onClick={() => onNavigate('stats')}>
            📊 Teljesítményelemzés megnyitása
          </button>
        </div>
      </div>
    </div>
  );
}