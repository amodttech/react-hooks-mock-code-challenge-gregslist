import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, trashClick}) {

  const listingComponents = listings.map((listing) =>
    <ListingCard
      key={listing.id}
      listing={listing}
      trashClick={trashClick}
    />
  )

  return (
    <main>
      <ul className="cards">
        {listingComponents}
      </ul>
    </main>
  );
}

export default ListingsContainer;
