import './App.css';
import React, {Component} from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';
import * as actions from './actions/index';

class App extends Component {
  constructor(props) {
    super(props)
  }
  displayForm = () => {
    this.props.displayForm()
  }

    render(){
      var {isDisplayForm} = this.props;
      return (        
        <div className = "container">
          <div className = "title">
            <h1 className = "text-center">Quản lý công việc</h1>
          </div>
          <div className = "row">
            <div className= {isDisplayForm === true ? "col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" : ""}>
              {isDisplayForm === true ? <TaskForm />: ""}
            </div>
            <div className = {isDisplayForm === true ? "col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8" :
                          "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"}>
              <div className = "buttonAdd">
                <button type="button" className="btn btn-primary" onClick = {this.displayForm}>
                  <i className="fas fa-plus"></i> Thêm công việc
                </button>
              </div>
              <Control/>
              <TaskList />
            </div>
          </div>
        </div>
      )
    }
}

const mapStateToProps = state => {
  
  return {
    isDisplayForm : state.displayForm
    
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    displayForm : () => {
      dispatch(actions.displayForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
