const DogPopUp = ({animal}) => {
    return (
      <>
        <p>
          {animal.name}'s temperament: {animal.temperament}
        </p>
        <p>
          {animal.name}'s breed group: {animal.breed_group}
        </p>
        <p>
          {animal.name}'s size: {animal.size}
        </p>
        <p>
          {animal.name}'s lifespan: {animal.lifespan}
        </p>
        <p>
          {animal.name}'s colours: {animal.colors.map((color) => color + " ")}
        </p>
        <p>
          {animal.name}'s description: {animal.description}
        </p>
      </>
    );
  };
  export default DogPopUp