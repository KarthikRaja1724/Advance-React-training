import { useState } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as projectActionCreators from './actions';
const Projects = ({ projects, addNew }) => {
  const [newProjectName, setNewProjectName] = useState("");
  return (
    <div>
      <h3>Projects</h3>
      <hr/>
      <label>Project Name : </label>
      <input
        type="text"
        onChange={evt => setNewProjectName(evt.target.value)}
      />
      <input
        type="button"
        value="Add New"
        onClick={() => addNew(newProjectName)}
      />
      <div>
        {projects.map(project => (
          <span key={project.id}> [{project.name}] </span>
        ))}
      </div>
    </div>
  );
};
function mapStateToProps(storeState){
  const projects=storeState.projectState;
  return {projects:projects};
}
function mapDispatchToProps(dispatch){
  const projectActionDispatchers=bindActionCreators(projectActionCreators,dispatch)
  return projectActionDispatchers;
}
export default connect(mapStateToProps,mapDispatchToProps)(Projects);