import {useDispatch} from 'react-redux'
import Modal from "modal"
import { ActionTypes } from '../redux/actionTypes';
const Modal = ({todo, close}) => {

    const handleSubmit = () => {
        e.preventDefault();
        
         // inputtaki ismi alma
         const newText = e.target[1].value;

        // eski todo'nun bütün verilerini alıp 
        // inputtan aldığımız veri ile güncelleme
        const updated = {...todo, text: newText};

        // store 'daki todoyu güncelle
        dispatchEvent({
            type: ActionTypes.UPDATE_TODO,
            payload: updated,
        });
    };
     
    // modalu kapat
    close();
};
    return ( 
    <div className="modal d-block text-dark bg-black bg-opacity-50 ">
        <div className="modal-dialog modal-dialog-centered ">
            <form onSubmit={handleSubmit} className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Todoyu Düzenle</h5>
                    <button
                    
                        type="button"
                        className="btn-close" 
                        onClick={close}
                        
                    ></button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                    <label>Yeni Başlık</label>
                    <input defaultValue={todo.text} 
                    className="form-control shadow mt-2" 
                    type="text" />
                </div>
                <div className="modal-footer">
                    <button
                    onClick={close}
                        type="button"
                        className="btn btn-secondary"
                        >
                        Vazgeç
                        </button>
                    <button type="button"
                        className="btn btn-primary">
                            Kaydet</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default Modal;
