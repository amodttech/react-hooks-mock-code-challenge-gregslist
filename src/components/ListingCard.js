import React, {useState} from "react";

function ListingCard({listing, trashClick}) {


  const [favTog, setFavTog] = useState(false)

  function handleFavClick(){
    setFavTog(!favTog)
  }

  function handleTrashClick(){
    trashClick(listing)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {favTog ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={handleTrashClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
