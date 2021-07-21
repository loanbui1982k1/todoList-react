import React, {Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameFilter: "",
      statusFilter: "-1"  
    }
  }
  onChange = (event)=> {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.filter(name === "nameFilter" ? value : this.state.nameFilter.toLocaleLowerCase(), 
          name === "statusFilter" ? value : this.state.statusFilter)
    this.setState({
      [name] : value
    })
  }
    
    render(){
        var {tasks} = this.props;
        var eleTasks = tasks.map((task, index) => {
            return <TaskItem key= {task.id} index = {index} task = {task} />
        });
        return (
            <table class="table table-bordered text-center mt-4">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Trạng thái</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"></th>
                    <td>
                      <input className="input" value ={this.state.nameFilter} 
                             name = "nameFilter" onChange = {this.onChange}></input>
                    </td>
                    <td>
                      <select value = {this.state.statusFilter} className = "mt-2"
                              name = "statusFilter" onChange = {this.onChange}>
                        <option value = "-1">Tất cả</option>
                        <option value = "1">Kích hoạt</option>
                        <option value = "0">Ẩn</option>
                      </select>
                    </td>
                    <td></td>
                  </tr>
                  {eleTasks}
                </tbody>
              </table>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    tasks : state.tasks
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    filter : (filterName, filterStatus) => {
      dispatch(actions.filter(filterName, filterStatus))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
