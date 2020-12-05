let currentBugId = 0;

export function addNew(bugName,project) {
  const newBug = {
    id: ++currentBugId,
    name: bugName,
    isClosed: false,
    project:project.name,
    createdAt: new Date()
  };
  console.log(project);
  const action = { type: "BUG_ADD_NEW", payload: newBug };
  return action;
}