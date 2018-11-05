const defaultState = {
    inputValue: '123',
    list: [1, 2]
}

export default (state = defaultState, actions)=>{
    if(actions.type==='change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = actions.value;
        return newState;
    }
    console.log(state, actions);
    return state;
}