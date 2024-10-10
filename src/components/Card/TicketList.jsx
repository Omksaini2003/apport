import React, { useState, useEffect } from 'react';
import TicketCard from './TicketCard';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  // Fetch data from the API
  const fetchTicketData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace with your API URL
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  useEffect(() => {
    fetchTicketData();
  }, []);

  const getUserById = (userId) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div className="ticket-list">
      {tickets.map((ticket) => {
        const user = getUserById(ticket.userId);
        return <TicketCard key={ticket.id} ticket={ticket} user={user} />;
      })}
    </div>
  );
};

export default TicketList;
