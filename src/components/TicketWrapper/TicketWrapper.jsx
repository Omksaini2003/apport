import React from 'react';

import TicketList from '../Card/TicketList';
import BacklogIcon from '../../assets/Backlog.svg';
import TodoIcon from '../../assets/Todo.svg';
import InprogressIcon from '../../assets/In progress.svg';
import DoneIcon from '../../assets/Done.svg';
import CancelledIcon from '../../assets/Cancelled.svg';

import Nopriority from '../../assets/No priority.svg';
import Low from '../../assets/Low.svg';
import Medium from '../../assets/Medium.svg';
import High from '../../assets/High.svg';
import Urgent from '../../assets/Urgent.svg';


const TicketWrapper = ({ tickets, users, filterBy, style, heading }) => {
  // console.log(tickets.length)
  // Function to filter tickets based on the provided filter criteria
  const filterTickets = (tickets) => {
    if (!filterBy || !filterBy.type || !filterBy.value) {
      return tickets;
    }

    switch (filterBy.type) {
      case 'status':
        return tickets.filter(ticket => ticket.status === filterBy.value);
      case 'priority':
        const allPriorities = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];

        // Create a map to associate priorities with their indices
        const priorityMap = new Map();
        allPriorities.forEach((priority, index) => {
          priorityMap.set(priority, index);
        });
        return tickets.filter(ticket => ticket.priority === priorityMap.get(filterBy.value));
      case 'userId':
        return tickets.filter(ticket => ticket.userId === filterBy.value);
      default:
        return tickets;
    }
  };

  // Get the filtered tickets
  const filteredTickets = filterTickets(tickets);
  // console.log(filteredTickets.length)

  // Function to get the correct icon based on the filterBy value
  const getIcon = (value) => {
    switch (value) {
      case 'Backlog':
        return BacklogIcon;
      case 'Todo':
        return TodoIcon;
      case 'In progress':
        return InprogressIcon;
      case 'Done':
        return DoneIcon;
      case 'Cancelled':
        return CancelledIcon;
      case 'No priority':
        return Nopriority;
      case 'Low':
        return Low;
      case 'Medium':
        return Medium;
      case 'High':
        return High;
      case 'Urgent':
        return Urgent;
      default:
        return null;
    }
  };

  const icon = getIcon(filterBy.value);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {icon && (
          <img
            src={icon}
            alt={filterBy.value}
            style={{ marginRight: '10px', width: '20px', height: '20px' }}
          />
        )}
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold', 
          marginBottom: '20px' 
        }}>
          {heading}
          <span style={{
            color: '#888', // Grayish color for the length
            fontWeight: 'normal', 
            marginLeft: '20px' 
          }}>
            {filteredTickets.length}
          </span>
        </h3>

      </div>
      <TicketList style={{ ...style }} tickets={filteredTickets} users={users} />
    </div>
  );
};

export default TicketWrapper;