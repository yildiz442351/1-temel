import {createStore} from "redux"
/* 
! store oluşturma 
*1. redux kütüphanesinden "createStore" methodu import edilir
*2. store içerisinde tutulan veriler kategorize edilir ve reducerlar oluşturulur.
*3. oluşturulan reducer'lar combineRducer methodu ile birleştirilir
*4. store oluşturulan yeni reducer  tanıtılır
*5. oluşturulan store projeyi tanıtılır
*/

import {createStore, combineReducers} from "redux"
import todoReducer from "./reducers/todoReducer"
import { useReducer } from "./reducers/useReducers"

// birden fazla reducer varsa birleştirilir 
const rootReducer = combineReducers ({
    todoReducer,
    useReducer,
 })

 // store'u oluştur ve reducer'ları tanıt
 const store = createStore(rootReducer);

 export default store;