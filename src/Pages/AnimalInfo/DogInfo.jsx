import { useParams } from "react-router-dom";
import { getOneAnimal } from "../Services/APIConnection";
import { useEffect, useState } from "react";
import AnimalHero from "../Components/AnimallnfoComponents/AnimalHero";
const DogInfo = () => {
  const [dog, setDog] = useState();
  const { name } = useParams();
  useEffect(() => {
    getOneAnimal(name, "dogs").then((animal) => setDog(animal));
  }, []);
  return (
    dog && (
      <>
        <AnimalHero animal={dog} name={name} />
        <div className="animal-info">
          <p>Name: {dog.breed}</p>
          <p>Origin:{dog.origin}</p>
          <p>Description: {dog.description}</p>
          <p>Size: {dog.size}</p>
          <p>Temperament: {dog.temperament}</p>
          <p>Life span: {dog.averageLifeSpan || "Not metioned"}</p>
          <p>Weight in kg: {dog.weightInKg || "Not metioned"}</p>
          <p>Activity level: {dog.activityLevel || "Not mentioned"}</p>
          <p>Grooming needs: {dog.groomingNeeds || "Not mentioned"}</p>
          <p>
            Socialization Needs: {dog.socializationNeeds || "Not mentioned"}
          </p>
          <p>Health Issues: {dog.healthIssues || "Not mentioned"}</p>
          <p>Intelligence: {dog.intelligenceLevel || "Not mentioned"}</p>
          <p>
            Child friendly:{" "}
            {dog.childFriendly !== undefined
              ? dog.childFriendly
                ? "Yes"
                : "No"
              : "Not mentioned"}
          </p>
          <p>History: {dog.history || "Not mentioned"}</p>
          <p>Prey Drive: {dog.preyDrive || "Not mentioned"}</p>
          <p>Trainability: {dog.trainability || "Not mentioned"}</p>
        </div>
      </>
    )
  );
};

export default DogInfo;
