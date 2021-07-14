import React, {Component} from 'react';
import Search from "./Search.js";
import Sort from "./Sort.js";
class Control extends Component {
  search = (keyWord) => {
    this.props.search(keyWord);
  }
  onSort = (name, value) => {
    this.props.onSort(name, value)
  }
    render(){
      return (
        <div className = "row mt-3">
            <div className = "col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <Search search = {this.search}/>    
            </div>
            <Sort onSort = {this.onSort} />
        </div>
      )
    }
}

export default Control;
