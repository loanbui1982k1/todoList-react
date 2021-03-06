import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';

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
      this.props.addTask(this.state)  
    }
    onClear = () => {
      this.setState({
        name : "",
        status : false
      })
    }
    componentDidMount() {
      if (this.props.updateForm) {
        var {updateForm} = this.props;
        this.setState ({
          id : updateForm.id,
          name: updateForm.name,
          status: updateForm.status
        })
      }
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.updateForm) {
        var {updateForm} = nextProps;
        this.setState ({
          id : updateForm.id,
          name: updateForm.name,
          status: updateForm.status
        })
      } else {
        this.setState({
          id: "",
          name : "",
          status : false
        })
      }
      // if (nextProps && nextProps.taskEdit) {
      //   this.setState({
      //     id : nextProps.taskEdit.id,
      //     name : nextProps.taskEdit.name,
      //     status: nextProps.taskEdit.status
      //   })
      // } else if (nextProps && nextProps.taskEdit === null) {
      //   this.setState({
      //     id: "",
      //     name : "",
      //     status : false
      //   })
      // }
    }
    render(){
      return (
        <div className="card border-secondary mb-3">
              <div className="card-header">
                <h5>
                {this.state.id === "" ? "Th??m c??ng vi???c": "S???a c??ng vi???c"}
                </h5>
                  <span className = "icon" onClick = {() =>this.close()}>
                    <i className= "fa fa-times-circle"></i>
                  </span>
              </div>
              <div className="card-body">
                <form onSubmit = {this.onSubmit}>
                <div className="input_group"  >T??n: <br />
                  <input className = "input" type = "text" name = "name"
                          value = {this.state.name} onChange = {this.onChange}></input>
                </div>
                <div >Tr???ng th??i: <br />
                  <select className="select" name = "status" value = {this.state.status} onChange = {this.onChange}>
                    <option value = {true}>K??ch ho???t</option>
                    <option value = {false}>???n</option>
                  </select>
                </div>
                <div className="text-center">
                  <button type="submit" className=" button btn btn-warning">
                    <i className=" fas fa-plus"></i> L??u l???i</button>
                  <button type="button" className="button btn btn-danger" onClick = {this.onClear}>
                    <i className="fas fa-times"></i> H???y b???</button>
                </div>
                </form>
              </div>
            </div>

      )
    }
}


const mapStateToProps = state => {
  return {
    updateForm: state.updateForm
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    addTask : (task) => {
      dispatch(actions.addTask(task))
    },
    closeForm : () => {
      dispatch(actions.closeForm())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
