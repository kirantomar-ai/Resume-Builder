import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import BottomNavigation from './BottomNavigation'
import InputComponent from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import { updateWorkEx ,addArrayElement,removeArrayElement, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'

function WorkEx(props) {

    const workHeads = useSelector(state=> state.dataStore.workEx)
    const dispatch = useDispatch();

    function AddExperience(){
        dispatch(addArrayElement({
            key: 'workEx',
            element:{
                title:"",
                orgName:"",
                startYear:"",
                endYear:"",
                jobDescription:"",
            },
            
         }))
    }
    function RemoveExperience(){
        dispatch(removeArrayElement({key:"workEx" }))
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
    <div className='p-5' style={{textAlign:"left"}}>
        <h2 >Work Experience</h2>
        
        {workHeads.map((heading,index)=>{
            return(
                <div key={index}>
                    <div className="container p-2 font" style={{textAlign:"left"}}>
                        <h5>Experience {index+1}</h5>
                        <hr/>
                        <div className="row row-cols-2">
                            <div className="col mt-4">
                                <div >
                                    <label className="col-sm-9" htmlFor="title" >Job Title:
                                    </label>
                                    <InputComponent  
                                        type="text" elementId="title" placeholder='Enter Job Title' 
                                        value={heading.title}
                                    
                                        onChange={(value,error)=>{
                                            dispatch(updateWorkEx({
                                              key: 'title',
                                              value:value,
                                              index:index,
                                            }))
                                            dispatch(updateErrorMessages({
                                                key:'title',
                                                value:error
                                            }))
                                        
                                        }}
                                        
                                        validation={{
                                            required:true
                                          }}
                                    />
                                </div>
                            </div>
                            <div className="col mt-4">
                                <div >
                                    <label className="col-sm-9" htmlFor="name" >Organization Name:
                                        <InputComponent   type="text" elementId="name"  placeholder= 'Enter Organization Name'
                                            value={heading.orgName}
                                            
                                            onChange={(value,error)=>{
                                                    dispatch(updateWorkEx({
                                                        key: 'orgName',
                                                        value:value,
                                                        index:index,
                                                    }))
                                                    dispatch(updateErrorMessages({
                                                        key:'orgName',
                                                        value:error
                                                    }))
                                            }}
                                            validation={{
                                                required:true
                                            }}
                                        />
                                    </label>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="start"className="col-sm-9 col-form-label" >Start year</label>
                                <div className="col-sm-9">
                                        <select id="start" className="form-control" value={heading.startYear}
                                         onChange={(e)=>{
                                            dispatch(updateWorkEx({
                                                key: 'startYear',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            <option > Select year</option>
                                            {
                                            year.map((yr,i)=>{
                                               return(
                                                <option key={i} 
                                                        value={yr}>{yr}</option>
                                               ) 
                                            })}
                                        </select>
                                </div>
                            </div>
                            <div className="col mt-3">
                                <label htmlFor="end"className="col-sm-9 col-form-label" >End year</label>
                                <div className="col-sm-9">
                                        <select id="end" className="form-control" value={heading.endYear}
                                         onChange={(e)=>{
                                            dispatch(updateWorkEx({
                                                key: 'endYear',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            
                                            {
                                            year.map((yr,i)=>{
                                               return(
                                                <option  key={i} >{yr}</option>
                                               ) 
                                            })}
                                            
                                        </select>
                                </div>
                            </div>
                            <div className="form-group row font mt-3">
                                <label htmlFor="Textarea" className="col-sm-6 col-form-label">Job-description</label>
                                <div className="col-sm-12">
                                <TextArea  elementId="Textarea" rows="3" value={heading.jobDescription}
                                    onChange={(value)=>{
                                        dispatch(updateWorkEx({
                                            key: 'jobDescription',
                                            value:value,
                                            index:index,
                                        }))
                                    }}
                                />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        <div className='d-flex'>
            <button 
                className='btn btn-primary mt-3 me-5 mb-3 ml-1 p-2'
                onClick={AddExperience}
            >
                Add new
            </button>
            <button 
                className='btn btn-primary mt-3 ms-5 mb-3 ml-1 p-2'
                onClick={RemoveExperience}
            >
                Remove
            </button>
        </div>
        <BottomNavigation prevPagePath='/detailsfillingpage/personalinfo' nextPagePath='/detailsfillingpage/education' isFormValid={props.isFormValid} />
    </div>
  )
}

export default WorkEx
