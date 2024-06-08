const BirdPopUp = ({ animal }) => {
  return (
    <>
      <p>
        {animal.name}'s species: {animal.species}
      </p>
      <p>
        {animal.family}'s family: {animal.family}
      </p>
      <p>
        {animal.habitat}'s habitat: {animal.habitat}
      </p>
      <p>
        {animal.name}'s diet: {animal.diet}
      </p>
      <p>
        {animal.name}'s weight in kg: {animal.weight_kg}
      </p>
      <p>
        {animal.name}'s wingspan in cm: {animal.wingspan_cm}cm
      </p>
      <p>
        {animal.name}'s description: {animal.description}
      </p>
    </>
  );
};
export default BirdPopUp;
