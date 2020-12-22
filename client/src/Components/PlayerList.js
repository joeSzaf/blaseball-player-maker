import React from 'react'

import Player from './Player'

function PlayerList(props) {
    const playerNames = props.players.map((player, index) => (
        <Player name={player.name} handleClick={props.handleClick} handleEdit={props.handleEdit} key={index} index={index}></Player>
    ))


    return(
        <ul className='Player-Container'>
           {playerNames}
        </ul>
    )
}

export default PlayerList