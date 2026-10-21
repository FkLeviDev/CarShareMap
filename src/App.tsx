import { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { HomePage } from './pages/HomePage';
import { ZoneMapPage } from './pages/ZoneMapPage';
import { FleetStatusPage } from './pages/FleetStatusPage';
import { PerformancePage } from './pages/PerformancePage';
import './App.css';

export function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'map' | 'fleet' | 'stats'>('home');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} onSelectTab={setActiveTab} />

      <main className="main-content">
        {/* Itt hívjuk meg a különálló Header komponenst */}
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />

        <div className="content-body">
          {activeTab === 'home' && <HomePage onNavigate={setActiveTab} />}
          {activeTab === 'map' && <ZoneMapPage />}
          {activeTab === 'fleet' && <FleetStatusPage />}
          {activeTab === 'stats' && <PerformancePage />}
        </div>
      </main>
    </div>
  );
}