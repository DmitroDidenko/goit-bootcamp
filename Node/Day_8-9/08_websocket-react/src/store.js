import {createStore} from 'redux';

const initialState = {
    messages: []
};

const store = createStore((state = initialState, action) => {
    switch (action.type) {
        case "ADD_NEW_MESSAGE": {
            state.messages.push({
                message: action.message,
                sender: action.sender,
                image: action.image
            });
            return Object.assign(state, {
                messages: state.messages
            })
        }
        default: {
            return state;
        }
    }
});

export default store;