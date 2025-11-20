import React from 'react';
import { IoSearchOutline, IoSettingsOutline, IoNotificationsOutline, IoCalendarOutline } from 'react-icons/io5';
import { MdOutlineDashboard } from 'react-icons/md';

const SideMenu = ({ activeMenuItem, setActiveMenuItem, handleBoardNavigation, className }) => {
  
  const handleMenuClick = (itemTitle) => {
    if (itemTitle.includes('Project')) {
      handleBoardNavigation('kanban'); 
    } else {
      setActiveMenuItem(itemTitle);
    }
  };
  
  return (
    <div className={className}>
      <div className="menu-brand">
        STACKLY
        <span style={{ fontSize: '0.8em', color: '#6c757d', display: 'block', fontWeight: 'normal' }}>
          thestackly.com
        </span>
      </div>  

      {/* Main Navigation */}
      <div className="menu-section">
        <p className="menu-section-title">Main Menu</p>
        
        <div 
          className={`menu-item ${activeMenuItem === 'Search' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Search')}
        >
          <IoSearchOutline style={{ marginRight: '10px' }} className="menu-icon" /> Search
        </div>
        
        <div 
          className={`menu-item ${activeMenuItem === 'Notification' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Notification')}
        >
          <IoNotificationsOutline style={{ marginRight: '10px' }} className="menu-icon" /> Notification <span style={{ marginLeft: 'auto', fontSize: '0.75em', backgroundColor: '#e9ecef', padding: '2px 8px', borderRadius: '4px' }}></span>
        </div>
        
        <div 
          className={`menu-item ${activeMenuItem === 'Calendar' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Calendar')}
        >
          <IoCalendarOutline style={{ marginRight: '10px' }} className="menu-icon" /> Calendar
        </div>
        
        <div 
          className={`menu-item ${activeMenuItem === 'Settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Settings')}
        >
          <IoSettingsOutline style={{ marginRight: '10px' }} className="menu-icon" /> Settings
        </div>
      </div>

      {/* Project Navigation */}
      <div className="menu-section">
        <p className="menu-section-title">My Pages</p>
        
        <div 
          className={`project-item `}
          onClick={() => handleMenuClick('Craftboard Project')}
        >
          <MdOutlineDashboard style={{ marginRight: '10px' }} className="menu-icon" /> Craftboard Project</div>
        <div className="project-item"><MdOutlineDashboard style={{ marginRight: '10px' }} className="menu-icon" /> Visionary Tasks</div>
        <div className="project-item"><MdOutlineDashboard style={{ marginRight: '10px' }} className="menu-icon" /> Demotion Project</div>
        <div className="project-item"><MdOutlineDashboard style={{ marginRight: '10px' }} className="menu-icon" /> Angular Studio <span style={{ marginLeft: 'auto', fontSize: '0.75em', backgroundColor: '#e9ecef', padding: '2px 8px', borderRadius: '4px' }}></span></div>
        <div className="project-item"><MdOutlineDashboard style={{ marginRight: '10px' }} className="menu-icon" /> Codemo Project</div>
        <div className="create-new">+ Create New</div>
      </div>
      
      {/* Security Prompt Box */}
      <div className="security-prompt-container">
        <div className="security-prompt">
          <MdOutlineDashboard style={{ fontSize: '2em', color: '#6e5e7dff', marginBottom: '8px' }}/>
          <p>Add an extra security to your account.</p>
          <p style={{ fontSize: '0.75em', color: '#6c757d', marginBottom: '15px' }}>
            Summary: Add a necessary method of verification before using the app.
          </p>
          <button className="security-prompt-button">Enable 2-step verification</button>
          <div className="security-prompt-learn">Learn More</div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;