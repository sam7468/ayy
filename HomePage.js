import React from 'react'
import Data from './Data.json'
import {Link} from "react-router-dom"
import DetailsPage from './DetailsPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";





function HomePage({value,up}) {
    
   
    
    return (
        <div>
            <div className="Secondheader">
                <p className="Dashboard">Dashboard</p>
                <p>Cart- {value}</p>
            </div>
            <div className="Desc">
                <p>Select the best suited algo for your needs</p> 
            </div>
          
            {Data.map((item)=>
           
            <div className="tradingbots">
                <div className="botname">
                    {item.bot}
                </div>
                <div className="indexvalue">Index Value <br />
                    {item['index-value']}
                </div>
                <div className="cagr">CAGR <br />
                    {item.cagr}
                </div>
                <div className="buttons">
        
                            <Link to={"/bots-details/"+(item.id)}> 
                            <button>algo</button>
                            </Link>
                            
                    <button onClick={up}>
                    Buy
                    </button>
                    
                </div>
                
            </div>
             )}
        </div>
    )
}

export default HomePage
