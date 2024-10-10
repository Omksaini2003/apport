import React from 'react';
import TicketCard from './TicketCard';

const TicketList = ({ tickets, users }) => {
  const sortTicketsByPriority = (data) => {
    // Sort tickets by priority in decreasing order, and by title in lexicographical order if priorities are the same
    const sortedTickets = data.tickets.sort((a, b) => {
      if (b.priority === a.priority) {
        return a.title.localeCompare(b.title);
      }
      return b.priority - a.priority;
    });
    
    // Return the sorted tickets
    return { ...data, tickets: sortedTickets };
  };

  // Sort tickets
  sortTicketsByPriority({ tickets });

  // Helper function to get user by ID
  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div className="ticket-list" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
      {tickets.map((ticket) => {
        const user = getUserById(ticket.userId);
        return (
          <div key={ticket.id} style={{ width: '100%' }}>
            <TicketCard ticket={ticket} user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default TicketList;
