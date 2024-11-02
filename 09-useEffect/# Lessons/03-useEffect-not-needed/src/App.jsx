import { useRef, useState, useEffect } from 'react'

import Places from './components/Places.jsx'
import { AVAILABLE_PLACES } from './data.js'
import Modal from './components/Modal.jsx'
import DeleteConfirmation from './components/DeleteConfirmation.jsx'
import logoImg from './assets/logo.png'
import { sortPlacesByDistance } from './loc.js'

// $ does not need to be in useEffect -> can get instantly
// don't need to be placed inside the App(), since we want to run this only once through the whole lifecycle of the app
// const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
// const storedPlaces = storedIds.map((id) =>
//   AVAILABLE_PLACES.find((place) => place.id === id)
// )

function App() {
  const modal = useRef()
  const selectedPlace = useRef()
  const [availablePlaces, setAvailablePlaces] = useState([])
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces) // $

  // ! DON'T NEED TO BE PLACED INSIDE THE useEffect()
  // useEffect(() => {
  //   const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
  //   const storedPlaces = storedIds.map((id) =>
  //     AVAILABLE_PLACES.find((place) => place.id === id)
  //   )
  //   setPickedPlaces(storedPlaces)
  // }, [])

  useEffect(() => {
    // @ async -> data is not instantly available
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      )

      setAvailablePlaces(sortedPlaces)
    })
  }, [])

  function handleStartRemovePlace(id) {
    modal.current.open()
    selectedPlace.current = id
  }

  function handleStopRemovePlace() {
    modal.current.close()
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id)
      return [place, ...prevPickedPlaces]
    })

    // @ this is an example of side effect -> but this does not need to be in useEffect -> sync -> data is instantly available
    // inside a function -> cannot use useEffect() -> violates the rule
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    if (storedIds.indexOf(id) === -1) {
      localStorage.setItem('selectedPlaces', JSON.stringify([id, ...storedIds]))
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    )
    modal.current.close()

    // @ also here
    const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || []
    localStorage.setItem(
      'selectedPlaces',
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current))
    )
  }

  return (
    <>
      <Modal ref={modal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt='Stylized globe' />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title='Available Places'
          places={availablePlaces}
          fallbackText='Sorting places by distance...'
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  )
}

export default App
