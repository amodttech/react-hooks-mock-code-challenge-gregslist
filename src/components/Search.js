import React, {useState} from "react";

function Search({searchSubmit}) {

  const [query, setQuery] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    searchSubmit(query)
  }

  function handleChange(e){
    setQuery(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
