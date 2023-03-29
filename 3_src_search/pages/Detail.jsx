import React from 'react'
import {useSearchParams,useLocation} from 'react-router-dom'

export default function Detail() {

    const [search,setSearch] = useSearchParams()

    return (
        <ul>
            <li>Message id: {search.get('id')}</li>
            <li>Message title: {search.get('title')}</li>
            <li>Message content: {search.get('content')}</li>
            <li>
                <button onClick={()=>setSearch('id=008&title=Message8&content=Welcome')}>Update</button>
            </li>
        </ul>
    )
}
