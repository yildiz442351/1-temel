import {v4} from "uuid";

const AddForm = () => {
    // dispatch kurulum
    const dispatch = useDispatch();

    // form gönderilince
    const handleSubmit = (e) => {
        e.preventDefault();

        // todo objesi oluştur 
        const newTodo = {
            id: v4(),
            text: e.target[0].value,
            is_done: false,
            created_at: new Date().toLocaleDateString(),
        };
        // oluşturulan todo'yu store'a ekle 
        dispatch({
            type: ActionTypes.ADD_TODO,
            payload: newTodo,
        });
    };

    return (
    <form onSubmit={handleSubmit} className="d-flex gap-1 my-5">
        <input 
        placeholder="örn:typescript projesi yap" 
        className="form-control" 
        type="text" 
        />
        <button className="btn btn-warning">Ekle</button>
    </form>
  );
};

export default AddForm
