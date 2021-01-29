import React, { useState, useEffect } from 'react';
import { getSocket } from '../utils/socket';

const ROLE_OFFICER = 'ROLE_OFFICER'
const ROLE_BACK_OFFICE = 'ROLE_BACK_OFFICE'
const ROLE_DISPATCHER = 'ROLE_DISPATCHER'
const ROLE_WITNESS = 'ROLE_WITNESS'

function Game(props) {
    const [role, setRole] = useState(ROLE_WITNESS)

    useEffect(() => {
        getSocket().on('role', setRole)
    }, () => {
        getSocket().off('role', setRole)
    })

    switch(role) {
        case ROLE_WITNESS:
            return (
                <h1>Witness</h1>
            )
        case ROLE_DISPATCHER:
            return (
                <h1>Dispatcher</h1>
            )
        case ROLE_BACK_OFFICE:
            return (
                <h1>Back Office</h1>
            )
        case ROLE_OFFICER: 
            return (
                <h1>Officer Role</h1>
            )
        default:
            return (
                <h1>Assigning Roles</h1>
            )
    }
}

export default Game;