const AdminForm = () => {
  const size = ["Extra Small", "Small", "Medium", "Large", "Extra Large"];
  const difficulty = ["Easy", "Medium", "Hard"];
  const levels = ["Low", "Average", "High"];
  const temperament = ["Friendly","Energetic","Playful","Protective","Obedient","Independent","Affectionate","Stubborn",];
  return (
    <form className="admin-form-cr">
      <label htmlFor="breed">
        Breed: <input type="text" name="breed" placeholder="Enter breed..." />
      </label>
      <label htmlFor="origin">
        Origin:{" "}
        <input type="text" name="origin" placeholder="Enter origin..." />
      </label>
      <label htmlFor="imageUrl">
        Image Url:{" "}
        <input type="url" name="url" placeholder="Enter Image Url..." />
      </label>
      <label htmlFor="temperament">
        Temperament:{" "}
        <select name="temperament">
          {temperament.map((temperament) => {
            return <option value={temperament}>{temperament}</option>;
          })}
        </select>
      </label>
      <label htmlFor="size">
        Size:{" "}
        <select name="size">
          <option value="">-</option>
          {size.map((size, index) => {
            return (
              <option key={index} value={size}>
                {size}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="lifespan">
        Lifespan:{" "}
        <input
          type="number"
          name="breed"
          placeholder="Enter  average lifespan..."
        />
      </label>
      <label htmlFor="averageWeight">
        Weight:{" "}
        <input
          type="averageWeight"
          name="averageWeight"
          placeholder="Average weight in kg..."
        />
      </label>
      <label htmlFor="activity">
        Activity Level:{" "}
        <select name="activity">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="grooming">
        Grooming Needs:{" "}
        <select name="grooming">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="socialize">
        Socializing Needs:{" "}
        <select name="socialize">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="health">
        Health Issues:{" "}
        <select name="health">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="intelligence">
        Intelligence:{" "}
        <select name="socialize">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="childFriendly">
        Child Friendly:{" "}
        <select name="childFriendly">
          <option value="">-</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </label>
      <label htmlFor="preyDrive">
        Prey drive:{" "}
        <select name="preyDrive">
          <option value="">-</option>
          {levels.map((level, index) => {
            return (
              <option key={index} value={level}>
                {level}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="trainability">
        Trainability:{" "}
        <select name="trainability">
          <option value="">-</option>
          {difficulty.map((difficulty, index) => {
            return (
              <option key={index} value={difficulty}>
                {difficulty}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="colors" className="colors-edit">
        Colors (Seperate by commas):{" "}
        <input type="text" name="colors" placeholder="Blue,Red,Green" />
      </label>
      <label htmlFor="colorHex" className="colors-edit">
        Color Hex (Seperate by commas):{" "}
        <input
          type="text"
          name="colorHex"
          placeholder="#0000FF,#FF0000,#00FF00"
        />
      </label>
      <label htmlFor="description" className="text-area-label">
        Description: <textarea name="description"></textarea>
      </label>
      <label htmlFor="history" className="text-area-label">
        History: <textarea name="history"></textarea>
      </label>
    </form>
  );
};
export default AdminForm;
