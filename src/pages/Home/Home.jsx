import './Home.css';
import { useContext,useEffect,useState } from 'react';
import { CoinContext } from '../../context/Coincontext';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import bitcoinlogo from '../../assets/ddsf.png';
import ethereumlogo from '../../assets/etherem_img.png';

const Home = () => {

  const {allCoin,currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input,setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
    if(e.target.value === ""){
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async (e) => {
    e.preventDefault();
  const coins=  await allCoin.filter((item)=>{
   return item.name.toLowerCase().includes(input.toLowerCase()) || item.symbol.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }


  useEffect(() => {
    setDisplayCoin(allCoin)
  },[allCoin])
  

  return (
    <>
    <motion.img
        src={ethereumlogo}
        alt="Logo"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="floating-ryt"
    />
   
    <div className='home'>
       <motion.img
        src={bitcoinlogo}
        alt="Logo"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="floating-left"
    />
    
      
      <div className='hero'>

       
        
        <h1>COINTRAXX</h1>
        <p>Welcome to the world's largest cryptocurrency
          marketplace, where you can buy, sell, and trade a wide range of digital assets. 
          Join millions of users in exploring the future of finance and investment
        </p>
        <form onSubmit={searchHandler} >
          <input onChange={inputHandler} list='coinlist' value={input} type="text" placeholder='Serach Crypto...'  required />
         
         <datalist id='coinlist'> 
         {
          allCoin.map((item,index)=>(<option key={index} value={item.name}/>
          ))}
        

         </datalist>
      
          <button type='submit'>
            Search
          </button>
        </form>
        
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p style={{textAlign:'left'}}>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className='change' >24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
            displayCoin.slice(0,10).map((item,index)=>(
              <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
                 <p style={{textAlign:"left"}} >{item.market_cap_rank}</p>
                 <div>
                  <img className='table-img' src={item.image} alt="" />
                  <p>{item.name+" - "+item.symbol}</p>
                 </div>
                 <p>{currency.symbol}{item.current_price.toLocaleString()}</p>
                 <p className={item.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                 {(item.price_change_percentage_24h ?? 0).toFixed(2)}%
                 </p>
                 <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
              </Link>
            ))

       
        }
      
      </div>

    </div>
    
    </>
  )
}

export default Home