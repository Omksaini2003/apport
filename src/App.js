import './App.css';
import TicketList from './components/Card/TicketList';
import Navbar from './components/Navbar';
import React, { useState, useEffect } from 'react';
import TicketWrapper from './components/TicketWrapper/TicketWrapper';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

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

  const priority = [0, 1, 2, 3, 4];
  const status = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];

  const type = 'status';
  const value = [priority, status];

  return (
    // <div className="App" style={{width: '200px'}}>
      
    //   <div style={{width: '100vw'}}>
    //     <Navbar />
    //   </div>
    //   <div style={{display: 'flex', flexDirection: 'row', gap: '50px'}}>

    //   {status.map((priorityValue) => (
    //       <TicketWrapper
    //         key={priorityValue} // Essential for performance and avoiding issues
    //         style={{ display: 'flex', flex: 1,margin:'200px' }}
    //         tickets={tickets}
    //         users={users}
    //         filterBy={{ type: type, value: priorityValue }}
    //       />
    //     ))}

       
    //   </div>
    // </div>

    <div className="App" style={{ width: '100vw' }}>
      <div style={{ width: '100vw', marginBottom: '20px' }}>
        <Navbar />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        {status.map((priorityValue) => (
          <div style={{ flex: '0 0 15%', margin: '0 10px' }} key={priorityValue}> {/* Margin added here */}
            <TicketWrapper
              style={{ width: '100%' }} // Ensure TicketWrapper takes full width of the container
              tickets={tickets}
              users={users}
              filterBy={{ type: type, value: priorityValue }}
            />
          </div>
        ))}
      </div>
    </div>
    


  );
}

export default App;
