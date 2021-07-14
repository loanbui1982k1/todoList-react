import React, {Component} from 'react';

class TaskItem extends Component {
    changeStatus = () =>{
        this.props.changeStatus(this.props.task.id)
    }
    deleteItem = () => {
        this.props.deleteItem(this.props.task.id)
    }
    updateForm = () => {
        this.props.updateForm(this.props.task.id)
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

export default TaskItem;
