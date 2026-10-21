import styles from './PerformancePage.module.css';

export function PerformancePage() {
  return (
    <div className={styles.pageContainer}>
      <h3>📊 Carsharing Teljesítményelemzés [4. Modul]</h3>
      <p>Kihasználtsági KPI kártyák, leggyakrabban bérelt autótípusok, napi tranzakciók oszlopdiagramja.</p>
      
      <div className={styles.placeholderBox}>
        <span>[ Statisztikai Dashboard és Diagramok helye ]</span>
      </div>
    </div>
  );
}