const initialState = {films: []}

function addFilm(state = initialState, action) {
    let nextState
    
    switch (action.type) {
        case 'ADD_FILM':
            nextState = {
                ...state,
                films: [...state.films, action.value]
            }
            return nextState || state
        default:
            return state
    }
}

export default addFilm;