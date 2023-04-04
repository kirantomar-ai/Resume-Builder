import React,{useState,useEffect} from 'react'

function TextArea(props) {
    const [value, setvalue] = useState(props.value)
    const checkValidation =(value)=>{
        let warningMessage = "";
        if(props.validation &&  value.length<props.validation.minLengthRequired){
                warningMessage="This field is required "
        }
        else if(props.validation &&  value.length>props.validation.maxLengthRequired){
                warningMessage='write upto '+props.validation.maxLengthRequired+' characters'
        }
        else if(props.validation.checkType && props.validation.checkType==='numeric'){
            if(isNaN(value)){
                warningMessage="Only numeric values are allowed!"
            }
        }
        else if(props.validation.checkType && props.validation.checkType==='email'){
            if(!(/\S+@\S+\.\S+/.test(value))){
                warningMessage="Invalid Email address!"
            }
        }
        return warningMessage
    }

    useEffect(() => {
        if(props.validation && props.validation.required){
            if(value==''){
                props.onChange(value,'field is required!')
            }
        }
    }, [])

    useEffect(() => {
       let timerOutId;
       
       if(value !== props.value && props.onChange){
            timerOutId = setTimeout(()=>{
                if(props.validation){
                    let errorMessage = checkValidation(value)
                    props.onChange(value, errorMessage)
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
        {/* <div  style={true?{display:'block',position:'absolute', bottom:-20,color:"rgb(247, 89, 89)",}:{display:'none'}}>{warningMessage}</div> */}
        <textarea
            className={true?'input-style':'input-style input-warning'} 
            id={props.elementId}
            rows={props.rows}
            value={value}
           
            onChange ={(e)=>{
                setvalue(e.target.value)
            }}
            
        ></textarea>
    </div>
  )
}

export default TextArea
