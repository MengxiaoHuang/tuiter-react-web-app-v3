
const profileReducer = (state = false, action) => {  // initialize the reducer's state
    switch (action.type){
        case "open-edit-profile":
            return true;
        case "close-edit-profile":
            return false;
        default:
            return state;
    }
};

export default profileReducer;
