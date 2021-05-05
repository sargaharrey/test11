import React ,{ useState,useEffect } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import {NavLink} from 'react-router-dom'
import './sidebar.css'
import './responsive.css'
import Navbar from 'react-bootstrap/Navbar'
import Collapse from 'react-bootstrap/collapse'
import {FaBars,FaHome,FaAngleUp,FaAngleDown,FaEnvelope,FaList,FaCommentDots,FaCalendar} from 'react-icons/fa'

function Sidebar(props) { 
    const [open, setOpen] = useState(false);
    const [active,setactive] =useState(true);
 
    const drop = () =>{
  if(open === true){
    document.querySelector('.togg').classList.add('active')
        }
    else{
        document.querySelector('.togg').classList.remove('active')
    }
    }
    const closeToggle = () =>{
        
        document.querySelector('.toggler').addEventListener('click',()=>{
            if(active === true ){
                
            document.querySelector('.navbar').classList.remove('tog')
            props.myref2.current.classList.remove('active') 
           
            }
             else{
              setactive(false)
              document.querySelector('.navbar').classList.add('tog')
              
            props.myref2.current.classList.add('active') 
     
    }
        })

    }
   
    
    useEffect(() => {
       drop()
       closeToggle() 
       
    });

   
    return (
        <>
     
           <Navbar ref={props.myref}>
               <div className="Navbar-Head">
               <LinkContainer to="/">
                   <Navbar.Brand><span>kernel<mark>ui</mark></span></Navbar.Brand>
               </LinkContainer>
               <button className="toggler">
                    <FaBars/>
                </button>
                </div>
                <div className="Sidebar-body">
                <div className="item">
                  <h5>main</h5>
                  <NavLink exact to="/" className="menuitem">
                      <span className="icon"><FaHome/></span>
                      <span className="item-text">Dashboard</span>
                    </NavLink>
                  </div>
                 <div className="item">
                     <h5>web apps</h5>
                     
                      <a onClick={() => setOpen(!open)}
                       aria-controls="example-collapse-text"
                       aria-expanded={open} className="menuitem togg" href>
                           <span className="icon"><FaEnvelope/></span><span className="item-text">email</span><span className="arrow">{open === true?<FaAngleUp/>:<FaAngleDown/>}</span></a>
                       
                       <Collapse in={open} className="submenu">
                           <div id="example-collapse-text">
                            <ul>
                                <li className="active">inbox</li>
                                <li>read</li>
                                <li>compose</li>
                            </ul>
                           </div>
                       </Collapse>
                       
                       <NavLink to="/todo" className="menuitem normal">
                          
                        <span className="icon"><FaList/></span>
                        <span className="item-text">todo</span>
                        
                       </NavLink>
                        <NavLink to="/chat" className="menuitem normal">
                          
                        <span className="icon"><FaCommentDots/></span>
                        <span className="item-text">chat</span>
                        
                       </NavLink>
                        <NavLink to="/calender" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">calender</span>
                        
                       </NavLink>

                 </div>
                  <div className="item">
                      <h5>components</h5>
                        <NavLink to="/uiKits" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">ui kits</span>
                        
                       </NavLink>
                       <NavLink to="/advanced" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">advanced ui</span>
                        
                       </NavLink>                   
                       <NavLink to="/forms" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">forms</span>
                        
                       </NavLink>
                       <NavLink to="/tables" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">tables</span>
                        
                       </NavLink>
                       <NavLink to="/icons" className="menuitem normal">
                          
                        <span className="icon"><FaCalendar/></span>
                        <span className="item-text">icons</span>
                        
                       </NavLink>
                   </div> 
                </div>  
           </Navbar>
     
        </>
    );
    }

export default Sidebar;