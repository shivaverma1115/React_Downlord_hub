import React from 'react'
import style from "./Notification.css" ;
function Notification({notification_title}) {
  return (
    <div className='noti'>
      <p>♨ Latests Movies - {notification_title}</p>
    </div>
  )
}

export default Notification
