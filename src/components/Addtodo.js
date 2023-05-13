import {useState} from "react"

const Addtodo=(props)=>{

//our state variables which track the letters typed in each input box
const [Title,settitle]= useState("");
const [Desc,setdesc]= useState("");
const [Source,setsource]= useState("");

//our input data bundle
let inputbundle={
	head:Title,
	desc:Desc,
	src:Source
}
 
const chhead=(e)=>{

	settitle(e.target.value);
}

const chdesc=(e)=>{

	setdesc(e.target.value);


}
const chsrc=(e)=>{

	setsource(e.target.value);

	
}


 
 const onclear=()=>{
	setsource("");
	setdesc("");
	settitle("");

 }

return (

	<div id="addnote">
	<button  className="close btn" onClick={props.onClose}>Close</button>
<input id="head" value={Title} onChange={chhead} placeholder="Enter a heading for your Todo"/>
<input id="description" value={Desc} onChange={chdesc} placeholder="Describe your todo"/>
<input id="source" value={Source} onChange={chsrc} placeholder="Enter the source of your image"/>
<button className="btn upperbutton btn-primary" onClick={()=>{props.onAdd(inputbundle)}}>Add</button>
<button className="btn upperbutton delete-btn btn-danger" onClick={onclear}>Clear</button>

</div>

	);

}

export default Addtodo;