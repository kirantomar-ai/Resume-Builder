import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {templateImagesPaths} from './Data'
import {Row, Col} from 'antd'
import { useDispatch } from 'react-redux'
import {updateState} from '../ReduxManager/dataStoreSlice'
const shortid= require('shortid')

function Home() {
    const [isMouseOver, setIsMouseOver] = useState('MouseIsNotOver')
    const dispatch = useDispatch();
    
    return (
        <>
        <div>
            <div style= {{paddingLeft:'100px',paddingTop:'50px'}}>
                <h1> Templates </h1>
                
                <h5>Select a Template to get started.</h5>
            </div>
            <div style={{ padding:'50px',display:'flex',color:'#1f4287',}}>
                
            <Row gutter ={[16,16]}>
            {templateImagesPaths.map((data)=>{
                    return(
                        <Col md={{span:6}} key={shortid.generate()}>
                            <div 
                                style= {{padding:'50px', position:'relative'}}
                                onMouseOver= {()=>{
                                    //this function allows us to display 'Use Template'button on the top of the targeted template, when the user hovers over it//
                                    setIsMouseOver(data.name)
                                }}
                                onMouseOut= {()=>{
                                    //this function allows us to hide 'Use Template' button when the user moves out from the particular template//
                                    setIsMouseOver('MouseIsNotOver')
                                }}
                            >
                            <h3>{data.name}</h3>
                            <img src={data.imageSource} height="350" width="300" alt='template'/>
                            {isMouseOver === data.name
                                ?<Link to="/detailsfillingpage/personalinfo">
                                    <button className='btn btn-primary'
                                            style={{position: 'absolute',top:'50%' , right:'30%',}}
                                            onClick= {()=>{
                                                dispatch(updateState({
                                                key: 'selectedTemplate',
                                                value:data.name
                                                }))
                                            }}
                                    >
                                    Use Template
                                    </button>
                                </Link>
                                :null
                            }
                        </div>
                        </Col>
                        
                    )
                })}
            </Row>
                
            </div>
        </div>
        </>
    )
}

export default Home
