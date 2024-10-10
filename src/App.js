import './App.css';
import TicketList from './components/Card/TicketList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TicketList />
    </div>
  );
}

export default App;
