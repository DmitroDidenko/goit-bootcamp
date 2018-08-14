export default function changeList(state = '', action) {
    switch (action.type) {
        case 'CHANGE':
            return state = '';
        default:
            return state
    }
}