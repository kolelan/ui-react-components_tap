import React, { useState } from 'react';
import Tap from './components/Tap/Tap';
import Header from './components/Layout/Header';
import ControlPanel from './components/Layout/ControlPanel';
import styles from './App.module.css';

function App() {
  const [tapSettings, setTapSettings] = useState({
    size: 150,
    shape: 'circle',
    bgColor: '#ffffff',
    contentColor: '#000000',
    borderColor: '#000000',
    borderSize: 2,
    bgOpacity: 1,
    contentOpacity: 1,
    content: 'Tap Me',
    fontSize: 16,
    offsetX: 0,
    offsetY: 0,
    borderEnabled: true,
    showShape: true
  });

  const handleSettingsChange = (newSettings) => {
    setTapSettings(newSettings);
  };

  return (
      <div className={styles.app}>
        <Header />

        <div className={styles.mainContent}>
          <div className={styles.leftPanel}>
            <div className={styles.tapPreview}>
              <Tap {...tapSettings} />
            </div>
          </div>

          <div className={styles.rightPanel}>
            <ControlPanel
                settings={tapSettings}
                onSettingsChange={handleSettingsChange}
            />
          </div>
        </div>
      </div>
  );
}

export default App;