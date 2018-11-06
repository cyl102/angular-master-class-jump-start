import { Contact } from "src/app/models/contact";
import { ContactsActions, ContactsActionTypes } from "./contacts.actions";

export interface ContactsState {
    list : Contact[];
}

const INITIAL_STATE: ContactsState = {
    list : []
};

export function contactsReducer(state: ContactsState = INITIAL_STATE, action: ContactsActions) : ContactsState {
    switch(action.type){
        case ContactsActionTypes.LOAD_CONTACT_SUCCESS: {
            return {
                ...state,
                list: action.payload
            }
        }
        default:
            return state;
    }
}

