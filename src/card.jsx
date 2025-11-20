import React from 'react';
import { LuMessageSquare } from 'react-icons/lu'; 
import { VscChecklist } from 'react-icons/vsc'; 
import { IoTrashOutline } from 'react-icons/io5';

function Card({ data, columnId, onDeleteTask }) {
  const { id, label, priority, title, desc, assignees, comments } = data; 

  const handleDelete = () => {
    onDeleteTask(id, columnId);
  };

  return (
    <div className="card">
      <div className="card-labels">
        <span className={`label-tag ${label.toLowerCase().replace(' ', '-')}`}>{label}</span>
        <span className={`priority-tag ${priority.toLowerCase()}`}>{priority}</span>
      </div>

      <h4 className="card-title">{title}</h4>
      {desc && <p className="card-description">{desc}</p>}

      <div className="card-footer">
        <div className="assignees-group">
          <div className="assignee-avatar">A</div>
          <div className="assignee-avatar">D</div>
        </div>
        <div className="meta-info">
          <span className="meta-item"><VscChecklist /> {assignees}</span>
          <span className="meta-item"><LuMessageSquare /> {comments}</span>
        </div>
        <button 
          onClick={handleDelete} 
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#dc3545', 
            cursor: 'pointer', 
            fontSize: '1em',
            marginLeft: 'auto', 
            padding: '0'
          }}
          title="Delete Task"
        >
          <IoTrashOutline />
        </button>
      </div>
    </div>
  );
}

export default Card;