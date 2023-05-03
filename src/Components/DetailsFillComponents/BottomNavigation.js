import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { updateState } from '../../ReduxManager/dataStoreSlice'

function BottomNavigation(props) {
  //this component is displayed under the component(personalInfo,workEx,education &keySkills) of detailsfillingpage as the bottom navBar having 'Next' and 'Previous' buttons//
  const dispatch = useDispatch();
  
  return (
    <div className='mt-2 px-5'>
                            <hr/>
                            <div className="row row-cols-2">
                              <div className="col-sm-9 mt-4 d-flex justify-content-end">
                                <Link to={props.prevPagePath}>
                                  <button  className='btn btn-primary  p-1 px-2'
                                    onClick={()=>{
                                      dispatch(updateState({
                                        key:'errorMessages',
                                        value:{}
                                      }))
                                    }}
                                  >
                                    Previous
                                  </button>
                                </Link>
                              </div>
                              <div className="col-sm-3 mt-4">
                                {/* this link will be active only when the 'props.isFormValid' === true, and will direct the user to the nextPagePath otherwise it will remain inactive and show the alert, */}
                                <Link to={props.isFormValid?props.nextPagePath:'#'}>
                                  <button className='btn btn-primary p-1 px-2'
                                            onClick={()=>{
                                                if(!props.isFormValid){
                                                    alert('Please fill all the necessary details correctly!')
                                                    dispatch(updateState({
                                                      //this dispatch functions update the value of 'showErrorMessages' as true, which will be used by 'TextField' component to display warning Message beneath each of the 'TextField' where some kind of validation is required.
                                                      key:'showErrorMessages',
                                                      value:true
                                                    }))
                                                }
                                                else if(props.isFormValid){
                                                  dispatch(updateState({
                                                    //this dispatch functions update the value of 'showErrorMessages' as false,when there is errorMessages is empty or 'prop.isFormValid'=== true, which will be used by 'TextField' component to hide warning Message beneath each of the 'TextField' where some kind of validation is required.
                                                    key:'showErrorMessages',
                                                    value:false
                                                  }))
                                                }
                                            }}
                                  >
                                    {window.location.pathname === "/detailsfillingpage/keyskills" //this condition changes the name of the 'next' button as 'preview' when the user reaches 'keySkills' page.
                                    ?'Preview'
                                    :'Next'}
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
  )
}

export default BottomNavigation
