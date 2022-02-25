import './App.css'
import Axie from './Axie'
import { useState } from 'react'
import { useGetAxieList } from './axieListApi'

function App() {
  const [selectedValue, setSelectedValue] = useState('')
  const { data: axielist, status } = useGetAxieList()

  return (
    <div className="App">
      <header>
        <nav>login</nav>
      </header>
      <h1>ChopSchool Infinity Axie Directory</h1>
      <div className="filter">
        <select
          className="select"
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="">Filter By Class</option>
          <option value="Plant">Plant</option>
          <option value="Aqua">Aqua</option>
          <option value="Beast">Beast</option>
          <option value="Reptile">Reptile</option>
          <option value="Bug">Bug</option>
          <option value="Bird">Bird</option>
          <option value="Dusk">Dusk</option>
        </select>
      </div>

      {status === 'loading' ? <p>loading</p> : null}
      {status === 'error' ? <p>error</p> : null}
      {axielist && axielist.length > 0 ? (
        <div className="listContainer">
          {selectedValue === ''
            ? axielist.map((axie, index) => {
                return (
                  <Axie
                    imgSrc={axie.image}
                    axieClass={axie.class}
                    axieId={axie.id}
                    // axieOwner={getAxieOwner(axie.owner)}
                    copyLink={() => {
                      navigator.clipboard.writeText(
                        `https://marketplace.axieinfinity.com/axie/${axie.id}/`
                      )
                    }}
                    axieLink={`https://marketplace.axieinfinity.com/axie/${axie.id}/`}
                    // axieLinkOwner={`https://marketplace.axieinfinity.com/profile/${axie.owner}/axie/`}
                    key={index}
                    number={index}
                    isAvailable={axie.isAvailable === '' ? true : false}
                    requestedBy={
                      axie.requestedBy === '' ? false : axie.requestedBy
                    }
                  />
                )
              })
            : axielist
                .filter((axie) => axie.class === selectedValue)
                .map((axie, index) => {
                  return (
                    <Axie
                      imgSrc={axie.image}
                      axieClass={axie.class}
                      axieId={axie.id}
                      copyLink={() => {
                        navigator.clipboard.writeText(
                          `https://marketplace.axieinfinity.com/axie/${axie.id}/`
                        )
                      }}
                      axieLink={`https://marketplace.axieinfinity.com/axie/${axie.id}/`}
                      key={index}
                      isAvailable={axie.isAvailable === '' ? true : false}
                    />
                  )
                })}
        </div>
      ) : null}
    </div>
  )
}

export default App
