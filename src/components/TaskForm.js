
import React, {Component} from 'react';

class TaskForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: "",
        name : "",
        status : false
      }
    }
    close(){
        this.props.closeForm()
    }

    onChange = (event) => {
      var target = event.target;
      var name = target.name;
      var value = target.value;
      if (name === "status") {
        value = target.value === "true" ? true : false;
      }
      this.setState({
        [name] : value 
        
      })
      
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.props.closeForm();
      this.props.onSubmit(this.state)
    }
    onClear = () => {
      this.setState({
        name : "",
        status : false
      })
    }
    componentDidMount() {
      var {taskEdit} = this.props;
      if (taskEdit) {
        this.setState({
          id : taskEdit.id,
          name : taskEdit.name,
          status: taskEdit.status
        })
      }
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps && nextProps.taskEdit) {
        this.setState({
          id : nextProps.taskEdit.id,
          name : nextProps.taskEdit.name,
          status: nextProps.taskEdit.status
        })
      } else if (nextProps && nextProps.taskEdit === null) {
        this.setState({
          id: "",
          name : "",
          status : false
        })
      }
    }
    render(){
      return (
        <div className="card border-secondary mb-3">
              <div className="card-header">
                <h5>
                {this.state.id === "" ? "Thêm công việc": "Sửa công việc"}
                </h5>
                  <span className = "icon" onClick = {() =>this.close()}>
                    <i className= "fa fa-times-circle"></i>
                  </span>
              </div>
              <div className="card-body">
                <form onSubmit = {this.onSubmit}>
                <div className="input_group"  >Tên: <br />
                  <input className = "input" type = "text" name = "name"
                          value = {this.state.name} onChange = {this.onChange}></input>
                </div>
                <div >Trạng thái: <br />
                  <select className="select" name = "status" value = {this.state.status} onChange = {this.onChange}>
                    <option value = {true}>Kích hoạt</option>
                    <option value = {false}>Ẩn</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className=" button btn btn-warning">
                    <i className=" fas fa-plus"></i> Lưu lại</button>
                  <button type="button" className="button btn btn-danger" onClick = {this.onClear}>
                    <i className="fas fa-times"></i> Hủy bỏ</button>
                </div>
                </form>
              </div>
            </div>

      )
    }
}

export default TaskForm;
