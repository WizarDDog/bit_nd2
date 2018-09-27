import React, { Component } from 'react';



class Body extends Component {
  render() {
    return (
      <div className="Body">
        <Left />
        <Center />
        <Right />
        <Form1 />
      </div>
    );
  }
}

class Left extends Component {
  render() {
    return (
      <div className="divas Left">
          links
         <a href="http://www.google.com">Google</a>
         <a href="http://www.google.com">Google</a>
         <a href="http://www.google.com">Google</a>
      </div>
    );
  }
}


class Center extends Component {
   constructor(props) {
       super(props);
       this.state = {value: 'tekstas'}
   }    
  
   changeOnClick(test) {
      this.setState({value: test});
   }    
      changeOnType(event){
       
       this.setState({value: event.target.value});
   }  
   render() {
     return (
       <div className="banner center">
           {this.state.value}<br/>
           <button onClick={()=>this.changeOnClick('test')}>click me</button><br/>
           <input value={this.state.value} onChange={(event)=>{this.changeOnType(event)}}/>
       </div>
     );
  }
}

class Right extends Component {
  render() {
    return (
      <div className="divas Right">
          links
         <a href="http://www.google.com">Google</a>
         <a href="http://www.google.com">Google</a>
         <a href="http://www.google.com">Google</a>
      </div>
    );
  }
}

class Form1 extends Component {

constructor(props) {
          super();
          // this.state = {value: ""}
   }
 
changeOnClick() {
       this.setState ({ value: null

       });
   }


  render() {
    return (
      <div >
        
        
        <input placeholder="Name"  value={null} />
        <input placeholder="Surname"/>
        <input placeholder="Email" />
        <input placeholder="New Password" />
        <button onClick={this.changeOnClick}>Reset</button>
      </div>
      )
  }
}
// ()=>this.changeOnClick(this.setState.value)

export default Body;