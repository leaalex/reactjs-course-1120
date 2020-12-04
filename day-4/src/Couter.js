import React, {Component} from "react";
import './App.module.css';
import {connect} from 'react-redux'
import {add, sub} from "./redux/actions/actionList";


// class Counter extends Component {
//     state = {
//         counter: 0
//     }
//     addCounter = () => {
//         this.setState({counter: this.state.counter + 1})
//     }
//     subCounter = () => {
//         this.setState({counter: this.state.counter - 1})
//     }
//
//     render() {
//     return (
//         <React.Fragment>
//             <div className='container text-center'>
//                 <div><h1>{this.state.counter}</h1></div>
//                 <button className='btn btn-primary' onClick={this.addCounter}>+</button>
//                 <button className='btn btn-primary' onClick={this.subCounter}>-</button>
//             </div>
//             <div className='container text-center'>
//                 <div><h1>{this.props.counter}</h1></div>
//                 <button className='btn btn-primary' onClick={this.props.addCounter}>+</button>
//                 <button className='btn btn-primary' onClick={this.props.subCounter}>-</button>
//             </div>
//         </React.Fragment>
//     );
//   }
// }


const Counter = (props) => (
    <React.Fragment>
        <div className='container text-center'>
            <div><h1>{props.counter}</h1></div>
            <button className='btn btn-primary' onClick={props.addCounter}>+</button>
            <button className='btn btn-primary' onClick={props.subCounter}>-</button>
        </div>
    </React.Fragment>
)

// redux
function mapStateToProps(state){
    return {counter: state.counter}
}

function mapDispatchToProps(dispatch){
    return {
        addCounter: () => dispatch(add()),
        subCounter: () => dispatch(sub()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

