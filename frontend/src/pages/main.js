import React, { useEffect, useState } from 'react'
import './main.css'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import logo from '../assets/logo.svg'
import api from '../services/api'

export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // o que fazer
        async function loadusers(params) {
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id
                }
            })

            // console.log(response.data)
            setUsers(response.data)
        }

        loadusers()


    }, [match.params.id]) // quando fazer
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                {users.map(user => (
                    <li>
                        <img src={user.avatar} alt="" />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>
                        <div className="buttons">
                            <button type="button">
                                <img src={dislike} alt="Dislike" />
                            </button>
                            <button type="button">
                                <img src={like} alt="Like" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}