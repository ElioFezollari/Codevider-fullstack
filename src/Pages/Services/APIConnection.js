
const getAll =async (animal) =>{
    const response = await fetch(`http://localhost:3000/${animal}`)
    const animals = await response.json()
    return animals
}
const getOneAnimal = async (id,animal) =>{
    const response = await fetch(`http://localhost:3000/${animal}/${id}`)
    const returnedAnimal = await response.json()
    return returnedAnimal 
}
export {getAll,getOneAnimal}