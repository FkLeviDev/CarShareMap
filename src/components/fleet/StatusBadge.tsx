import type { CarStatus } from '../../types';
import { CAR_STATUS_LABELS } from '../../constants/labels';
import styles from './StatusBadge.module.css';

interface StatusBadgeProps {
  status: CarStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`${styles.badge} ${styles[status]}`}>{CAR_STATUS_LABELS[status]}</span>;
}
