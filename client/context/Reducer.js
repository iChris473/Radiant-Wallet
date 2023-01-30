
const AuthReducer = (state, action) => {

    switch (action.type) {

        case 'IMPORT_START':
            return {
                wallet: null,
                error: false
            }


        case 'IMPORT_SUCCESS':
            return {
                wallet: action.payload,
                error: false
            }


        case 'IMPORT_FAILURE':
            return {
                wallet: null,
                error: true
            }

    
        default:
            return state;

    }

}

export default AuthReducer;