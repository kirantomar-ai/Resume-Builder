import React,{useState,useEffect} from 'react'

// This is a custom 'textarea' input component, that allows the application to provide textarea input field ,
//here we have not put any validation checks because in our application we have not provided any validation requirements to textarea input component.

function TextArea(props) {
    const [value, setvalue] = useState(props.value)

    useEffect(() => {
    // This is called everytime the input value is changed.
    // Debouncing is implemented here. So that the props.onChange() function is not called 
    // on every character input.
       let timerOutId;
       
       if(value !== props.value && props.onChange){
            timerOutId = setTimeout(()=>{
            //this props.onChange function sends the 'value' which equals user input to the parent component where this 'TextArea' component is rendered.
            //as there is no validation attribute passed to this component,as props from the parent so it will pass "" in place of errorMessage.
                    props.onChange(value, "")
                
            },500)
       }
        return()=>{
            clearTimeout(timerOutId)
        }
    }, [value])

  return (
    <div className='w-100 h-100 position-relative'>
        <textarea
            className={'input-style'} 
            id={props.elementId}
            rows={props.rows}
            value={value}
           
            onChange ={(e)=>{
                // this sets the 'value' state equal to the input given by the user.
                setvalue(e.target.value)
            }}
            
        ></textarea>
    </div>
  )
}

export default TextArea
