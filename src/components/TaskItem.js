import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
    changeStatus = () =>{
        this.props.changeStatus(this.props.task.id)
    }
    deleteItem = () => {
        this.props.deleteTask(this.props.task.id)
    }
    updateForm = () => {
        this.props.updateForm(this.props.task)
    }
    render(){
        var {task, index} = this.props;
        return ( 
            <tr >
            <td>{index + 1}</td> 
            <td>
                {task.name}
            </td>
            <td >
            <span className = {task.status === true ? "label label-success" : "label label-danger"}
                                onClick = {this.changeStatus}>{task.status === true ? "Kích hoạt" : "Ẩn"}</span>
            </td>
            <td>
                <div>
                    <button type="button" className=" button btn btn-warning" onClick = {this.updateForm}>
                        <i className="fas fa-edit"></i> Sửa</button>
                    <button type="button" className="button btn btn-danger" onClick = {this.deleteItem}>
                        <i className="fas fa-trash"></i> Xóa</button>
                </div>
            </td>
            </tr>
      )
    }
}
const mapStateToProps = state => {
    return {
      
    }
  }
const mapDispatchToProps = (dispatch, props) => {
    return {
      changeStatus : (id) => {
        dispatch(actions.changeStatus(id))
      },
      updateForm : (task) => {
        dispatch(actions.updateTask(task))
      },
      deleteTask : (id) => {
        dispatch(actions.deleteTask(id))
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
