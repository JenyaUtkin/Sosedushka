import { combineReducers } from 'redux';
import { adReducer } from './adReducer';
import { interestReducer } from './interestReducer';
import { rolesReducer } from './rolesReducer';
import { userReducer } from './userReducer';

import {flatUserReducer} from './flatUserReducer'

import { formReducer } from './formReducer';


export const rootReducer = combineReducers({
    user: userReducer,
    roles: rolesReducer,
    ad: adReducer,
    interest: interestReducer,
    flatUser: flatUserReducer,
    form: formReducer,
    // ws: wsReduse,
});
