import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'

function TextField(props) {
    const [value, setvalue] = useState(props.value)
    const showErrorMessages = useSelector(state=> state.dataStore.showErrorMessages)
    

    const checkValidation =()=>{
        let warningMessage = "";
        if(props.validation && props.validation.required &&  value===""){
                warningMessage='*required!'
        }
        
        else if(props.validation && props.validation.maxLengthRequired && value.length>props.validation.maxLengthRequired){
                warningMessage='write upto '+props.validation.maxLengthRequired+' characters'
        }
        else if(props.validation &&  props.validation.checkType && props.validation.checkType==='numeric'){
            if(isNaN(value)){
                warningMessage="Only numeric values are allowed!"
            }
        }
        else if(props.validation &&  props.validation.checkType && props.validation.checkType==='email'){
            if(!(/\S+@\S+\.\S+/.test(value))){
                warningMessage="Invalid Email address!"
            }
        }
        return warningMessage
    }
    let warningMessage = checkValidation()
    
    useEffect(() => {
        if(props.validation && props.validation.required){
            if(value===''){
                props.onChange(value,'*required!')
            }
        }
    }, [])

    useEffect(() => {
       let timerOutId;
       
       if(value !== props.value && props.onChange){
            timerOutId = setTimeout(()=>{
                if(props.validation){
                    props.onChange(value, warningMessage)
                }
                else{
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
        <div  style={((value!==""||showErrorMessages === true)  && warningMessage!=="")?{display:'block',position:'absolute', bottom:-20,color:"rgb(247, 89, 89)",}:{display:'none'}}>{warningMessage}</div>
        <input
            className='input-style'
            id={props.elementId}
            type={props.type}
            value={value}
            placeholder={props.placeholder}
            onChange ={(e)=>{
                setvalue(e.target.value)
            }}
        />
    </div>
  )
}

export default TextField
