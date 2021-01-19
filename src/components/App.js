import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const url = `http://localhost:6001`

  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch(`${url}/listings`)
    .then((r) => r.json())
    .then(listingsData => {
      setListings(listingsData)
    })
  }, [])

  function handleDelete(listing){
    console.log("expected to delete", listing)
    fetch(`${url}/listings/${listing.id}`, {
      method: "DELETE"
    })
    onRemoval(listing.id)
  }

  function onRemoval(id){
    setListings(listings.filter((listing) => listing.id !== id))
  }

  function searchSubmit(query){
    const filteredListings = listings.filter((listing) => 
    listing.description.includes(query))
    setListings(filteredListings)
  }

  return (
    
    <div className="app">
      <Header searchSubmit={searchSubmit}/>
      <ListingsContainer 
        listings={listings}
        trashClick={handleDelete}
      />
    </div>
  );
}

export default App;
