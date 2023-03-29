import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {

    const {id,title,content} = useParams()

    return (
        <ul>
            <li>Message id: {id}</li>
            <li>Message title: {title}</li>
            <li>Message content: {content}</li>
        </ul>
    )
}
