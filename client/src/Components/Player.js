import React from 'react'

function Player(props) {
    const handleClick = () => {
        props.handleClick(props.index)
    }

    const handleEdit = () => {
        props.handleEdit(props.index)
    }

    return(
        <>
            <div className='Player-Wrapper' onClick={handleClick}>
                <div className='Player-Name'>{props.name}</div>
                <i className='material-icons' onClick={handleEdit}>edit</i>
            </div>
        </>
    )
}

export default Player