import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import TicketWrapper from './components/TicketWrapper/TicketWrapper';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('priority'); // Default grouping
  const [loading, setLoading] = useState(true);

  const fetchTicketData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicketData();
  }, []);

  const groupTickets = () => {
    const allStatuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
    const allPriorities = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
    const allUsers = users.map(user => user.id);

    let grouped = {};

    if (groupBy === 'status') {
      allStatuses.forEach(status => {
        grouped[status] = tickets.filter(ticket => ticket.status === status);
      });
    } else if (groupBy === 'user') {
      allUsers.forEach(userId => {
        grouped[userId] = tickets.filter(ticket => ticket.userId === userId);
      });
    } else if (groupBy === 'priority') {
      allPriorities.forEach((priority, index) => {
        grouped[priority] = tickets.filter(ticket => ticket.priority === index);
      });
    }

    return grouped;
  };

  const getUserName = (userId) => {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Unknown User';
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const groupedTickets = groupTickets();
console.log(groupedTickets)

  return (
    <div className="App" style={{ width: '100vw' }}>
    <div style={{ width: '100vw', marginBottom: '20px' }}>
      <Navbar setGroupBy={setGroupBy} />
    </div>
  
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      {/* Render Grouped Tickets */}
      {Object.entries(groupedTickets).map(([key, ticketGroup]) => (
        <div style={{ flex: '0 0 15%', margin: '0 10px' }} key={key}> {/* Margin added here */}
        {/* <p>{ticketGroup.length}</p> */}
          <TicketWrapper
            style={{ width: '100%' }} // Ensure TicketWrapper takes full width of the container
            heading={groupBy === 'user' ? getUserName(key) : key}
            tickets={ticketGroup}
            users={users}
            filterBy={{ type: groupBy, value: key }}
          />
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;