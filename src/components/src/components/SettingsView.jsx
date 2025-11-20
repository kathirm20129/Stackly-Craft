import React from 'react';

const SettingsView = ({ isDarkMode, setIsDarkMode, receiveNotifications, setReceiveNotifications }) => {
  return (
    <div className="settings-view-container">
      <h2>Application Settings</h2>
      
      <div className="setting-group">
        <h3>Theme</h3>
        <div className="setting-item">
          <span>Dark Mode</span>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={(e) => setIsDarkMode(e.target.checked)} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      
      <div className="setting-group">
        <h3>Notifications</h3>
        <div className="setting-item">
          <span>Receive Email Notifications</span>
          <label className="switch">
            <input type="checkbox" checked={receiveNotifications} onChange={(e) => setReceiveNotifications(e.target.checked)} />
            <span className="slider round"></span>
          </label>
        </div>
        <p className="setting-description">Current Status: {receiveNotifications ? 'Enabled' : 'Disabled'}</p>
      </div>

      <div className="setting-group">
        <h3>Account</h3>
        <p className="setting-description">Manage your account preferences and security here.</p>
      </div>

    </div>
  );
};

export default SettingsView;