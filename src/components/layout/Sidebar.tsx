import type { TabId } from '../../types';
import styles from './Sidebar.module.css';

interface SidebarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export function Sidebar({ activeTab, onSelectTab }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <h2>CarShare</h2>
        <span>Flotta & Zóna Monitor</span>
      </div>

      <nav className={styles.sidebarNav}>
        <button 
          className={activeTab === 'home' ? `${styles.navBtn} ${styles.active}` : styles.navBtn} 
          onClick={() => onSelectTab('home')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/></svg>
          <span>Kezdőlap</span>
        </button>
        <button 
          className={activeTab === 'map' ? `${styles.navBtn} ${styles.active}` : styles.navBtn} 
          onClick={() => onSelectTab('map')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>
          <span>Zónatérkép</span>
        </button>
        <button 
          className={activeTab === 'fleet' ? `${styles.navBtn} ${styles.active}` : styles.navBtn} 
          onClick={() => onSelectTab('fleet')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M3 17v-5l2-5h14l2 5v5"/><path d="M3 12h18"/></svg>
          <span>Flotta Státusz</span>
        </button>
        <button 
          className={activeTab === 'stats' ? `${styles.navBtn} ${styles.active}` : styles.navBtn} 
          onClick={() => onSelectTab('stats')}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>
          <span>Teljesítményelemzés</span>
        </button>
      </nav>

      <div className={styles.sidebarFooter}>
        <p>projekt</p>
      </div>
    </aside>
  );
}