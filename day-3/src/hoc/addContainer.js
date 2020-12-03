import React from 'react'

const addContainer = (Component, className) => (props) => (
    <div className={'container ' + className}>
        <Component {...props}/>
    </div>
)

export default addContainer