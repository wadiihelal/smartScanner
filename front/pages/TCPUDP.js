import data from '../src/portscan2.json'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function osdetect() {
    
  return (
    <div style={{marginTop:"50px",fontSize:'20px',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {data && data.map(post=>{
        return (
            <div style={{ marginTop:"20px",fontSize:'40px',width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            {data.map (post => 
          { const i  = post
            console.log(post)
            return (
              
            <ul>
              
            <li style={{marginLeft:'110px'}}> Ip address :   {post.IPaddr}</li> 
            <br></br><li style={{fontFamily: 'lucida grande',fontSize:'45px',color:' #141823'}}>Protocols in use are :{post.Protocols[0]} / {post.Protocols[1]}</li><li style={{display:'flex',}}> </li> 
            <li style={{marginLeft:'300px'}}> {post.Ports.map (test =>
                <ol>{test}</ol>

)}</li> 

            
            <Button href="http://127.0.0.1:5000 " variant="outline-warning" size='lg' style={{width: '100%',height: '30%',justifyContent: 'center',alignItems: 'center'}}>
              Go for a specific scan
            </Button>

            </ul>
              )
          }
          )
          }
        
            </div>        )

        }
          )}
      </div>

  );  
}

export default osdetect;