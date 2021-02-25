import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks=['jamal','razzak','faruck','kalam','jaman','forid','akmal','ladan'];
  const description=[{name:'jamal',profession:'business',hobby:'football'},
                    {name:'razz',profession:'study',hobby:'cricket'},
                    {name:'far',profession:'job',hobby:'pet animal'},
                    {name:'kal',profession:'farming',hobby:'swimming'}]
  return (
            <div className="App">
              <header className="App-header">
                <h1>My heading</h1>
                <Singer></Singer>
                <DynamicName name={nayoks[0]} job='Driver'></DynamicName>
                <DynamicName name={nayoks[2]} job='sailor'> </DynamicName>
                <ObjectValue name={description[0].name} profession={description[0].profession} hobby={description[0].hobby}></ObjectValue> 
                <ObjectValue name={description[1].name} profession={description[1].profession} hobby={description[1].hobby}></ObjectValue>
                <ObjectValue name={description[2].name} profession={description[2].profession} hobby={description[2].hobby}></ObjectValue>
                <ObjectValue name={description[3].name} profession={description[3].profession} hobby={description[3].hobby}></ObjectValue>
              </header>
            </div>
         );
        }

function Singer(){
            var person = {name:"Dr.Mahfuz" ,
                          job:"singer"
                         }
            var person2 = {name:"Eva Rahmal" ,
                             job:"Kokil konti"
                      }
            var a ={color:'red',
            backgroundColor:"blue",
            border:'2px solid red',
            borderRadius:"50px"
                    }
  return(<div>
    <h1 style={a}>name: {person.name+ ' ' +person.job}</h1>
    <h1 style={{color:'green',
                backgroundColor:"white",
                border:'20px solid red',
                borderRadius:"50px"
              }}>name: {person2.name+' '+person.job}</h1>
    <h1>math in react = {(2+5)*25+5}</h1>
    <p>my first paragraph</p>
    <Person></Person> 
    </div>
  )
}
function Person(){
  var style ={
     display:'flex',
     alignContent:'center'}
  return <div ><span style={style}><p style={{border: '2px solid blue', paddingTop:'2px',marginTop:"30px"}}>hare use another function <br/> with different style</p><h1 style={{border: '2px solid green',marginBottom:'5px'}}>sakib al hasan</h1></span></div>
}
function DynamicName(props){
  return (
    <div>
      <h3>name: {props.name} <br/> job: {props.job}</h3>
    </div>
  )
}
function ObjectValue(props){
  var style2 = {
    border:'5px solid gold',
    borderRadius:'20px',
    backgroundColor:'grey',
    flexDirection:'row'  
  }
  
  return(
    <div >
      <div>
        <h3 style={style2}>name: {props.name} <br/> profession: {props.profession} <br/> hobby: {props.hobby}</h3>
      </div>
    </div>
  )
}

export default App;






