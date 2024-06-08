const CatPopUp = ({animal}) => {
    return (
      <>
        <p>
          {animal.name}'s temperament: {animal.temperament}
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
  export default CatPopUp