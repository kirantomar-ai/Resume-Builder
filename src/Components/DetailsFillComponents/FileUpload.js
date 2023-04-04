import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { updateState} from '../../ReduxManager/dataStoreSlice'
  
function App() {
    const imageFile= useSelector(state=> state.dataStore.imageFile)
    const dispatch = useDispatch();
    
    function handleChange(e) {
        let temp=URL.createObjectURL(e.target.files[0])
        dispatch(updateState({
            key:'imageFile',
            value:temp,
        }))
    }
    return (
        <div className="container">
    
            <div className="row">
                <img style={{height:'150px', width:'100px', background:'grey',padding:0}} src={imageFile} alt='profile'/>
            </div>
            <div className="row">
                <input type="file" onChange={handleChange} />
            </div>
            
  
        </div>
    );
} 
export default App;