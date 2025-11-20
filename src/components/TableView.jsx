import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';


const getPriorityClass = (priority) => {
    return priority.toLowerCase();
};

const TableView = ({ columnData, onDeleteTask }) => {
    const allCards = columnData.flatMap(column => 
        column.cards.map(card => ({
            ...card,
            columnTitle: column.title,
            columnId: column.id,
        }))
    );

    return (
        <div className="board list-view-container">
            <h2 style={{ padding: '0 20px', margin: '10px 0 20px 0' }}>All Tasks</h2>
            
            <table className="tasks-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Label</th>
                        <th>Priority</th>
                        <th>Assignees</th>
                        <th>Comments</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allCards.length === 0 ? (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', padding: '20px' }}>No tasks found.</td>
                        </tr>
                    ) : (
                        allCards.map(task => (
                            <tr key={task.id}>
                                <td>{task.title}</td>
                                <td>
                                    <span className={`status-dot ${task.columnTitle.toLowerCase().replace(' ', '-')}`}></span> 
                                    {task.columnTitle}
                                </td>
                                <td><span className={`label-tag ${task.label.toLowerCase().replace(' ', '-')}`}>{task.label}</span></td>
                                <td><span className={`priority-tag ${getPriorityClass(task.priority)}`}>{task.priority}</span></td>
                                <td>{task.assignees}</td>
                                
                                <td>{task.comments}</td>
                                <td>
                                    <button 
                                        onClick={() => onDeleteTask(task.id, task.columnId)}
                                        className="table-delete-button"
                                        title="Delete Task"
                                    >
                                        <IoTrashOutline />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default TableView;