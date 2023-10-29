import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "./rootReducer";

export type RootReducerType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)