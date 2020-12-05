import { useState } from 'react';
import {connect} from 'react-redux';
const BugEdit = ({ addNew ,projects}) => {
  const [newBugName, setNewBugName] = useState("");
  let selectedId= -1;
  return (
    
    <section className="edit">
      <label htmlFor="">Bug Name :</label>
      <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
      <label htmlFor="">Project :</label>
    <select name="" id="projectSelect" onChange={()=>selectedId = document.getElementById("projectSelect").selectedIndex}>
      
    <option value="">---Select---</option>
      {projects.map((project) =>      
       <option key={project.id} value={project.name}>{project.name}</option>
     )}
    </select>
      <input type="button" value="Add New" onClick={() => addNew(newBugName,projects[selectedId-1])} />
    </section>
  );
};
function mapStatetoProps(storeState){
  return {projects:storeState.projectState};
}
export default connect(mapStatetoProps,null)(BugEdit);