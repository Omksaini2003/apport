import React from "react";
import "./Card.css";
import toDo from "../../assets/Todo.svg";
import backlog from "../../assets/Backlog.svg";
import inPro from "../../assets/In progress.svg";

const TicketCard = ({ ticket, user }) => {
  const getStatusImage = (status) => {
    switch (status) {
      case "Todo":
        return toDo;
      case "In progress":
        return backlog;
      case "Backlog":
        return inPro;
      default:
        return null; // Return null or a default image if no match
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        <div className="card-avatar">
          {/* <img
          // src = {`https://xsgames.co/randomusers/avatar.php?g=pixel`}
          // src = {`https://api.dicebear.com/7.x/pixel-art/svg`}
            // src={`https://api.example.com/users/${ticket.userId}/avatar`} // Placeholder URL
            alt="Avatar"
            className="avatar-img"
          /> */}
        </div>
      </div>
      <h2 className="card-title">{ticket.title}</h2>
      <div className="card-tags">
        <div className="tag icon-tag">
        <img
            src={getStatusImage(ticket.status)}
            alt={ticket.status}
            className="status-img"
        />
        </div>
        <div className="tag text-tag">{ticket.tag[0]}</div>
      </div>
      {/* <div className="card-status">
        <p>Status: {ticket.status}</p>
        <p>Priority: {ticket.priority}</p>
        <p>Assigned to: {user?.name || 'Unknown'}</p>
      </div> */}
    </div>
  );
};

export default TicketCard;
