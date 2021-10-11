import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
    //Active menu
    return (
        <div>
            <Link to='/'>
                Go Home
            </Link>
            <Link to='/login'>
                Go Login
            </Link>
        </div>
    )
}
