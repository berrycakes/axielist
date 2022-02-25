import React from 'react'
import { useGetAxieDetails } from './axieDetailsApi'
import { IoDocumentsOutline, IoOpenOutline } from 'react-icons/io5'

const Axie = ({
  imgSrc,
  axieClass,
  axieId,
  axieLink,
  isAvailable,
  copyLink,
  number,
  requestedBy,
}) => {
  const { data: details, status } = useGetAxieDetails(axieId)

  return (
    <div className={isAvailable ? 'axie availableCard' : 'axie'}>
      <button onClick={copyLink}>
        <IoDocumentsOutline />
      </button>
      <a href={axieLink}>
        <img src={imgSrc} alt="axie" />
      </a>
      <p>{axieClass}</p>
      <p>
        <a href={axieLink}>
          {axieId}
          <IoOpenOutline />
        </a>
      </p>
      <div className="owner">
        {status === 'success' && details.length > 0 ? (
          <a
            href={`https://marketplace.axieinfinity.com/profile/${details[1].replace(
              '0x',
              'ronin:'
            )}/axie/`}
            target="_blank"
            rel="noreferrer"
          >
            {`${details[0]}`}
            <IoOpenOutline />
          </a>
        ) : status === 'loading' ? (
          <p>loading owner</p>
        ) : (
          <p>??</p>
        )}
      </div>
      {isAvailable && !requestedBy ? (
        <p className="available">Available</p>
      ) : isAvailable && requestedBy ? (
        <p className="requested">testing: {requestedBy}</p>
      ) : (
        <p className="unavailable">Not Available</p>
      )}

      <p>#{number}</p>
    </div>
  )
}

export default Axie
