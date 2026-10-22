import styles from './BatteryBar.module.css';

interface BatteryBarProps {
  level: number;
}

export function BatteryBar({ level }: BatteryBarProps) {
  const tone = level < 20 ? styles.low : level < 50 ? styles.mid : styles.high;

  return (
    <div className={styles.battery} title={`Töltöttség: ${level}%`}>
      <div className={styles.track}>
        <div className={`${styles.fill} ${tone}`} style={{ width: `${level}%` }} />
      </div>
      <span className={styles.value}>{level}%</span>
    </div>
  );
}
