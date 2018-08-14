export const add = () => ({type: 'ADD'});
export const minus = () => ({type: 'MINUS'});
export const reset = () => ({type: 'RESET'});
export const incAsync = (number) => dispatch => {
    setTimeout(() => {
        dispatch(add(number));
    }, 2000)
};

// ===================================  варіант звичайеою функцією  =========================================
// export function add() {
//     return{
//         type: 'ADD',
//     }
// }
//
// export function minus() {
//     return{
//         type: 'MINUS',
//     }
// }
//
// export function reset() {
//     return{
//         type: 'RESET',
//     }
// }













