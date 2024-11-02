import { useState, useEffect } from 'react'

import Places from './Places.jsx'

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]) // @

  // @
  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => {
        return response.json()
      })
      .then((resData) => {
        setAvailablePlaces(resData.places)
      })
  }, [])

  // @ DON'T -> inf loop
  // fetch('http://localhost:3000/places')
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((resData) => {
  //     setAvailablePlaces(resData.places)
  //   })

  // @ check the Places -> image url -> we can see that image is stored from backend
  return (
    <Places
      title='Available Places'
      places={availablePlaces}
      fallbackText='No places available.'
      onSelectPlace={onSelectPlace}
    />
  )
}
