import React, { useState } from 'react'

import TOAST from "../Toast"

function Test() {
  const [toast, setToast] = useState({})
  const showToast = () => {
    setToast({
      "show": "true",
      "status": "success",
      "message": "ผู้ใช้ล็อกอินสำเร็จ"
    })
  }
  return (
    <div>
      <h1>Test Toast</h1>
      <button onClick={showToast}>show toast</button>
      <TOAST data={toast} />
    </div>
  )
}

export default Test