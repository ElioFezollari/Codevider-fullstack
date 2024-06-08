import magnifying from "../../../assets/magnifying.svg";
const AnimalSearchForm = ({setFilteredSearch,filteredSearch,setFilteredSelect,animal,animals,}) =>{
  let uniqueCategories=[]
    // Making sure that each category is only repeated once
    animals.forEach(animal => {
      if (animal.origin && !uniqueCategories.includes(animal.origin)) {
        uniqueCategories.push(animal.origin);
      }
      else if (animal.place_of_found && !uniqueCategories.includes(animal.place_of_found)) {
        uniqueCategories.push(animal.place_of_found);
      }
    });

    return(
        <div className="animal-gallery-wrapper">
        <div className="animal-search-wrapper">
          <input
            value={filteredSearch}
            onChange={(e) => setFilteredSearch(e.target.value)}
            className="animal-search"
            type="text"
            placeholder={` Search for ${animal}...`}
          />
          <img src={magnifying} alt="" />
        </div>
        <div>
          <label htmlFor="select">
        <select className="animal-select"
          name="select"
          onChange={(e) => setFilteredSelect(e.target.value)}
        >
          <option value="">Country of the animal</option>
          {uniqueCategories.map((category, index) => {
            return (
              <option key={index}>
                {category}
              </option>
            );
          })}
        </select>
        </label>
        </div>
      </div>
    )
}
export default AnimalSearchForm