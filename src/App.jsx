import React, { useState, useEffect } from 'react';
import './App.css';
import Column from './column.jsx';
import Card from './card.jsx'; 
import initialData from './components/initialData.jsx';
import SideMenu from './components/sidemenu.jsx';
import BoardHeader from './components/BoardHeader.jsx';
import CalendarView from './components/CalendarView.jsx';
import SettingsView from './components/SettingsView.jsx';
import TableView from './components/tableview.jsx';


const MainContentPlaceholder = ({ menuItem }) => {
  return (
    <div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#ffffff', borderRadius: '8px', margin: '20px', flexGrow: 1 }}>
      <h2 style={{ color: '#007bff' }}>{menuItem}</h2>
      <p style={{ color: '#6c757d' }}>This area is dedicated to the {menuItem} features.</p>
      <p style={{ color: '#adb5bd', fontSize: '0.9em' }}>In a full application, this would load the dedicated component for this section.</p>
    </div>
  );
};

function App() {
  const [viewMode, setViewMode] = useState('kanban'); 
  const [columnData, setColumnData] = useState(initialData);
  const [activeMenuItem, setActiveMenuItem] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [receiveNotifications, setReceiveNotifications] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleNewTaskCreation = (defaultColumnId = null) => {
    if (activeMenuItem) {
        alert("Please navigate back to the 'Craftboard Project' to add new tasks.");
        return;
    }
    
    const title = prompt("Enter Task Title (required):");
    if (!title || title.trim() === "") return; 

    const desc = prompt("Enter Task Description (optional):");
    
    let priorityInput = prompt("Enter Priority (Low, Medium, or High):") || 'Low';

    const priority = priorityInput.toLowerCase().charAt(0).toUpperCase() + priorityInput.slice(1).toLowerCase();
    
    let targetColumnId = defaultColumnId;

    if (!defaultColumnId) {
        let targetColumn = null;
        const validColumns = columnData.map(c => c.title).join(', ');
        let columnTitle;

        while (!targetColumn) {
            columnTitle = prompt(`Enter Destination Column Title (Required): \nOptions: ${validColumns}`);
            if (!columnTitle) return;

            targetColumn = columnData.find(c => c.title.toLowerCase() === columnTitle.trim().toLowerCase());

            if (!targetColumn) {
                alert(`"${columnTitle.trim()}" is not a valid column title. Please try again.`);
            }
        }
        targetColumnId = targetColumn.id;
    }
    
    if (!targetColumnId) return;

    const newTask = {
        id: `t${Date.now()}`,
        label: 'Dashboard', 
        priority: priority,
        title: title.trim(),
        desc: desc ? desc.trim() : '',
        assignees: 0,
        comments: 0
    };

    setColumnData(prevData => {
      return prevData.map(column => {
        if (column.id === targetColumnId) {
          return {
            ...column,
            cards: [newTask, ...column.cards], 
            count: column.count + 1
          };
        }
        return column;
      });
    });
  };
  
  const handleAddCard = (columnId) => {
    handleNewTaskCreation(columnId);
  };

  const handleNewTaskClick = () => {
    handleNewTaskCreation(null);
  };
  
  const handleDeleteTask = (cardId, columnId) => {
    if (!window.confirm("Are you sure you want to delete this task?")) {
      return;
    }

    setColumnData(prevData => {
      return prevData.map(column => {
        if (column.id === columnId) {
          const updatedCards = column.cards.filter(card => card.id !== cardId);
          return {
            ...column,
            cards: updatedCards,
            count: updatedCards.length
          };
        }
        return column;
      });
    });
  };
  
  const handleBoardNavigation = (mode = 'kanban') => {
    setActiveMenuItem(null);
    setSearchTerm(''); 
    setViewMode(mode);
  };
  
  const filteredData = columnData.map(column => {
    if (!searchTerm.trim()) {
      return column;
    }
    
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    const filteredCards = column.cards.filter(card => 
      card.title.toLowerCase().includes(lowerCaseSearchTerm)
    );
    
    return {
      ...column,
      cards: filteredCards,
    };
  });
  
  const sideMenuClassName = `side-menu ${isMenuOpen ? 'menu-open' : ''}`;


  const renderContent = () => {
    if (activeMenuItem === 'Calendar') {
        return <CalendarView />;
    }
    if (activeMenuItem === 'Settings') {
        return (
            <SettingsView 
                isDarkMode={isDarkMode}
                setIsDarkMode={setIsDarkMode}
                receiveNotifications={receiveNotifications}
                setReceiveNotifications={setReceiveNotifications}
            />
        );
    }
    if (activeMenuItem) {
      return <MainContentPlaceholder menuItem={activeMenuItem} />;
    }

    if (viewMode === 'table') {
      return (
        <TableView 
          columnData={filteredData} 
          onDeleteTask={handleDeleteTask} 
        />
      );
    } 
    

    if (viewMode === 'kanban') {
      return (
        <div className="board kanban-view">
          {filteredData.map(column => (
            <Column 
              key={column.id} 
              id={column.id} 
              title={column.title} 
              count={column.count} 
              cards={column.cards} 
              onAddCard={handleAddCard} 
              onDeleteTask={handleDeleteTask} 
            />
          ))}
        </div>
      );
    } else if (viewMode === 'list') {
      return (
        <div className="board list-view-container">
          {filteredData.map(column => (
            <div key={column.id} className="list-group">
              <div className="list-group-header">
                <h3 className="column-title">
                  <span className={`status-dot ${column.title.toLowerCase().replace(' ', '-')}`}></span>
                  {column.title} <span className="task-count">{column.count}</span>
                </h3>
              </div>
              <div className="list-card-wrapper">
                {column.cards.map(card => (
                  <div key={card.id} className="list-card-item">
                    <Card 
                        data={card} 
                        columnId={column.id}
                        onDeleteTask={handleDeleteTask} 
                    /> 
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }
  };


  return (
    <>
      <SideMenu 
        className={sideMenuClassName} 
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={(item) => {
          setActiveMenuItem(item);
          setIsMenuOpen(false); 
        }}
        handleBoardNavigation={(mode) => {
          handleBoardNavigation(mode);
          setIsMenuOpen(false); 
        }}
      />
      <div className="main-content">
        <BoardHeader 
          viewMode={viewMode} 
          setViewMode={handleBoardNavigation}
          onNewTaskClick={handleNewTaskClick} 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeMenuItem={activeMenuItem}
          toggleMenu={toggleMenu}
          isMenuOpen={isMenuOpen}
        /> 
        
        {renderContent()}
      </div>
    </>
  );
}

export default App;

