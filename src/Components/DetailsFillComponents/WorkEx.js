import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import BottomNavigation from './BottomNavigation'
import TextField from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import { updateWorkEx ,addArrayElement,removeArrayElement, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'

// this component renders the work experience page inside the details filling page.
function WorkEx(props) {

    const workHeads = useSelector(state=> state.dataStore.workEx) //this state is used to store workEx object of dataStoreSlice.
    const dispatch = useDispatch();

    const onChangeHandler= (key,value,index,errorMessage=undefined) =>{
        //this function is called each time when the user provides input to the targeted'TextField'
        dispatch(updateWorkEx({
            //this function updates the targeted key of the workEx element of dataStore in dataStoreSlice.js //
            key: key,
            value:value,
            index:index,
       }))
       if(errorMessage!==undefined){
          dispatch(updateErrorMessages({
            // this function is called each time when there is a validatin check applied on the 'TextField' component and it inserts án object {key: errorMessage} into the errorMessages of dataStoreSlice.
            key:key,
            value:errorMessage,
            index:index
          }))
        }
      }

    function AddExperience(){
        //this function is used to push a blank object in the workEx element of dataStoreSlice,
      //when the user clicks on the Add-new button to add more related details//
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
        //this function deletes the latest saved details in the workEx element, when the user clicks on the remove button.
        dispatch(removeArrayElement({key:"workEx" }))
        //after deletion of workEx element , the errors associated with it also removed.
        dispatch(updateErrorMessages({
            key:'title',
            value:"",
            index:workHeads.length-1
          }))

        dispatch(updateErrorMessages({
            key:'orgName',
            value:"",
            index:workHeads.length-1
          }))
    }
    function yearRange(start, end) {
        //this function  is used to create list of years in a range to display list of options in the 'Select' input field of the form.
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
        
        {workHeads.map((workHeading,index)=>{
            return(
                <div key={index}>
                    <div className="container p-2 font" style={{textAlign:"left"}}>
                        <h5>Experience {index+1}</h5>
                        <hr/>
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4">                                
                                    <label className="col-sm-12 col-12" htmlFor="title" >Job Title*
                                        <TextField  
                                            type="text" elementId="title" placeholder='Enter Job Title' 
                                            value={workHeading.title}
                                            onChange={
                                                // this onChange will be called by TextField component as props.onChange when the user gives input to the targeted field and,
                                                //the user given input will be send as value alongwith errorMessage , if there is any .
                                                (value,errorMessage)=>{
                                                    //this function calls back onChangeHandler which will update targeted key of 'WorkEx' and 'errorMessages' in dataStoreSlice as per the value and errorMessage respectively.
                                                    onChangeHandler('title',value,index,errorMessage)
                                                }
                                            }
                                            validation={{
                                                //this attribute is used to check whether there is any validation check on the 'TextField' or not.
                                                required:true
                                            }}
                                        />
                                    </label>
                            </div>
                            <div className="col-lg-6 col-12 pt-5 px-4">  
                                    <label className="col-sm-12 col-12" htmlFor="name" >Organization Name*
                                        <TextField   type="text" elementId="name"  placeholder= 'Enter Organization Name'
                                            value={workHeading.orgName}
                                            onChange={(value,errorMessage)=>{onChangeHandler('orgName',value,index,errorMessage)}}
                                            validation={{
                                                required:true
                                            }}
                                        />
                                    </label>
                            </div>
                        </div>
                        <div className="row font">
                            <div className="col-lg-6 col-12 pt-5 px-4"> 
                                <label htmlFor="start"className="col-sm-12 col-12 col-form-label" >Start year
                                        <select id="start" className="form-control" value={workHeading.startYear}
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
                                </label>
                            </div>
                            <div className="col-lg-6 col-12 pt-5 px-4"> 
                                <label htmlFor="end"className="col-sm-12 col-12  col-form-label" >End year
                                        <select id="end" className="form-control" value={workHeading.endYear}
                                         onChange={(e)=>{
                                            dispatch(updateWorkEx({
                                                key: 'endYear',
                                                value:e.target.value,
                                                index:index,
                                            }))
                                        }}>
                                            <option > Select year</option>
                                            {
                                            year.map((yr,i)=>{
                                               return(
                                                <option  key={i} >{yr}</option>
                                               ) 
                                            })}
                                            
                                        </select>
                                </label>
                            </div>
                        </div>
                        <div className="form-group row font">
                            <div className="col-lg-12 col-12 pt-5 px-4"> 
                                <label htmlFor="Textarea" className="col-sm-12 col-12 col-form-label">Job-description
                                    <TextArea  elementId="Textarea" rows="3" value={workHeading.jobDescription}
                                        onChange={(value)=>{onChangeHandler('jobDescription',value,index)}}
                                    />
                                </label>
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
