import styles from './FleetStatusPage.module.css';

export function FleetStatusPage() {
  return (
    <div className={styles.pageContainer}>
      <h3>🚗 Flotta Státuszok és Üzemeltetés [3. Modul]</h3>
      <p>A carsharing flotta összes autójának listája, szűrőkkel (Készleten, Kibérelve, Visszahozva, Előkészítésre vár).</p>
      
      <div className={styles.placeholderBox}>
        <span>[ Flotta Kártyák és Szerkesztő Modál helye ]</span>
      </div>
    </div>
  );
}