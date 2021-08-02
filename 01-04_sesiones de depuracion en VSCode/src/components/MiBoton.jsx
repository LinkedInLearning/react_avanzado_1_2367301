import React from 'react'

export default function MiBoton(props) {

    const test = (e)=>{
        e.toLowerCase();
    }

    return <button onClick={test} > Test </button>;
}
