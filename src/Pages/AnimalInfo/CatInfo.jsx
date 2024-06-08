import { useParams } from "react-router-dom";
import { getOneAnimal } from "../Services/APIConnection";
import { useEffect, useState } from "react";
import AnimalHero from "../Components/AnimallnfoComponents/AnimalHero";
const CatInfo = () => {
  const [cat, setCat] = useState();
  const { name } = useParams();
  useEffect(() => {
    getOneAnimal(name, "cats").then((animal) => setCat(animal));
  }, []);
  return (
    cat && (
      <>
        <AnimalHero animal={cat} name={name} />
        <div className="animal-info">
          <p>Name: {cat.breed}</p>
          <p>Origin:{cat.origin}</p>
          <p>Description: {cat.description}</p>
          <p>Size : {cat.size}</p>
          <p>Life span: {cat.averageLifeSpan || "Not metioned"}</p>
          <p>Weight in kg: {cat.weightInKg || "Not metioned"}</p>
          <p>Activity level: {cat.activityLevel || "Not mentioned"}</p>
          <p>Grooming needs: {cat.groomingNeeds || "Not mentioned"}</p>
          <p>
            Socialization needs: {cat.socializationNeeds || "Not mentioned"}
          </p>
          <p>Health Issues: {cat.healthIssues || "Not mentioned"}</p>
          <p>Intelligence: {cat.intelligenceLevel || "Not mentioned"}</p>
          <p>
            Child friendly:{" "}
            {cat.childFriendly !== undefined
              ? cat.childFriendly
                ? "Yes"
                : "No"
              : "Not mentioned"}
          </p>
          <p>History: {cat.history || "Not mentioned"}</p>
        </div>
      </>
    )
  );
};

export default CatInfo;
