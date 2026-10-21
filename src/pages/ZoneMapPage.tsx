import styles from './ZoneMapPage.module.css';

export function ZoneMapPage() {
  return (
    <div className={styles.pageContainer}>
      <h3>🗺️ Zónák és Parkolóhelyek Térképes Monitorozása [1-2. Modul]</h3>
      <p>Itt fog megjelenni a győri városi térkép a zónákkal, alatta pedig a kiválasztott zóna parkolóhelyeinek rácsos alaprajza.</p>
      
      <div className={styles.placeholderBox}>
        <span>[ Zónatérkép és Spot Grid komponens helye ]</span>
      </div>
    </div>
  );
}