export default function input(state = '', action) {
    switch (action.type) {
        case 'INPUT':
            return action.data;
        default:
            return state
    }
}