export const initialState = {
    user: null,
    playlists: [],
    spotify: null,
    playing: false,
    item: null,
    discover_weekly: null,
    top_artists: null,
    // REMOVE token value after finished developing...
    token:null,
}

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        case "SET_TOP_ARTISTS":
            return {
                ...state,
                top_artists: action.top_artists,
            };
          
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
          
        case "SET_SPOTIFY":
            return {
                ...state,
                spotify: action.spotify,
            };
          
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
          
        default:
            return state;
    }
}

export default reducer;