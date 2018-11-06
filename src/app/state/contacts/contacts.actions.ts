import { Contact } from "../../models/contact";
import { Action } from "@ngrx/store";

export enum ContactsActionTypes {
    LOAD_CONTACT_SUCCESS = '[Contact] - Load Contacts Success.'
}

export class LoadContactsSuccessAction implements Action {
    readonly type = ContactsActionTypes.LOAD_CONTACT_SUCCESS;

    constructor(public payload: Contact[]) {}

}

export type ContactsActions = LoadContactsSuccessAction;