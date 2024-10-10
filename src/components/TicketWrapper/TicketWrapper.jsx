// import React from 'react';
// import TicketList from '../Card/TicketList';
// import Backlog from '../../assets/Backlog.svg'
// const TicketWrapper = ({ tickets, users, filterBy, style }) => {
  
//   // Function to filter tickets based on the provided filter criteria
//   const filterTickets = (tickets) => {
//     if (!filterBy || !filterBy.type || !filterBy.value) {
//       return tickets;
//     }

//     switch (filterBy.type) {
//       case 'status':
//         return tickets.filter(ticket => ticket.status === filterBy.value);
//       case 'priority':
//         return tickets.filter(ticket => ticket.priority === filterBy.value);
//       case 'user':
//         return tickets.filter(ticket => ticket.userId === filterBy.value);
//       default:
//         return tickets;
//     }
//   };

//   // Get the filtered tickets
//   const filteredTickets = filterTickets(tickets);

//   return (
//     <div>
//     <div style={{ display: 'flex', alignItems: 'center' }}>
//       {/* Render the corresponding image based on filterBy.value */}
//       {[filterBy.value] && (
//         <img src={[filterBy.value]} alt={filterBy.value} style={{ marginRight: '10px', width: '30px', height: '30px' }} />
//       )}
//       <h3>{filterBy.value} {filteredTickets.length}</h3>
//     </div>
//     <TicketList style={{ ...style }} tickets={filteredTickets} users={users} />
//   </div>
//   );
// };

// export default TicketWrapper;



import React from 'react';
import TicketList from '../Card/TicketList';
import Backlog from '../../assets/Backlog.svg';
import Todo from '../../assets/ToDo.svg'; // Import the Todo image
import InProgress from '../../assets/InProgress.svg'; // Import the In Progress image
import Done from '../../assets/Done.svg'; // Import the Done image
import Cancelled from '../../assets/Cancelled.svg'; // Import the Cancelled image

const TicketWrapper = ({ tickets, users, filterBy, style }) => {
  
  // Mapping of status to images
  const statusImages = {
    'Backlog': Backlog,
    'Todo': Todo,
    'In progress': InProgress,
    'Done': Done,
    'Cancelled': Cancelled,
  };

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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Render the corresponding image based on filterBy.value */}
        {statusImages[filterBy.value] && (
          <img
            src={statusImages[filterBy.value]}
            alt={filterBy.value}
            style={{ marginRight: '10px', width: '30px', height: '30px' }}
          />
        )}
        <h3>{filterBy.value} {filteredTickets.length}</h3>
      </div>
      <TicketList style={{ ...style }} tickets={filteredTickets} users={users} />
    </div>
  );
};

export default TicketWrapper;
