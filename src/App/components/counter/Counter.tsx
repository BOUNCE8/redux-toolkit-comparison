import React from 'react'
import '../../../App/App.css'

import { useSelector } from 'react-redux';
import { State } from "../../../type";

const Counter = () => {
  const editedCount = useSelector((state: State) => state.counter)
  return (
    <div>
      <div className="App__counter">Todos Updated Count: {editedCount} </div>
      
    </div>
  )
}

export default Counter
