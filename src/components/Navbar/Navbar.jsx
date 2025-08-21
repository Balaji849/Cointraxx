import './Navbar.css';
import new_logo from '../../assets/new_logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { useContext } from 'react';
import { CoinContext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';
const Navbar = () => {


const {setCurrency} = useContext(CoinContext);
   
const currencyHandler = (event) => {
    switch (event.target.value) {
      case 'usd':{
        setCurrency({name:"usd", symbol:"$"});
        break
      }
      case 'eur':{
        setCurrency({name:"eur", symbol:"€"});
        break
      }
      case 'inr':{
        setCurrency({name:"inr", symbol:"₹"});
        break
      }
      default:{
        setCurrency({name:"usd", symbol:"$"});
        break;
      }
      
  }
}
 
  return (
    <div className='navbar'>
        <Link to={`/`}>
      <img src={new_logo} className='icon-img' alt="" srcSet="" />
      </Link>
      <ul>
       <Link to={`/`}> <li>Home</li> </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className='nav-right'>
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button >Sign In <img src={arrow_icon} className='arrow-img' alt="" srcSet="" /></button>
      </div>


    </div>
  )
}

export default Navbar