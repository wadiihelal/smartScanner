import React from "react"
import data from '../src/active.json'

function ActiveHosts() {
  return(
    <div style={{ marginTop:"50px",fontSize:'40px',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <h1 >the active hosts are :</h1>{data.map (post => 
  { const i  = post
    console.log(post)
    return (
    <ul>
    <li> {post}</li> 
    </ul>
      )
  }
  )
  }

    </div>
  )
}

export default ActiveHosts