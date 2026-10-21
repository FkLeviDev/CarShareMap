import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ZoneMapPage } from './pages/ZoneMapPage';
import { FleetStatusPage } from './pages/FleetStatusPage';
import { PerformancePage } from './pages/PerformancePage';
import type { SearchFocus, TabId } from './types';
import './App.css';

export function App() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [searchFocus, setSearchFocus] = useState<SearchFocus | null>(null);

  // Keresési találat: átváltunk a Zónatérképre és odaugrunk
  const handleSearchSelect = (focus: SearchFocus) => {
    setSearchFocus(focus);
    setActiveTab('map');
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="main-content">
        {/* Itt hívjuk meg a különálló Header komponenst */}
        <Header onSelectResult={handleSearchSelect} />

        <div className="content-body">
          {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}
          {activeTab === 'map' && <ZoneMapPage focus={searchFocus} />}
          {activeTab === 'fleet' && <FleetStatusPage />}
          {activeTab === 'stats' && <PerformancePage />}
        </div>
      </main>
    </div>
  );
}