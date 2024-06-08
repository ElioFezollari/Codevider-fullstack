import { useParams } from "react-router-dom";
import { getOneAnimal } from "../Services/APIConnection";
import { useEffect, useState } from "react";
import AnimalHero from "../Components/AnimallnfoComponents/AnimalHero";
const BirdInfo = () => {
  const [bird, setBird] = useState();
  const { name } = useParams();
  useEffect(() => {
    getOneAnimal(name, "birds").then((animal) => setBird(animal));
  }, []);
  return (
    bird && (
      <>
        <AnimalHero animal={bird} name={name} />
        <div className="animal-info">
          <p>Species: {bird.species}</p>
          <p>Locations: {bird.locations.map((location) => location + ", ")}</p>
          <p>Description: {bird.description}</p>
          <p>Common name: {bird.commonName}</p>
          <p>Family: {bird.family}</p>
          <p>Order: {bird.order}</p>
          <p>Habitat: {bird.habitat || 'Not mentioned'}</p>
          <p>Wingspan in cm: {bird.wingspanInCm || 'Not mentioned'}</p>
          <p>Habitat: {bird.habitat || 'Not mentioned'}</p>
          <p>Diet: {bird.diet || 'Not mentioned'}</p>
          <p>Temperament: {bird.temperament || 'Not mentioned'}</p>
          <p>Predators: {bird.predators || 'Not mentioned'}</p>
          <p>History: {bird.history || "Not mentioned"}</p>
        </div>
      </>
    )
  );
};

export default BirdInfo;
