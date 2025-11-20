import React from 'react';
// Import IoMenuOutline
import { IoSearchOutline, IoFilterOutline, IoChevronDown, IoAddOutline, IoMenuOutline } from 'react-icons/io5'; 
import SearchInput from '/src/components/SearchInput.jsx'; 

const BoardHeader = ({ viewMode, setViewMode, onNewTaskClick, searchTerm, setSearchTerm, activeMenuItem, toggleMenu, isMenuOpen }) => (
  <div className="board-header">
    <div className="header-main-section">
      <div className="project-info-row">
        <div className="project-icon">C</div>
        <div className="project-details">
          <div className="project-title">
            <h1>Craftboard Project</h1>
          </div>
          <p className="project-subtitle">Streamline HR  Operations with our Dynamic Dashboard Soluations.</p>
        </div>
      </div>
    </div>
    <div className="header-top-bar">
        <button 
          className="menu-toggle-button" 
          onClick={toggleMenu}
          title={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <IoMenuOutline style={{ fontSize: '1.5em' }} />
        </button>
    </div>

    <div className="header-main-section">
    </div>

    <div className="board-utility-bar">
      <div className="kanban-tabs">
        <div 
          className={`kanban-tab ${viewMode === 'kanban' ? 'active' : ''}`}
          onClick={() => setViewMode('kanban')}
        >
          Kanban
        </div>
        <div 
          className={`kanban-tab ${viewMode === 'table' ? 'active' : ''}`}
          onClick={() => setViewMode('table')} 
        >
          Table
        </div>
        <div 
          className={`kanban-tab ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          List
        </div>
        <div className="kanban-tab">Timeline</div>
      </div>
    
      <div className="utility-actions">
        <SearchInput 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          activeMenuItem={activeMenuItem}
        />
        <button className="filter-button">
          <IoFilterOutline style={{ marginRight: '5px' }} /> Filter
        </button>
        <button className="new-task-button" onClick={onNewTaskClick}> 
          <IoAddOutline style={{ marginRight: '5px' }} /> New Task
        </button>
      </div>
    </div>
  </div>
);

export default BoardHeader;