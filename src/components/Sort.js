import React, {Component} from 'react';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort : {
        by : "name",
        value: "1"
      }
    }
  }
  sort = (name, value) => {
    this.props.onSort(name, value)
    this.setState({
      sort : {
        by : name,
        value: value
      }
    })
  }
    render(){
      var {by, value} = this.state.sort;
      return (
        <div class="dropdown ml-4">
            <a class="btn btn-primary dropdown-toggle" href="" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Sắp xếp
            </a>
            <ul class="dropdown-menu">
              <li onClick = {() => this.sort("name", '1')}><a  class="dropdown-item"  > <i class="fas fa-sort-alpha-up-alt mr-3"></i> Tên A-Z
                <i class={(by === 'name' && value === '1') ? "fas fa-check ml-5" : ""}></i></a></li>
              <li onClick = {() => this.sort("name", '-1')}><a class="dropdown-item" ><i class="fas fa-sort-alpha-down-alt mr-3"></i> Tên Z-A
                <i class={(by === 'name' && value === '-1') ? "fas fa-check ml-5" : ""}></i></a></li>
              <li ><hr class="dropdown-divider"></hr></li>
              <li onClick = {() => this.sort("status", '-1')}><a class="dropdown-item" >Trạng thái ẩn
                <i class={(by === 'status' && value === '-1') ? "fas fa-check ml-5" : ""}></i></a></li>
              <li onClick = {() => this.sort("status", '1')}><a class="dropdown-item" >Trạng thái kích hoạt
                <i class={(by === 'status' && value === '1') ? "fas fa-check ml-3" : ""}></i></a></li>
            </ul>
            
        </div>
      )
    }
}

export default Sort;