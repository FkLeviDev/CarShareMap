import styles from './UserProfile.module.css';

interface UserProfileProps {
  name: string;
}

export function UserProfile({ name }: UserProfileProps) {
  return (
    <div className={styles.userProfile}>
      <span className={styles.avatar}>{name.charAt(0).toUpperCase()}</span>
      <span>{name}</span>
    </div>
  );
}
