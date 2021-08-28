
const initialState={
    id: null,
    name: '',
    powerstats: [],
    biography: [],
    appearance: [],
    work: [],
    connections: [],
    image: null
}

const heroReducer=(state=initialState,action)=>{
    const {type,payload}=action
    console.log("inside reducer, payload",payload)
    switch(type){
        case "SET_INITIALS": return{
            ...state,
            id: Number(payload.id),
            name: payload.name,
            powerstats: payload.powerstats,
            biography: payload.biography,
            appearance: payload.appearance,
            work: payload.work,
            connections: payload.connections,
            image: payload.image
        }
        default: return{
            state
        }
    }
}

export default heroReducer;