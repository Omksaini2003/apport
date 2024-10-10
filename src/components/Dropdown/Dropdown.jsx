import React, { useState, useEffect } from 'react';
import './Dropdown.css'; // For CSS styling
import drop from '../../assets/Display.svg';
import down from '../../assets/down.svg';

const Dropdown = ({ setGroupBy }) => {
  // List of all options
  const options = ['Display', 'Status', 'Priority'];
  const map = {'Display': 'user', 'Status': 'status', 'Priority': 'priority'};

  // State to track dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  // State to track the selected option, initialized with 'Display'
  const [selectedOption, setSelectedOption] = useState('Priority');

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
  useEffect(() => {
    window.addEventListener('click', closeDropdown);
    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  // Set initial grouping when component mounts
  useEffect(() => {
    setGroupBy(map[selectedOption]);
  }, []);

  // Function to handle option selection
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option
    setGroupBy(map[option]); // Update the groupBy state
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="navbar">
      <div className="dropdown">
        <button style={{width: '200px'}} className="dropdown-button" onClick={toggleDropdown}>
          <img className='display-img' src={drop} alt='drop' />
          {selectedOption} {/* Show the selected option */}
          <img className='down-img' src={down} alt='down' />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            {options
              .filter(option => option !== selectedOption) // Exclude the selected option
              .map((option) => (
                <div className="linker" key={option} onClick={() => handleOptionClick(option)}>
                  <a href="#">
                    <span className="grouping">
                      {option === 'Display' ? 'Showing' : option === 'Status' ? 'Grouping' : 'Ordering'}
                    </span>
                    <span className="display-box">
                      <span className="display">
                        <img className='display-img' src={drop} alt='drop' />
                        {option}
                        <img className='down-img' src={down} alt='down' />
                      </span>
                    </span>
                  </a>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;