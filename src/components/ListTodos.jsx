import { useSelector } from "react-redux";

const ListTodos = () => {
    // useSelector store'daki reducer'lara abone olmayı yani
    // reducer'larda tutulan verilere erişmeye yarar
    // store çok büyük olabileceğinden sadece genelde ihtiyacımız
    // olan reducer'lara abone oluruz
    // bunun için => store.reducerİsmi yazmamız gerekiyor
    const store = useSelector((store) => store.todoReducer);
    
    console.log(abonelik);
  return ( 
  <div>
    {store.todos.map((todo) =>(
        <h2>{todoText}</h2>
        <TodoCard todo ={todo} key={todo.id} />
    ))}
  </div>
};

export default ListTodos;
