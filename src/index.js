/* 
入口js
*/
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './App'
import store from './redux/store'

// ReactDOM.render(<App store={store}/>, document.getElementById('root'))


// store.subscribe(()=>{   //绑定监视store内部状态的改变 如果有改变那么将重新渲染标签
//     ReactDOM.render(<App store={store}/>, document.getElementById('root'))
// })


//Provider 将会收到store对象提供给所有的容器组件
ReactDOM.render(
    ( <Provider store={store}>
         <App/>
      </Provider>
    ), document.getElementById('root'))