import { useState } from "react";
import { editAnimal } from "../../Services/APIConnection";
import DogAdminForm from "./AdminForm/DogAdminForm";
import CatAdminForm from "./AdminForm/CatAdminForm";
import BirdAdminForm from "./AdminForm/BirdAdminForm";

const AdminForm = ({ id,setIsEditing,setMessage,setError,selectedAnimal }) => {
  const size = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
  const levels = ["Low", "Average", "High"];
  const temperament = [
    "Friendly",
    "Energetic",
    "Playful",
    "Protective",
    "Obedient",
    "Independent",
    "Affectionate",
    "Stubborn",
  ];
  if(selectedAnimal === 'Dogs'){
    return <DogAdminForm id={id} setIsEditing={setIsEditing} setMessage={setMessage} setError={setError} size={size} temperament={temperament} levels={levels}/>
  }
  else if (selectedAnimal ==="Cats"){
    return <CatAdminForm id={id} setIsEditing={setIsEditing} setMessage={setMessage} setError={setError} size={size}  levels={levels}/>
  }
  else{
    return <BirdAdminForm id={id} setIsEditing={setIsEditing} setMessage={setMessage} setError={setError} temperament={temperament}  />
  }
};
export default AdminForm;
