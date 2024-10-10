import React from 'react';
import TicketList from '../Card/TicketList';

const TicketWrapper = ({ tickets, users, filterBy, style }) => {
  
  // Function to filter tickets based on the provided filter criteria
  const filterTickets = (tickets) => {
    if (!filterBy || !filterBy.type || !filterBy.value) {
      return tickets;
    }

    switch (filterBy.type) {
      case 'status':
        return tickets.filter(ticket => ticket.status === filterBy.value);
      case 'priority':
        return tickets.filter(ticket => ticket.priority === filterBy.value);
      case 'user':
        return tickets.filter(ticket => ticket.userId === filterBy.value);
      default:
        return tickets;
    }
  };

  // Get the filtered tickets
  const filteredTickets = filterTickets(tickets);

  return (
    <div>
      <div>
        <h3>{filterBy.value} {filteredTickets.length}</h3>
      </div>
      <TicketList style={{...style}} tickets={filteredTickets} users={users} />
    </div>
  );
};

export default TicketWrapper;
