import React from 'react';

 


class SelectBox extends React.Component {
 constructor(props){
   super(props);
   this.state ={
     hide: true,
     text: ""
   }
 }

 handleReveal =(e)=>{
   e.preventDefault()
   if(this.state.hide){
     this.setState({hide:false})
   }
   else{
   this.setState({hide:true})
   }
 }

 addText =(id='services')=>{
let check = document.getElementById(`${id}`);
let arr = []

if(this.state.text.length > 1){
  let x = this.state.text
  x.split(", ").map(val=>{
    arr.push(val)
  })
  
}
if(check.checked){
  arr.push(check.value)
  this.setState({text: arr.join(", ")})
}
else{
  
  this.setState({text: arr.filter(x=> x !== check.value).join(", ")})
}

 }

 handleOptions=()=>{
  let options = ['Parking', 'Lounge', 'Wi-Fi', 'Other'];
  return options.map((op, i)=>{


    return (<li key={i}>
      <input type="checkbox" 
    name={op.toLowerCase()} 
    value={op} 
    onClick={()=>this.addText(op.toLowerCase())}
    id={op.toLowerCase()}
    /> {op}</li>)
  })
 }

  render() {

 let {hide, text} = this.state;
    return (
      <div className="form-style-8">
        <label>Services</label>
<input className="form-control" autoComplete="off" type="text" name="services" value={text} onClick={this.handleReveal} id="services" placeholder="Add Service"/>
<ul style={{"listStyle":"none"}} className={hide ? 'd-none': ''}>
{this.handleOptions()}
</ul>
</div>
    );
  }
}

export default SelectBox