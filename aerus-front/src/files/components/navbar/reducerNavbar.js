const defaultState = {
    current: 'home'
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_TAB':
            return {
                ...state,
                current: action.current
            };
            break;
        default:
            return state;
            break;

    }
};