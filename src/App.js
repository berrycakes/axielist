import './App.css'
import Axie from './Axie'
import { axielist } from './axielist'
import { useState } from 'react'

function App() {
  const [selectedValue, setSelectedValue] = useState('')
  return (
    <div className="App">
      <header>ChopSchool Infinity Axies</header>
      <div className="filter">
        <select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">All</option>
          <option value="Plant">Plant</option>
          <option value="Aqua">Aqua</option>
          <option value="Beast">Beast</option>
          <option value="Reptile">Reptile</option>
          <option value="Bug">Bug</option>
          <option value="Bird">Bird</option>
          <option value="Dusk">Dusk</option>
        </select>
      </div>
      <div className="listContainer">
        {selectedValue === ''
          ? axielist.map((axie, index) => {
              return (
                <Axie
                  imgSrc={axie.image}
                  axieClass={axie.class}
                  axieId={axie.id}
                  axieOwner={axie.owner}
                  axieLink={`https://marketplace.axieinfinity.com/axie/${axie.id}/`}
                  axieLinkOwner={`https://marketplace.axieinfinity.com/profile/${axie.owner}/axie/`}
                  key={index}
                />
              )
            })
          : axielist
              .filter((axie) => axie.class == selectedValue)
              .map((axie, index) => {
                return (
                  <Axie
                    imgSrc={axie.image}
                    axieClass={axie.class}
                    axieId={axie.id}
                    axieOwner={axie.owner}
                    axieLink={`https://marketplace.axieinfinity.com/axie/${axie.id}/`}
                    axieLinkOwner={`https://marketplace.axieinfinity.com/profile/${axie.owner}/axie/`}
                    key={index}
                  />
                )
              })}
      </div>
    </div>
  )
}

export default App
