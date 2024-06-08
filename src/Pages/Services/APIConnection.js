
const getAll =async (animal) =>{
    const response = await fetch(`https://freetestapi.com/api/v1/${animal}`)
    const animals = await response.json()
    return animals
}
export {getAll}