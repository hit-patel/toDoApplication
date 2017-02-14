import React from "react";
import ReactDOM from "react-dom";
import AddToDo from "./components/AddToDo";
import Table from "./components/Table";

class ToDoApp extends React.Component{
  constructor(){
    super();
    this.state ={
      input:"",
      ToDo:[]
    }
  }
  onInputChange(input){
    this.setState({
      input:input
})
  }

  // make a function that takes current input state and adds to an array on the state level.
onGetInput(){
  let obj= {
    input:this.state.input,
    isChecked:false
  }

  this.setState({
    ToDo:this.state.ToDo.concat([obj])
  })
}
onRemoveArray(index){
  let test1=this.state.ToDo;
  test1.splice(index,1);
  this.setState({
    ToDo:test1
  });
}
onComplete(index){

  if(!this.state.ToDo[index].isChecked){
    let _array= this.state.ToDo
    _array[index].isChecked=true;
    this.setState({
      ToDo:_array
    });
  }else{
      let _array= this.state.ToDo
      _array[index].isChecked=false;
    this.setState({
      ToDo:_array
    });
  };


}

  render(){
  console.log(this.state.ToDo);
    return(
      <div>
        <h1> TO DO APP!!!</h1>
        <AddToDo
        inputValue={this.onInputChange.bind(this)}
        onHandleSubmit={this.onGetInput.bind(this)}
        />

        <Table
         data={this.state.ToDo}
         onRemove={this.onRemoveArray.bind(this)}
         onComplete={this.onComplete.bind(this)} />
      </div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<ToDoApp/>, app);
