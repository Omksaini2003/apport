import React, { useState } from 'react';
import './Dropdown.css'; // For CSS styling
import drop from '../../assets/Display.svg'
import down from '../../assets/down.svg'

const Dropdown = () => {
  // State to track dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  const closeDropdown = (event) => {
    if (!event.target.closest('.dropdown')) {
      setIsOpen(false);
    }
  };

  // Attach a listener to handle clicks outside the dropdown
  React.useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
        <img className='display-img' src={drop} alt='drop'/>
        Display
        <img className='down-img' src={down} alt='down'/>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
