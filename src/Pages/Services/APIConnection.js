
const getAll =async (animal) =>{
    const response = await fetch(`http://localhost:3000/${animal}`)
    const animals = await response.json()

    return animals
}
export {getAll}