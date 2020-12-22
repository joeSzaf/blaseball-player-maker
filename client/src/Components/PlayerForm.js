import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const PlayerForm = ({ isShowing, hide, editPlayer, currentPlayer }) => {
    const [name, setName] = useState(currentPlayer.name || '')
    const [pregameRitual, setPregameRitual] = useState('')
    const [fate, setFate] = useState('')
    const [soulscream, setSoulscream] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const player = { name, pregameRitual, fate, soulscream }
        editPlayer(player)
        setName('')
        setPregameRitual('')
        setFate('')
        hide()
    }

    return isShowing ? ReactDOM.createPortal(
        <div className='Modal-Background'>
            <div className='Modal Modal--Generic Modal-Item'>
                <button className='Modal-Close' onClick={hide}>
                    <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'>
                        <path d='M405 136.798L375.202 107 256 226.202 136.798 107 107 136.798 226.202 256 107 375.202 136.798 405 256 285.798 375.202 405 405 375.202 285.798 256z'></path>
                    </svg>
                </button> 
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label>Pregame Ritual</label>
                        <input type="text" name="pregame-ritual" required onChange={(e) => setPregameRitual(e.target.value)} />
                    </div>
                    <div>
                        <label>Fate</label>
                        <input type="number" min="1" max="99" name="pregame-ritual" required onChange={(e) => setFate(e.target.value)}/>
                    </div>
                    <div>
                        <label>Soulscream</label>
                        <input type="text" name="soulscream" required onChange={(e) => setSoulscream(e.target.value)}/>
                    </div>
                    <button>Add Player</button>
                </form>
            </div>
        </div>, document.body
    ) : null
}

export default PlayerForm