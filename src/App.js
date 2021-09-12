import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import TasksPage from './components/TasksPage'
import { createTask, editTask } from './actions'
import './App.css'

class App extends Component {
    onCreateTask = ({ title, description }) => {
        this.props.dispatch(createTask( title, description ))
        }

        onStatusChange = (id, status,color) => {
            this.props.dispatch(editTask(id, { status,color }))
            }

render() {
    console.log('props from App: ', this.props)
return (
<div className="main­content">
<TasksPage tasks={this.props.tasks} onCreateTask={this.onCreateTask} onStatusChange={this.onStatusChange}/> 
</div>
)
}
} 

function mapStateToProps(state) {
return {
tasks: state.tasks 
}
} 

export default connect(mapStateToProps)(App)