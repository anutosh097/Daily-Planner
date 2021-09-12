import { uniqueId } from '../actions'

const mockTasks = [ 
    {
    id:uniqueId(),
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
    // color: "#00FFFF"
    },
    {
    id:uniqueId(),
    title: 'Peace on Earth',
    description: 'No big deal.',
    status: 'In Progress',
    // color: "#00FFFF"
    },
    {
      id:uniqueId(),
      title: "Do grocery",
      description: "Grocery",
      status: "Completed",
      // color: "#ADFF2F"
    },
    {
      id:uniqueId(),
      title: "Read tech and programming books",
      description: "Read tech and programming books",
      status: "Unstarted",
      // color: "#FF7F50"
    },
    {
      id:uniqueId(),
      title: "Do projects",
      description: "Do different projects to upgrade",
      status: "Unstarted",
      // color: "#FF7F50"
    }
    ]


export default function tasks(state = {tasks : mockTasks}, action) { 
  if(action.type === 'CREATE_TASK'){
      return {tasks: state.tasks.concat(action.payload)};
  }
  if (action.type === 'EDIT_TASK') { 
    const { payload } = action
    return {
    tasks: state.tasks.map(task => { 
    if (task.id === payload.id) {
      if(task.status === "Unstarted"){
        task.color = "#FF7F50"; 
      }else if(task.status === "In Progress"){
        task.color = "#00FFFF";
      }else{
        task.color = "#ADFF2F";
      }
    return Object.assign({}, task, payload.params)
    } 
    return task
    })
    }
    }
    return state
    }