import React from 'react'

const Task = (props) => { 
const TASK_STATUSES = [ 'Unstarted','In Progress','Completed']
return (
<div className="task" style={{backgroundColor: props.task.color}}>
<div className="task­header p-1">
<div>{props.task.title}</div> 
<select value={props.task.status}  onChange={(e)=>onStatusChange(e)}>
{TASK_STATUSES.map(status => (
<option key={status} value={status}>{status}</option>
))}
</select>
</div>
<hr />
<div className="task­body p-1">{props.task.description}</div>
</div>
)
function onStatusChange(e) { 
    props.onStatusChange(props.task.id, e.target.value)
    }
}
export default Task