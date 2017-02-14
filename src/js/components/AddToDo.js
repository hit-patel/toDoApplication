import React,{Component} from "react";

  class AddToDo extends Component {
    handleClick(event){
      event.preventDefault();
      this.props.onHandleSubmit();
      this.refs._form.reset();
    }
    render(){
      return(
        <div>
        <form className="form-inline space" ref="_form" onSubmit={this.handleClick.bind(this)}>
          <input
            placeholder="Add Your plan Here !!!!!"
            className="wholeWidth" type="text"
            onChange={event => this.props.inputValue(event.target.value)}
             required
         />
          <button className="btn btn-default" type="submit">submit</button>
        </form>

        </div>

      )
    }
  }
  export default AddToDo;
