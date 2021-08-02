import React from 'react'

export default function Item(props) {
    return (
        <>
            <dt> {props.titulo}</dt>
            <dd> {props.definicion}</dd>
        </>
    )
}
