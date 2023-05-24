import React from 'react'

export default function Alert(props) {
    function capitalize(str){
        let newStr = str.charAt(0).toUpperCase() + str.slice(1)
        return newStr
    }
    return (
        props.alert &&
        <> 
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}  </strong>{props.alert.msg}
            </div>
        </>
    )
}
