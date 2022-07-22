import {FaTimesCircle} from "react-icons/fa";
// react iconsdan çektiğimiz X ikonu

import React from 'react'

const Task = ({task}) => {
  return (
    <div>
        <h3>{task.text} <FaTimesCircle style={{color:"red", cursor:"pointer"}}/></h3>
        <p> {task.day}</p>
    </div>
  )
}

export default Task

