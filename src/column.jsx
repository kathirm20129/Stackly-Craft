import React from 'react';
import Card from './card'; 
import { IoAddOutline } from 'react-icons/io5';

function Column({ id, title, count, cards, onAddCard, onDeleteTask }) {
  const columnClassName = title.toLowerCase().replace(' ', '-');


  const handleAddClick = () => {
    onAddCard(id); 
  };

  return (
    <div className="column">
      <div className="column-header">
        <h3 className="column-title">
          <span className={`status-dot ${columnClassName}`}></span>
          {title} <span className="task-count">{count}</span>
        </h3>
        <button className="add-button" onClick={handleAddClick}>
          <IoAddOutline />
        </button>
      </div>
      <div className="card-list">
        {cards.map(card => (
          <Card 
            key={card.id} 
            data={card} 
            columnId={id} 
            onDeleteTask={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;