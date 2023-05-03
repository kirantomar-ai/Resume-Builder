import React from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PersonalInfo from './PersonalInfo'
import WorkEx from './WorkEx'
import Education from './Education'
import KeySkills from './KeySkills'
import { updateState } from '../../ReduxManager/dataStoreSlice' 

function DetailsFillingPage() {
  const dispatch = useDispatch()
  //errorMessages variable store all the error messages passed from TextField while checking the validation of details filled by the user//
  const errorMessages = useSelector(state=>state.dataStore.errorMessages)

  let isFormValid = true
  //this 'for loop' checks whether there is any error Message in the errorMessages or not and if it finds any ,it will return the value of 'isFormValid' as 'false' otherwise it will not show any warning message.//
  for(let key in errorMessages){
    if(errorMessages[key] !==""){
      isFormValid=false
      break
    }
  }

  const onSideNavLinkClick=()=>{
    //this function stops the users from navigating to different page by accessing sideNavbar if they hadn't filled the details of existing page correctly//
    //if 'isFormValid' is true i.e when there is no messages in the 'errorMessages' then user can navigate to other page ,otherwise it will show alert and warningMessages on the screen// 
    if(!isFormValid){
        alert('Please fill all the necessary details correctly!') //this alert is shown on the window when the 'isFormValid' is false.
        dispatch(updateState({    //this dispatch functions update the value of 'showErrorMessages' as true, which will be used by 'TextField' component to display warning Message beneath each of the 'TextField' where some kind of validation is required.
          key:'showErrorMessages',
          value:true
        }))
    }
    else if(isFormValid){
      dispatch(updateState({
        key:'showErrorMessages',
        value:false
      }))
    }
}
  
  return (
    <div>
      <div className="container text-center" style={{ maxWidth:"1920px",marginTop:"12px",backgroundColor:"#fafafa",}}>
        <div >
              <div className='row' style={{minHeight:'100vh'}}>

                    <div className=" col-lg-3 col-sm-12 col-12 sidebar"  >
                            <li className="list-item" onClick={onSideNavLinkClick}>
                              {/* condition is applied to the Link when 'isFormValid'=== true, then the link is active and directs the user to the next page otherwise the link is inactive */}
                                <Link to = {isFormValid?"/detailsfillingpage/personalinfo":'#'} className='no-text-decoration'>
                                  Personal Info
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/workex":'#'} className='no-text-decoration' style={{fontSize:'inherit'}}>
                                Work Experience
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/education":'#'} className='no-text-decoration'>
                                  Education
                                </Link>
                            </li>
                            <li className=" list-item" onClick={onSideNavLinkClick}>
                                <Link to = {isFormValid?"/detailsfillingpage/keyskills":'#'} className='no-text-decoration'>
                                  Key Skills
                                </Link>
                            </li>

                    </div>
                
                
                    <div className="content col-lg-9 col-sm-12 col-12" style={{border:"solid grey 2px", boxShadow: "5px 5px 8px 10px #888888"}}>
                      {/* these are the nested routes of detailsfillingpage, which helps in rendering different component- personalInfo, workEx, education & keySkills , inside detailsfillingpage when the user clicks on next button or navigate through links of sideNavbar */}
                          <Routes>
                                    <Route exact path="/personalinfo" 
                                          element={<PersonalInfo isFormValid={isFormValid} />}>
                                    </Route>
                                     <Route exact path="/workex" 
                                          element={<WorkEx isFormValid={isFormValid}/>}>
                                    </Route>
                                    <Route exact path="/education" 
                                          element={<Education isFormValid={isFormValid}/>}>
                                    </Route>
                                    <Route exact path="/keyskills" 
                                          element={<KeySkills isFormValid={isFormValid}/>}>
                                    </Route>
                          </Routes>
                    </div>
              </div>
        </div>
      </div>
    </div>
    
  )
}

export default DetailsFillingPage
