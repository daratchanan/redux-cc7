import React from 'react';
import { connect } from "react-redux";

function ResultList(props) {
   return (
      <div style={{ textAlign: "center" }}>
         <br></br>
         <button
            style={{ fontSize: "20px", backgroundColor: "pink", border: "3px solid purple" }}
            onClick={() => props.onAdd(props.ctrss55)}
         >Store current counter</button>
         <h1>These are results you saved.</h1>
         <ul style={{
            width: "123px",
            margin: "0 auto",
            fontSize: "23px",
            fontWeight: "bold",
            listStyleType: "square",
            color: "blue"
         }}>
            {props.rl.map(({ id, result }) => <li key={id}>
               {result}
               <button onClick={() => props.onDelete(id)}>Delete</button></li>)}
         </ul>
      </div>
   )
}

const mapStateToProps = state => {
   return {
      rl: state.resultList,
      ctrss55: state.counter,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onAdd: (value) => dispatch({ type: "STORE_RESULT", counter: value }),
      onDelete: (id) => dispatch({ type: "DELETE_RESULT", id}),
   };
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
