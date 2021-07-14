import './App.css';
import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [
        {id: 1, name: "học PHP", status: false}
      ],
      isDisplayForm : false,
      taskEdit : null,
      filter : {nameFilter : "", statusFilter : "-1"},
      sort : {by : "name", value : '1'}
    }
    
  }
  componentWillMount() {
      if (localStorage && localStorage.getItem("tasks")) {
        this.setState({
          tasks : JSON.parse(localStorage.getItem("tasks"))
        })
      }
  }
  displayForm = () => {
    this.setState ({
      isDisplayForm : true,
      taskEdit: null
    })
  }
  closeForm = () =>{
      this.setState({
        isDisplayForm : false,
        taskEdit: null
      })
  }
  randomStr() {
    return Math.floor((1+Math.random()) * 0x10000).toString() + "-" + 
          Math.floor((1+Math.random()) * 0x10000).toString(); 
  }
  submitForm = (data) =>{
    if (data.id) {
      var {tasks} = this.state;
      tasks.forEach((task, index) => {
        if (task.id === data.id) {
          task.name = data.name;
          task.status = data.status;
        }
      })
    } else {
      data.id = this.randomStr();
      var {tasks} = this.state;
      tasks.push(data);
    }
    this.setState({tasks : tasks});
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  changeStatus = (id) => {
    var {tasks} = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        task.status = !task.status;
      }
    })
    this.setState({
      tasks : tasks
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }
  deleteItem = (id) => {
    var {tasks} = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    })
    tasks.splice(result, 1);
    this.setState({
      tasks : tasks
    })
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  updateForm = (id) => {
    var {tasks} = this.state;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        this.setState({
          taskEdit : task,
          isDisplayForm: true
        })
      }
    })
  }
  onFilter = (nameFilter, statusFilter) => {
    this.setState({
      filter :{
        nameFilter : nameFilter.toLowerCase(),
        statusFilter : statusFilter
      }
    })
  }
  search = (keyWord) => {
    this.setState({
      filter: {nameFilter: keyWord, statusFilter : "-1"}
    })
  }
  onSort = (name, value) => {
    this.setState({
      sort : {
        by : name,
        value : value
      }
    })
  }
    render(){
      var { tasks, filter, sort } = this.state;
      var {isDisplayForm} = this.state;
      tasks = tasks.filter((task) => {
        if (filter.statusFilter === "-1") {
          return task.name.toLowerCase().indexOf(filter.nameFilter) != -1
        } else {
          return (task.name.toLowerCase().indexOf(filter.nameFilter) != -1 &&
                Number(task.status) === Number(filter.statusFilter))
        }       
      })
      tasks.sort((taskOne, taskTwo) => {
        if (sort.by === 'name') {
          if (taskOne.name.toLowerCase() > taskTwo.name.toLowerCase()) return +sort.value
          else return -sort.value;
        } else {
          if (Number(taskOne.status) < Number(taskTwo.status)) return +sort.value
          else return -sort.value;
        }
      })
      return (        
        <div className = "container">
          <div className = "title">
            <h1 className = "text-center">Quản lý công việc</h1>
          </div>
          <div className = "row">
            <div className= {isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" : ""}>
              {isDisplayForm === true ? <TaskForm closeForm = {this.closeForm} onSubmit = {this.submitForm}
                                          taskEdit ={this.state.taskEdit}/>: ""}
            </div>
            <div className = {isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" :
                          "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
              <div className = "buttonAdd">
                <button type="button" className="btn btn-primary" onClick = {this.displayForm}>
                  <i className="fas fa-plus"></i> Thêm công việc
                </button>
              </div>
              <Control search = {this.search} onSort = {this.onSort}/>
              <TaskList tasks = {tasks} changeStatus = {this.changeStatus} 
                        deleteItem = {this.deleteItem} updateForm = {this.updateForm}
                        onFilter = {this.onFilter}/>
            </div>
          </div>
        </div>
      )
    }
}

export default App;
