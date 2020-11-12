import {connect} from "react-redux";
import "./CounterPanel.css"

function CounterPanel(props) {
   
  return (
    <div>
      <button
      onClick={props.onIncrementCounter} 
      className="button-codecamp">INCREASE</button>
      <button
      onClick={props.onDecrementCounter} 
      className="button-codecamp">DECREASE</button>
      <button
      onClick={()=>props.onAddCounter(5)} 
      className="button-codecamp">ADD 10</button>
      <button
      onClick={()=>props.onSubCounter(5)}
      className="button-codecamp">SUBTRACT 10</button>
    </div>
  );
}

const mapDispatchToProp = dispatch => {
   return {
      onIncrementCounter: () => dispatch({type: "INCREMENT"}),
      onDecrementCounter: () => dispatch({type: "DECREMENT"}),
      onAddCounter: (value) => dispatch({type: "ADD", value}),
      onSubCounter: (value) => dispatch({type: "SUB", value}),
   };
}



export default connect(null,mapDispatchToProp)(CounterPanel);