import React, {Component} from 'react'
import  {increment,decrement} from './redux/actions'

/*
应用根组件
 */
class App extends Component {
  // state={ count:0}
    static propTypes = {
      store:PropTypes.object.required   //限制传参类型 
    }
    increment= ()=>{
      const number=this.refs.numberselect.value*1
      // const  count =this.props.store.getState + number
      // this.setState({count})
      this.props.store.dispatch(increment(number))
    };
    decrement= ()=>{
      const number = this.refs.numberselect.value*1;
      // const count = this.props.store.getState - number;
      // this.setState({count})
      this.props.store.dispatch({type:DECRMENT,number})    //我要手动调用这个dispatch 才能更新状态 调用触发reducer更新产生新状态，产生新状态的目的是为了更新组件
    };
    incrementifodd= ()=>{
      // const count = this.props.store.getState ;
      const number = this.refs.numberselect.value*1
      if(count %2===1){
        // this.setState({
        //   count:number+count 
        // })
      this.props.store.dispatch({type:DECRMENT,number})
      }
    };
    incrementasync= ()=>{
      const number = this.refs.numberselect.value*1;
      setTimeout(()=>{
        count:this.props.store.getState + number
      },1000)
    }
  render() {
    const count = this.props.store.getState()
    return (
     <div>
       <p>click{count}times</p>
       <select ref = 'numberselect'>
       <option value='1'>1</option>
       <option value='2'>2</option>
       <option value='3'>3</option>
       </select>
       <button onclick={this.increment}>+</button>
       <button onclick={this.decrement}>-</button>
       <button onclick={this.incrementifodd}>increment if odd</button>
       <button onclick={this.incrementasync}>increment async</button>
     </div>
    )
  }
}

export default App
