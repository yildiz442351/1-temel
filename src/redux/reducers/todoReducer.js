import todoRducer from "reducers"
/* 
! reducer 
* store'un nasıl değişeceğine karar verir.
* reducer normal bir fonksiyondur
* ve iki parametre alır
* > state: store'da tutulan verilerin son durumu,
* > action: verilerin nasıl değişeceğini belirten obje.

? önemli: reducer fonksiyonunda return edilen veri store'un son hali olur

*/

// state da tutacağımız verilen ilk değeri 
const initalState = {
    todos: [], 
    category: [],
};

const todoRducer = (state = initalState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const tempTodos = state.todos.concat(action.payload);

            return { ...state, todos: tempTodos };

            case "REMOVE_TODO":
                // payload ile id si gelen todoyu diziden çıkarma
                const filtred = state.todos.filter(
                    (todo) => todo.id !== action.payload
                );
                // store'daki verilerin yeni değerini belirleme
                return {...state, todos: filtred };
         case "UPDATE_TODO"
         // todos dizisindeki eski eleman yerine action'un payload'ı 
         // ile gelen elemanı yer değiştir
         const newTodos = state.todos.map((i) =>
         i.id === action.payload.id ? action.payload : i
         );

         return { ...state, todos: newTodos };
            // 1) splice yöntemi 
            // a) state'daki todolarrın kopyasını oluşturun
            const copyTodos = {...state.todos: newTodos};

            // b) güncellenicek elemanın dizide sırasını bul
            const index = copyTodos.findIndex(
                (todo) => todo.id === action.payload.id
            );
            
            // c) splice ile diziyi güncelle
            copyTodos.splice(index, 1, action.payload);

            return { ...state, todos: copyTodos }

        // eğerki gelen aksiyon yukarıdakilerden hiçbiri değilse state'i değiştirme
        default:
            return state;
    }
};

//reducer'ı store'a tanıtmak için export et
export default todoReducer;