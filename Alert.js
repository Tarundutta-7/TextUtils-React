import React from 'react'

function Alert(props) {
  return (

    props.alert && 
  <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{ backgroundColor: '#e2f0d9', color: '#000', border: '1px solid #b5d7a8' }}>
    <strong>{props.alert.type}</strong> { props.alert.msg}
  </div>

  ) 
}

export default Alert
