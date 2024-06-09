import { useEffect, useState } from "react";
import AnimalSearchForm from "./Components/AnimalComponents/AnimalSearchForm";
import { getAll } from "./Services/APIConnection";
import AdminFilter from "./Components/AdminComponents/AdminFilter";

const Admin = () => {
  const [selectedAnimal, setSelectedAnimal] = useState("dogs");
  const [fetchedAnimal, setFetchedAnimal] = useState();
  const [filteredSearch, setFilteredSearch] = useState("");
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    getAll(selectedAnimal).then((animal) => setFetchedAnimal(animal));
  }, [selectedAnimal]);

  return (
    <div className="admin-wrapper">
      <div className="admin-page">
        <AdminFilter
          filteredSearch={filteredSearch}
          setFilteredSearch={setFilteredSearch}
          selectedAnimal={selectedAnimal}
          setSelectedAnimal={setSelectedAnimal}
          setIsCreating={setIsCreating}
          isCreating={isCreating}
        />

        {fetchedAnimal ? isCreating==false && (
          <table>
            <tbody>
            <tr>
              <th>{selectedAnimal == 'dogs' || selectedAnimal =='cats' ? 'Breed':'Species'}</th>
              <th>{selectedAnimal == 'dogs' || selectedAnimal =='cats' ? 'Origin':'Family'}</th>
              <th>Actions</th>
            </tr>
                {fetchedAnimal.map((animal,index)=>{
                    return(
                        <tr key={index}>
                            <td>{animal.breed || animal.species}</td>
                            <td>{animal.origin || animal.family}</td>
                            <td><button>Edit</button> <button>Delete</button> </td>
                        </tr>
                    )
                })}
                </tbody>
          </table>
        ): <p>Loading...</p>}
      </div>
    </div>
  );
};
export default Admin;
