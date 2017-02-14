import React,{Component} from "react";
import Tr from "./Tr";

class Table extends Component  {
  render(){
// console.log(this.props.data);
const showData =
this.props.data.map((input, i) =>{
return(
  <Tr
    key={i}
    data={input}
    index={i}
    onRemove={this.props.onRemove}
    onComplete={this.props.onComplete}
  />
);
});

  return (
  <div className="col-xs-12">
    <table className="table table-bodered table-striped spaces">

            <thead>
              <tr>
                <th>TASK NUMBER</th>
                <th>TASK</th>
                <th>STATUS</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {showData}

            </tbody>

    </table>



   </div>
 );
   }
}
export default Table;
