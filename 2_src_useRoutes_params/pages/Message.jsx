import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
    const [messages] = useState([
        { id: '001', title: 'message1', content: 'Hello' },
        { id: '002', title: 'message2', content: 'Hello' },
        { id: '003', title: 'message3', content: 'Hello' },
        { id: '004', title: 'message4', content: 'Hello' }
    ])

    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr/>
            <Outlet/>
        </div>
    )
}
