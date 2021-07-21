import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../actions/index';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord : ""
    }
  }
  onChange = (event) => {
    var target = event.target;
    var value = target.value;
    this.setState({
      keyWord : value
    })
  }
  searchKey = (event) => {
    if (event.keyCode === 13 || event.key === 'Enter') {
      this.props.search(this.state.keyWord)
      this.setState({
        keyWord :""
      })
    }
  }
  search = () => {
    this.props.search(this.state.keyWord)
    this.setState({
      keyWord :""
    })
  }
    render(){
      return (
        <div className = "input-group">
            <input type="text" placeholder= "Nhập từ khóa" className="form-control" 
                  value = {this.state.keyWord} onChange = {this.onChange} onKeyDown = {this.searchKey}></input>
            <div className="input-group-append">
                
            <button type="button" className="btn btn-primary" onClick = {this.search}>
                <i class="fas fa-search"></i> Tìm
            </button>  
            </div>
        </div>
      )
    }
}
const mapStateToProps = (state) => {
  return {
    
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    search : (searchName) => {
      dispatch(actions.search(searchName))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
