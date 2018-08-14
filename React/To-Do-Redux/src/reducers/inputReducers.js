export default function inputList(state = [], action) {
    switch (action.type) {
        case 'DEL':
            return state = [];
        default:
            return state
    }
}
