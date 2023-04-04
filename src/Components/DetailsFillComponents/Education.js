import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import InputComponent from '../InputComponents/TextField'
import { updateEducation ,addArrayElement,removeArrayElement ,updateErrorMessages} from '../../ReduxManager/dataStoreSlice'
import BottomNavigation from './BottomNavigation'

function Education(props) {
    const educationHeads = useSelector(state => state.dataStore.education)
    const dispatch = useDispatch();
    function AddEducation(){
        dispatch(addArrayElement({
            key:'education',
            element: {
                Type:"",
                University:"",
                Degree:"",
                Start:"",
                End:""
            }
    })  )
    }
    function RemoveEducation(){
        dispatch(removeArrayElement({key:"education" }))
    }

    function yearRange(start, end) {
        var ans = [];
        for (let i = start; i <= end; i++) {
            ans.push(i);
        }
        return ans;
    }
    let year =yearRange(2000,2023)
  return (
    <div className="container p-4 font" style={{textAlign:"left"}}>
        
        <h1>Education details</h1>
        

        {educationHeads.map((heading,index)=>{
            return(
                <div key={index}>
                    <div className='col mt-10'  ><hr/>
                        <label className='col-sm-5' htmlFor="type">Type</label>
                        <div className='col-sm-5'>
                            <select id="type" className="form-control" value={heading.Type}
                                    onChange={(e)=>{
                                        dispatch(updateEducation({
                                            key: 'Type',
                                            value:e.target.value,
                                            index:index,
                                         }))
                                    }}
                            >

                                <option value='Graduation'> Graduation</option>
                                <option value='Post Graduation'> Post Graduation</option>
                            </select>
                        </div>
                    </div>
                    <div className="row row-cols-2">
                        <div className='col mt-4'>
                            <label  className="col-sm-10" htmlFor="University">University
                                <InputComponent   type="text" elementId="University" placeholder='University'value={heading.University}
                                        onChange={(value,error)=>{
                                            dispatch(updateEducation({
                                              key: 'University',
                                              value:value,
                                              index:index,
                                            }))
                                            dispatch(updateErrorMessages({
                                                key:'University',
                                                value:error
                                            }))
                                        }}
                                        validation={{
                                            required:true
                                        }}
                                />
                            </label>
                        </div>
                        <div className='col mt-4'>
                            <label  className="col-sm-10" htmlFor="degree">Degree
                                <InputComponent  type="text" elementId="Degree" placeholder='Degree'value={heading.Degree}
                                        onChange={(value,error)=>{
                                            dispatch(updateEducation({
                                              key: 'Degree',
                                              value:value,
                                              index:index,
                                            }))
                                            dispatch(updateErrorMessages({
                                                key:'Degree',
                                                value:error
                                            }))
                                        }}
                                        validation={{
                                            required:true
                                        }}
                                />
                            </label>
                        </div>
                        <div className='col mt-4 mb-4'>
                            <label htmlFor="Start" className="col-sm-10 col-form-label">Start year</label>
                            <div className="col-sm-10">

                                    <select id="Start" className="form-control" value={heading.Start}
                                            onChange={(e)=>{
                                                dispatch(updateEducation({
                                                    key: 'Start',
                                                    value:e.target.value,
                                                    index:index,
                                                 }))
                                            }}
                                    >
                                        <option>Select year</option>
                                        {
                                        year.map((yr,i)=>{
                                            return(
                                            <option key={i}  value={yr} 
                                            >{yr}
                                            </option>
                                            ) 
                                        })}
                                    </select>
                            </div>
                        </div>
                        <div className='col mt-4 mb-4'>
                            <label htmlFor="end" className="col-sm-10 col-form-label"> End year</label>
                            <div className="col-sm-10">

                                    <select id="end" className="form-control" value={heading.End}
                                            onChange={(e)=>{
                                                dispatch(updateEducation({
                                                    key: 'End',
                                                    value:e.target.value,
                                                    index:index,
                                                 }))
                                            }}
                                    >
                                        <option >Select year</option>
                                        {
                                        year.map((yr,i)=>{
                                            return(
                                            <option key={i} 
                                                value={yr}
                                            >{yr}
                                            </option>
                                            ) 
                                        })}
                                    </select>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className='d-flex'>
                <button 
                    className='btn btn-primary mt-3 me-5 mb-3 ml-1 p-2'
                    onClick={AddEducation}
                >
                    Add new
                </button>
                <button 
                    className='btn btn-primary mt-3 ms-5 mb-3 ml-1 p-2'
                    onClick={RemoveEducation}
                >
                    Remove
                </button>
            </div>
            <BottomNavigation prevPagePath='/detailsfillingpage/workex' nextPagePath='/detailsfillingpage/keyskills' isFormValid={props.isFormValid}/>
    </div>
  )
}

export default Education
