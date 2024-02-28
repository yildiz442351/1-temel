import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { useState } from "react";
import { ActionTypes } from "../redux/actionTypes";
const TodoCard = ({ todo }) => {
    const dispatch = useDispatch();
    const [isopen, setIsOpen] = useState(false);
    // store'dan todo'yu kaldır
    const handleDelete = () => { };
    dispatch({
        type: ActionTypes.REMOVE_TODO,
        payload: todo.id,
    });
};

// store'daki todo'nun is_done değerini tersine çevir
const hnadleStatus = () => {
    // todo'nun is_done değerini tersine çevir
    const updated = { ...todo, is_done: !todo.is_done };

    // store'daki todo'yu güncel todo ile değiştir
    dispatch({
        type: ActionTypes.UPDATE_TODO,
        payload: updated,
    })
};

return (
    <div className="border shadow shadow-lg p4 my-5">
        <h5>{todo.text}</h5>

        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

        <p>{todo.created_at}</p>

        <button onClick={() => setIsOpen(true)}
            className="btn btn-primary">Düzenle</button>

        <button onClick={hnadleStatus} className="btn btn-success mx-3">Tamamla
            {todo.is_done ? "Geri Al" : "Tamamla"}
        </button>

        <button onClick={handleDelete} className="btn btn-danger">
            Sil
        </button>
        {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
    </div>
);
};

export default TodoCard;

