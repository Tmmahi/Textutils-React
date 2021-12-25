import React from 'react'

function Alert(props) {
    return (
        props.alert && <div>
            <div class={`alert alert-${props.alert.typ}`} role="alert">
                <strong>{props.alert.ttl}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert
