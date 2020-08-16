import React, { useState } from "react";

const SearchParams = () => {
  //initial state, state management
  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("Dog")

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(event) => setLocation(event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
