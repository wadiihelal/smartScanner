import data from '../src/OsDAhosts.json'
function osdetect() {
  return (
    <div style={{marginTop:"50px",fontSize:'40px',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {data && data.map(post=>{
        return (
          <div  key={post.name} >
              <h1>Host address : {post.IP} </h1>
              <h2>Name : {post.name}</h2>
              <h3>Accuracy : {post.accuracy}</h3>
              <div>
                 { post.osclass.map(data =>{
                   return(
                   <div key={post.name} >
                    <h4>Type: {data.type}</h4>
                    <h4>Vendor: {data.vendor}</h4>
                    <h4>Os family : {data.osfamily}</h4>
                    <h4> Osgen :{data.osgen}</h4>
                    <h4> Cpe :{data.cpe}</h4>
                     
                   </div>
                   )
                 }
                  )}
              </div>

              
          </div>
        )

        }
          )}
      </div>

  );  
}

export default osdetect;