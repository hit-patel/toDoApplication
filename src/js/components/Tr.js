import React,{Component} from "react";

class  Tr extends Component{
  render(){
    return(
      <tr  className= {this.props.data.isChecked ? "completed" : ""} >
        <td>{this.props.index+1}</td>
        <td>{this.props.data.input}</td>
        <td>
          <input
            className="checkbox"
            type="checkbox"
            onChange={() => {this.props.onComplete(this.props.index)}}
            checked={this.props.data.isChecked}
          />
        </td>
        <td>
          <input
            className="btn btn-primary"
            type="button"
            value="Remove"
            onClick= {() => {this.props.onRemove(this.props.index);}}
          />
        </td>
      </tr>

    );
  }

}
export default Tr;
