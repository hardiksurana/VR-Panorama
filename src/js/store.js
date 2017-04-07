// TODO: replace usage of states with redux store
export default function reducer(state = [], action) {
    switch(action.type) {
        case "GET_API":
            return JSON.parse(JSON.stringify(action.payload));
        default:
            return state;
    }
}
