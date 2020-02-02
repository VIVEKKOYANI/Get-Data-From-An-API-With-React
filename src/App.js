import React from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  
   this.state = { 
     items: [],
     isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(json => {
      this.setState({
      isLoaded: true,
      items: json,
    });
  });
  }
   render() { 
     var { isLoaded, items } = this.state;

     if(!isLoaded) {
       return <div>Loading...</div>
     }
     else{  

     return (
       <div>
         <ul>
           {items.map(item => (
             <li key = {item.id}>
               Name: {item.name} | Email: {item.email}  
             </li>
           ))}
         </ul>
       </div>
       );
   }
 }
}
  

export default App;
