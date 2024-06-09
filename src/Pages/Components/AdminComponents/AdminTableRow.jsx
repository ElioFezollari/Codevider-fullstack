import { useState } from "react";
import AdminForm from "./AdminForm";

const AdminTableRow = ({ animal,setMessage,setError,selectedAnimal }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <tr>
        <td>{animal.breed || animal.species}</td>
        <td>{animal.origin || animal.family}</td>
        <td>
          <button onClick={()=>setIsEditing(!isEditing)}>{isEditing ? 'Cancel' : 'Edit'}</button> <button>Delete</button>{" "}
        </td>
      </tr>
      {isEditing && (
        <tr>
          <td colSpan="3">
            <div>
                <AdminForm id={animal.id} selectedAnimal={selectedAnimal} setIsEditing={setIsEditing} setMessage={setMessage} setError={setError}/>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default AdminTableRow;
