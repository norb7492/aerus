const defaultState = {
    language: 'eng-en'
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language
            }
        break;    
        default:
            return state;
            break;
    }
};