import '../App.css';
import Dropdown from './Dropdown/Dropdown';

const Navbar = ({setGroupBy}) => {
  return (
    <div>
        <div className='navbar'>
            <Dropdown setGroupBy={setGroupBy}/>
        </div>
    </div>
  )
}

export default Navbar