import React, {Component} from 'react';

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
                  value = {this.state.keyWord} onChange = {this.onChange}></input>
            <div className="input-group-append">
                
            <button type="button" className="btn btn-primary" onClick = {this.search}>
                <i class="fas fa-search"></i> Tìm
            </button>  
            </div>
        </div>
      )
    }
}

export default Search;
