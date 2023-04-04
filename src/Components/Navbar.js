import React from 'react'
import {FileEarmarkTextFill} from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
import {Row, Col} from 'antd'

function NavBar(){
    return(
      <Row gutter ={[16,16]}>
        <Col sm={{span:24}}>
            <nav className="navbar navbar-expand-lg navbar-light p-0 m-0 ps-5 " style={{backgroundColor:'#bfe9db',color:'#07588a',zIndex:10}}>
              <div className="container-fluid  ">
                <div className="navbar-brand d-flex align-items-center " style={{color:'#07588a',fontSize:"30px", fontWeight:"600"}}>
                  <div className='me-3 mb-2'><FileEarmarkTextFill/></div>
                  <div>Resume Builder</div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                  <div className='flex-grow-1'></div>
                  <div className="navbar-nav mb-2 ms-5 ">
                    <li className="nav-item">
                      <Link to='/' className="nav-link active me-4" style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}}>Resume Templates</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/myresumes' className="nav-link active me-4" style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}} >My Resume</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/about' className="nav-link active " style={{textDecoration:'none',color:'#07588a',fontSize:"20px"}}>About Us</Link>
                    </li>
                  </div>
                </div>
              </div>
            </nav>  
        </Col>
      </Row>
            
    )
}



export default NavBar
