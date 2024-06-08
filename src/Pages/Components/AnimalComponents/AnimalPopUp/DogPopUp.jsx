import { Link } from "react-router-dom";
const DogPopUp = ({animal}) => {
  animal.childFriendly=false
    return (
      <>
      <p>Description: {animal.description}</p>
      <p>Size : {animal.size}</p>
      <p>Temperament: {animal.temperament}</p>
      <p>Life Span: {animal.averageLifeSpan || 'Not metioned'}</p>
      <p>Weight in kg:  {animal.weightInKg || 'Not metioned'}</p>
      <p>Activity level: {animal.activityLevel || 'Not mentioned'}</p>
      <Link to={animal.id}>Learn more about this dog...</Link>

      </>
    );
  };
  export default DogPopUp