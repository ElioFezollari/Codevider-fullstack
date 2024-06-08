import { useEffect, useState } from "react";
import { getAll } from "../../Services/APIConnection";
import AnimalCard from "./AnimalCard";
import AnimalPopUp from '../AnimalComponents/AnimalPopUp'
import AnimalSearchForm from "./AnimalSearchForm";

const AnimalGallery = ({ animal, pictures }) => {
  const [animals, setAnimals] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState("");
  const [filteredSelect, setFilteredSelect] = useState();
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  // Fetch data from the api using the APIConnection get all method
  useEffect(() => {
    getAll(animal).then((animal) => setAnimals(animal));
  }, []);
  // Using the filteredSelect and filter method to make it so  animals shown match the states set by the user 
  let filteredAnimals = animals.filter(
    (animal) =>
      animal.name.toLowerCase().includes(filteredSearch.toLowerCase()) &&
      (!filteredSelect ||
        (animal.origin &&
          animal.origin.toLowerCase() === filteredSelect.toLowerCase()) ||
        (animal.place_of_found &&
          animal.place_of_found.toLowerCase() === filteredSelect.toLowerCase()))
  );

  // Methods to trigger and close the pop up menu
  const cardClicked =(animal) =>{
    setSelectedAnimal(animal)
  }
  const popUpClosed = () =>{
    setSelectedAnimal(null);
  }

  
  return (
    <div className="animal-gallery">
      <AnimalSearchForm setFilteredSearch={setFilteredSearch} filteredSearch={filteredSearch} setFilteredSelect={setFilteredSelect} animal={animal} animals={animals}/>
      <div className="animal-card-wrapper">
        <AnimalCard
          cardClicked={cardClicked}
          filteredAnimals={filteredAnimals}
          animal={animal}
          pictures={pictures}
        />
      </div>
    {selectedAnimal &&(
        <AnimalPopUp animal={selectedAnimal} closePopUp={popUpClosed} pictures={pictures}/>
      )}
      
    </div>
  );
};

export default AnimalGallery;
