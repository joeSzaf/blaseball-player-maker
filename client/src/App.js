import React, { Component, useState, useEffect } from 'react'

import PlayerModal from './Components/PlayerModal'
import PlayerForm from './Components/PlayerForm'
import Header from './Components/Header'
import PlayerList from './Components/PlayerList'
import Footer from './Components/Footer'

import useModal from './Hooks/useModal'
import useFormModal from './Hooks/useFormModal'

import './App.css'

function App() {
  const intitialPlayers = JSON.parse(window.localStorage.getItem('players')) || []
  const {isShowing, toggle} = useModal()
  const {formIsShowing, formToggle} = useFormModal()

  const [players, setPlayers] = useState(intitialPlayers)
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const editPlayer = (player) => {
    console.log(player, selectedPlayer)
    if (selectedPlayer) {
      console.log('updating player')
      let updatedPlayers = [...players]
      updatedPlayers[selectedPlayer] = player
      setPlayers(updatedPlayers)
    } else {
      console.log('adding a new player')
      setPlayers([...players, player])
    }
    setSelectedPlayer(null)
  }

  const removePlayer = (playerToBeDeleted) => {
    setPlayers(players.filter((player) => playerToBeDeleted !== player))
  }

  useEffect(() => {
    const players = JSON.parse(localStorage.getItem('players'))
    if (players) {
      setPlayers(players)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('players', JSON.stringify(players))
  }, [players])

 

  const handleNewPlayer = () => {
    setSelectedPlayer(null)
    formToggle()
  }

  const handleViewPlayerModalClose = () => {
    setSelectedPlayer(null)
    toggle()
  }

  const handlePlayerClick = (index) => {
    console.log(index, selectedPlayer)
    setSelectedPlayer(index)
    console.log(selectedPlayer, players[selectedPlayer], index)
    toggle()
  }

  const handlePlayerEdit = (index) => {
    console.log(index, selectedPlayer)
    setSelectedPlayer(index)
    console.log(selectedPlayer, players[selectedPlayer], index)
    formToggle()
  }

  return (
    <div className="App">
      <Header></Header>
      <PlayerList
        players={players}
        removePlayer={removePlayer}
        handleClick={handlePlayerClick}
        handleEdit={handlePlayerEdit}
      >
      </PlayerList>
      <button onClick={handleNewPlayer}>Add Player</button>
      <Footer></Footer>
      <PlayerModal
        isShowing={isShowing}
        hide={handleViewPlayerModalClose}
        playerInfo={players[selectedPlayer]}
      />
      <PlayerForm
        isShowing={formIsShowing}
        hide={formToggle}
        editPlayer={editPlayer}
        currentPlayer={selectedPlayer ? players[selectedPlayer] : {}}
      />
    </div>
  )
}

export default App