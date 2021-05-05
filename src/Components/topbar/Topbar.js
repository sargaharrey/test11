import React,{useState,useEffect,useRef} from 'react';
import './topbar.css';
import './responsive.css'
import {FaChevronRight,FaBars,FaSearch,FaRegBell,FaUserCheck,FaExclamation,FaDiceD20,FaDownload,FaLayerGroup} from 'react-icons/fa'
import Dropdown from 'react-bootstrap/Dropdown';
import img from  './../../imgs/admin.jpg'
function Topbar(props) {
    const [active,setactive] = useState(true)
    const ref = useRef(null)

    const toggle = () => {
        if(active === true){
             
             
              props.myref.current.classList.add('tog')
            //   props.myref.current.classList.add('toggled')

             props.myref2.current.classList.add('active')
             
           }
           else{
               
              props.myref.current.classList.remove('tog')
            //    props.myref.current.classList.remove('toggled')
             props.myref2.current.classList.remove('active')
            setactive(true)
           }
    }
    useEffect(() => {
       ref.current.addEventListener('click',toggle)
       
         return () => {
             ref.current.removeEventListener('click',toggle)
         }
           
       })
    
    return (
        <>
           <div className="topbar">
            <div className="left">
                <span className="toggle" ref={ref} ><FaBars/></span>
               <p>application <span className="icon"><FaChevronRight/></span> <span>{props.title}</span></p>
            </div>
            <div className="right">
              <form>
                  <input type="search" placeholder="Search..."/>
                 <span className="icon"> <FaSearch/></span>    
              </form>
              <div className="notify">
                  <Dropdown>
                      <Dropdown.Toggle as='a'>
                    <span className="icon"><FaRegBell/></span>
                    <span className="circle"></span>
                    </Dropdown.Toggle>
                    <div className="dropdown-body">
                    <Dropdown.Menu>
                        <Dropdown.Header><p>6 New Notifications</p><span>clear all</span></Dropdown.Header>
                        <Dropdown.Item href="#/action-1">
                            <div className="icon"><FaUserCheck/></div>
                            <div className="item-text">
                                <p>New customer registered</p>
                                <p>2 sec ago</p>
                            </div>  
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                             <div className="icon"><FaDiceD20/></div>
                            <div className="item-text">
                                <p>new order recived</p>
                                <p>30 min ago</p>
                            </div>  
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                             <div className="icon"><FaExclamation/></div>
                            <div className="item-text">
                                <p>server limit reached</p>
                                <p>1 hour ago</p>
                            </div>  
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-4">
                             <div className="icon"><FaLayerGroup/></div>
                            <div className="item-text">
                                <p>apps are ready for update</p>
                                <p>5 hour ago</p>
                            </div>  
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-5">
                             <div className="icon"><FaDownload/></div>
                            <div className="item-text">
                                <p>download completed</p>
                                <p>6 hour ago</p>
                            </div>  
                        </Dropdown.Item>
                    </Dropdown.Menu>
                    </div>
                  </Dropdown>
              </div>
              <div className="admin">
                  <img src={img} alt="admin"/>
              </div>
            </div>   
            </div> 
        </>
    );
}

export default Topbar;