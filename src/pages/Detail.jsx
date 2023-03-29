import React from 'react'
import { useLocation } from 'react-router-dom' 

export default function Detail() {

    const {state} = useLocation()

    return (
        <ul>
            <li>Message id: {state.id}</li>
            <li>Message title: {state.title}</li>
            <li>Message content: {state.content}</li>
        </ul>
    )
}
