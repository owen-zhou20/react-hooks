import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function Message() {

    const navigate = useNavigate()

    const [messages] = useState([
        { id: '001', title: 'message1', content: 'Hello' },
        { id: '002', title: 'message2', content: 'Hello' },
        { id: '003', title: 'message3', content: 'Hello' },
        { id: '004', title: 'message4', content: 'Hello' }
    ])

    function showDetail(m){
        navigate('detail',{
            replace:false,
            state:{
                id:m.id,
                title:m.title,
                content:m.content
            }
        })
    }

    return (
        <div>
            <ul>
                {
                    messages.map((m) => {
                        return (
                            <li key={m.id}>
                                <Link 
                                to="detail" 
                                state={{
                                    id:m.id,
                                    title:m.title,
                                    content:m.content,
                                }}
                                >{m.title}</Link>
                                <button onClick={()=>showDetail(m)}>Show detail</button>
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
