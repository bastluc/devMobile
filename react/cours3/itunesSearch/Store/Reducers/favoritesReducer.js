const initialState = {favorites: []};

function toggleFavorites(state = initialState, action) {
    let nextState;
    
    switch (action.type) {
    case "ADD_FAVORITE":
        nextState = {
            ...state,
            favorites: [...state.favorites, action.value]
        }; 
           
        return nextState || state;

    case "REMOVE_FAVORITE":
        nextState = {
            ...state,
            favorites: state.favorites.filter((u) => u !== action.value)
        };    
        return nextState || state;

    case "RATE_FAVORITE":
        const favoriteIndex = state.favorites.findIndex(item => item.trackId === action.value.track.trackId);

        if (favoriteIndex !== -1) {
            let track = state.favorites[favoriteIndex];
            track.rate = action.value.rate;

            nextState = {
                ...state,
                favorites: [...state.favorites.filter((u) => u !== action.value.track), track]
            };    

            return nextState || state;
        }
        else {
            let track = action.value.track;
            track.rate = action.value.rate;
            nextState = {
                ...state,
                favorites: [...state.favorites, track]
            }; 
        }
        return nextState || state

    default:
        return state;
    }
}

export default toggleFavorites;