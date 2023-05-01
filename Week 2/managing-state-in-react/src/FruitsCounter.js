import React from 'react'

function FruitsCounter(props) {
    return (
        <div>
            <h2>Total fruits: {props.fruits.length}</h2>
        </div>
    )
}

export default FruitsCounter
