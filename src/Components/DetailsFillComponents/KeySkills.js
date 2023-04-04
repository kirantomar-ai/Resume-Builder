import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import InputComponent from '../InputComponents/TextField'
import { updateKeySkills ,addArrayElement,removeArrayElement } from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'

function KeySkills(props) {
    const skillHeads = useSelector(state => state.dataStore.skills)
    const dispatch = useDispatch();

    function AddSkill(){
      dispatch(addArrayElement({
        key:'skills',
        element: {skillName:"",}
        })  
      )   
    }
    function RemoveSkill(){
      dispatch(removeArrayElement({key:"skills" }))
    }
    
  return (
    <div className="p-5 font" style={{textAlign:"left"}}>
        <h1>Key Skills</h1>
        <hr/>
    
        {skillHeads.map((item,index)=>{
            return(
                <div key={index}
                     className='col-sm-5 mt-5 mb-5'>
                    <InputComponent  type="text" value={item.skillName}
                      onChange={(value)=>{
                        dispatch(updateKeySkills({
                          key: 'skillName',
                          value:value,
                          index:index,
                      }))
                    }}/>
                </div>
            )
        })}
        <div className='col mt-10'>
            <button className='btn btn-primary me-5'
                    onClick={AddSkill}>
                Add-Skill

            </button>
            <button className='btn btn-primary'
                    onClick={RemoveSkill}>
                Remove

            </button>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/education' nextPagePath='/myresumes' isFormValid={props.isFormValid}/>
      
    </div>
  )
}

export default KeySkills
