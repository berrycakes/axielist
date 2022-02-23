import React from 'react'

const Axie = ({
  imgSrc,
  axieClass,
  axieId,
  axieOwner,
  axieLink,
  axieLinkOwner,
}) => {
  return (
    <div className="axie">
      <img src={imgSrc} />
      <p>{axieClass}</p>
      <p>
        <a href={axieLink}>{axieId}</a>
      </p>
      <p class="owner">
        <a href={axieLinkOwner}>{axieOwner}</a>
      </p>
    </div>
  )
}

export default Axie
