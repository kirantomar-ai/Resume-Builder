import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FileUploadComponent from './FileUpload'
import {stateNames} from '../Data'
import InputComponent from '../InputComponents/TextField'
import TextArea from '../InputComponents/TextArea'
import BottomNavigation from './BottomNavigation'
import { updatePersonalInfo, updateErrorMessages } from '../../ReduxManager/dataStoreSlice'


function PersonalInfo(props) {
  const personalHeads= useSelector(state => state.dataStore.personalInfo)
  const dispatch = useDispatch();

  return (
    <div style={{padding:"15px", textAlign:"left",}}>
        <div>
          <div>
            {/* FileUploadComponent is to show the selected profileImage in the resume*/}
            <FileUploadComponent/>
          </div>
          <div className="row pt-3 font" >
              <label htmlFor="firstname" className="col-sm-1 col-form-label ">First Name</label>
              <div className="col-sm-5">
                {/* InputComponent basically serves the purpose of validating the details filled by the user by calling updateErrorMessages function and also updates the value of targeted key by using onChange function */}
                <InputComponent type="text" elementId="firstname"  placeholder="First name" 
                        value={personalHeads.firstName}
                        onChange={(value, error)=>{
                          dispatch(updatePersonalInfo({
                            key: 'firstName',
                            value:value
                         }))
                         dispatch(updateErrorMessages({
                          key:'firstName',
                          value:error
                         }))
                        }}
                        validation={{
                          required:true,
                        }}
                />
                
              </div>
           
              <label htmlFor="lastname" className="col-sm-1 col-form-label">Last Name:</label>
              <div className="col-sm-5"> 
                <InputComponent type="text" elementId="lastname"  placeholder="Last name" 
                      value={personalHeads.lastName} 
                     
                      onChange={(value)=>{
                        dispatch(updatePersonalInfo({
                          key: 'lastName',
                          value:value
                       }))
                      }}
                />
              </div>
          </div>
          <br/><br/>

          <div className="form-group row font">
            <label htmlFor="staticEmail" className="col-sm-1 col-form-label">Email</label>
            <div className="col-sm-5">
              <InputComponent type="text"  elementId="staticEmail" placeholder='users@example.com' 
                    validation={
                      {checkType:'email' , required:true}
                    } 
                    value={personalHeads.Email}
                    onChange={(value,error)=>{
                      dispatch(updatePersonalInfo({
                        key: 'Email',
                        value:value
                     }))
                     dispatch(updateErrorMessages({
                      key:'Email',
                      value:error
                     }))
                    }}
              />
            </div>
          </div>
          <br/><br/>
          <div className="form-group row font">
            <label htmlFor="mobile" className="col-sm-1 col-form-label">Mobile No.</label>
            <div className="col-sm-5">
              <InputComponent type="number" elementId="Mobile" 
                    validation={
                      { 
                        maxLengthRequired:10 ,
                        required:true,
                      }
                    } 
                    value={personalHeads.Mobile}
                    onChange={(value,error)=>{
                      dispatch(updatePersonalInfo({
                        key: 'Mobile',
                        value:value
                     }))
                     dispatch(updateErrorMessages({
                      key:'Mobile',
                      value:error
                     }))
                    }}
                    
              />
            </div>
          </div>
          <br/><br/>

          <div className="row font">
            <label htmlFor="inputAddress1" className="col-sm-1 col-form-label">Address1</label>
            <div className="col-sm-5">
              <InputComponent type="text" elementId="inputAddress1" 
                    value={personalHeads.Address1}
                    onChange={(value)=>{
                      dispatch(updatePersonalInfo({
                        key: 'Address1',
                        value:value
                     }))
                    }}
                    
              />
            </div>
            <label htmlFor="inputAddress2" className="col-sm-1 col-form-label">Address2</label>
            <div className="col-sm-5">
              <InputComponent type="text" elementId="inputAddress2" value={personalHeads.Address2}
                    onChange={(value)=>{
                      dispatch(updatePersonalInfo({
                        key: 'Address2',
                        value:value
                     }))
                    }}
                   
              />
            </div>
          </div>
          <br/><br/>
    
          <div className="row font">
            
              <label htmlFor="inputCity" className="col-sm-1 col-form-label">City</label>
              <div className="col-sm-5">
                <InputComponent type="text"  elementId="inputCity" 
                      validation={
                        { required:true,}
                      } 
                      value={personalHeads.City}
                      onChange={(value,error)=>{
                        dispatch(updatePersonalInfo({
                          key: 'City',
                          value:value
                       }))
                       dispatch(updateErrorMessages({
                        key:'City',
                        value:error
                       }))
                      }}
                     
                      
                />
              </div>

              <label htmlFor="inputState"className="col-sm-1 col-form-label" >State</label>
              <div className="col-sm-5">
                <select id="inputState" className="form-control" value={personalHeads.State}
                        onChange={(e)=>{
                            dispatch(updatePersonalInfo({
                              key: 'State',
                              value:e.target.value
                          }))
                        }}
                >
                    <option>Select State</option>
                    {stateNames.map((state,i)=>{
                      return(
                        <option key={i} value={state}>
                          {state}
                        </option>
                        )
                      })
                    }
                </select>
              </div>

          </div>
          <br/><br/>
          <div className="form-group row font">
            <label htmlFor="pin" className="col-sm-1 col-form-label">Pincode</label>
            <div className="col-sm-5">
              <InputComponent type="number" className="form-control" id="pin" value={personalHeads.Pin}
                    onChange={(value)=>{
                      dispatch(updatePersonalInfo({
                        key: 'Pin',
                        value:value
                     }))
                    }}
                   
              />
            </div>
          </div>
          <br/><br/>
          <div className="form-group row font">
            <label htmlFor="Textarea" className="col-sm-1 col-form-label">Objective</label>
            <div className="col-sm-11">
              <TextArea elementId="Textarea" rows="3" value={personalHeads.Objective}
                      onChange={(value)=>{
                        dispatch(updatePersonalInfo({
                          key: 'Objective',
                          value:value
                       }))
                      }}      
              />
            </div>
          </div>
        </div>
        <BottomNavigation prevPagePath='/' nextPagePath='/detailsfillingpage/workex' isFormValid={props.isFormValid}/>
        
    </div>
  )
}

export default PersonalInfo
