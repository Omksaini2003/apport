import './App.css';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import TicketWrapper from './components/TicketWrapper/TicketWrapper';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState('user'); // Default grouping
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

  return (
    <div className="App">
      <Navbar setGroupBy={setGroupBy} />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        {Object.entries(groupedTickets).map(([key, ticketGroup]) => (
          <TicketWrapper
            key={key}
            heading={groupBy === 'user' ? getUserName(key) : key}
            tickets={ticketGroup}
            users={users}
          />
        ))}
      </div>
    </div>
  );
}

export default App;