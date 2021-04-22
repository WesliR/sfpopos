// src/POPOSList.js

import React, { useState } from 'react'
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json'


function POPOSList() {
  const [ query, setQuery ] = useState('')
  // deconstruct hours here
  const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj, i) => {

    return (
      <POPOSSpace
        id={i}
        key={obj.title}
        name={obj.title}
        address={obj.address}
        image={obj.images[0]}
        hours={obj.hours} // add a new prop for hours here
      />
    )
  })
  return (
   <div className="POPOSList">
           <form>
               <input
                   value={query}
                   placeholder="search"
                   onChange={(e) => setQuery(e.target.value)}
               />
               <button type="submit">Submit</button>
           </form>
           {spaces}
   </div>
 )
}



export default POPOSList
