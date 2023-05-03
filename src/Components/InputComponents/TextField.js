import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

// This is a custom 'textfield' input component, that allows the application to provide text input field along with validation check
// It takes general textfield parameters as parameters/props, and along with them it also takes an additional parameter --validation--
// which provides different validation checks.
// Different validation parameters are as follows:
// 1. validation={required:true} ensures that some value must be given for the given field.
// 2. validation={maxLengthRequired:10} ensures that the number of characters in the input does not exceed 10 characters.
// 3. validation={checkType:email} ensures that the input entered in the field matches with email pattern

function TextField(props) {
    const [value, setvalue] = useState(props.value)
    const showErrorMessages = useSelector(state=> state.dataStore.showErrorMessages)
    

    const checkValidation =()=>{
        // this function checks the validation of the input given by the user.
        let errorMessage = "";
        if(props.validation && props.validation.required &&  value===""){
            //this will throw error as 'required' if the user hasn't filled that input but the validation={required:true}.
                errorMessage='*required!'
        }
        
        else if(props.validation && props.validation.maxLengthRequired && value.length>props.validation.maxLengthRequired){
            // this will throw error as 'write upto n characters' when the user exceeds the character limit provided as validation={maxLengthRequired:n}.
                errorMessage='write upto '+props.validation.maxLengthRequired+' characters'
        }

        else if(props.validation &&  props.validation.checkType && props.validation.checkType==='email'){
            //this will throw error as "Invalid Email address!" when the user input doesn't match with the pattern of email, if validation={checkType:email}.
            if(!(/\S+@\S+\.\S+/.test(value))){
                errorMessage="Invalid Email address!"
            }
        }

        return errorMessage
    }

    let errorMessage = checkValidation() // this variable stores the returned value 'i.e errorMessage' by calling the function on each render of the component.
    
    useEffect(() => {
        //this callback function is only called once the page renders.
        if(props.validation && props.validation.required){
            if(value===""){
                props.onChange(value,'*required!')
            }
        }
    }, [])

    useEffect(() => {
    // This is called everytime the input value is changed.
    // Debouncing is implemented here. So that the props.onChange() function is not called 
    // on every character input.

       let timerOutId;
       
       if(value !== props.value && props.onChange){
            timerOutId = setTimeout(()=>{
                if(props.validation){
                    //this props.onChange function sends the 'value' which equals user input alongwith the 'errorMessage' to the parent component where this 'TextField' component is rendered.
                    props.onChange(value, errorMessage)
                }
                else{
                    //if there is no validation attribute passed to this component,as props from the parent then this condition will execute.
                    props.onChange(value, "")
                }
            },500)
       }
        return()=>{
            clearTimeout(timerOutId)
        }
    }, [value])

  return (
    <div className='w-100 h-100 position-relative'>
        {/* here value!=="" ensures that the errorMessages are not shown initially when the page is rendered,
        but shown when the showErrorMessages is set as true and that happens when the 'isFormValid' is false */}
        <div  style={((value!=="" || showErrorMessages === true)  && errorMessage!=="")?{display:'block',position:'absolute', bottom:-20,color:"rgb(247, 89, 89)",}:{display:'none'}}>{errorMessage}</div>
        <input
            className='input-style'
            id={props.elementId}
            type={props.type}
            value={value}
            placeholder={props.placeholder}
            onChange ={(e)=>{
                // this sets the 'value' state equal to the input given by the user.
                setvalue(e.target.value)
            }}
        />
    </div>
  )
}

export default TextField
