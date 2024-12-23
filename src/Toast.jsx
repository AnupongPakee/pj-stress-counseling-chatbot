import React from 'react'

import "./Toast.css"

function Toast(props) {
  const style_toast = {
    "show": {"true": {display: "block"}, "false": {display: "none"}},
    "status": {
      "success": {backgroundColor: "#24ff42"}, 
      "warn": {backgroundColor: "#ffda24"},
      "mistake": {backgroundColor: "#ff2424"}}
  }

  return (
    <div className='container toast' style={style_toast.show[props.data.show]}>
      <div className="header">
        <div className="status-and-title">
          <div className="status" style={style_toast.status[props.data.status]}></div>
          <div className="title">ระบบ</div>
        </div>
        <div className="time">ตอนนี้</div>
      </div>
      <div className="body">
        <p>{props.data.message}</p>
      </div>
    </div>
  )
}

export default Toast