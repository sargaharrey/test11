import React,{useRef} from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import Topbar from '../../Components/topbar/Topbar';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Dropdown from 'react-bootstrap/Dropdown'
import {FaEllipsisH,FaEye,FaEdit,FaRegTrashAlt,FaPrint,FaDownload,FaArrowUp,FaArrowDown,FaArrowRight} from 'react-icons/fa'
import Charts1 from '../../Components/Charts/Charts1'
import Charts2 from '../../Components/Charts/Charts2'
import Charts3 from '../../Components/Charts/Charts3'
import Charts4 from '../../Components/Charts/Charts4'
import Charts5 from '../../Components/Charts/Charts5'
import Footer from '../../Components/Footer/Footer'
import Records from '../../Components/Records/Records'

import './dashboard.css';
import './responsive.css';

const CustomToggle = React.forwardRef(({onClick},ref)=>(
 <a href  ref={ref}  onClick={e=> {
     e.preventDefault();
      onClick(e);
   }}>
   {<span><FaEllipsisH/></span>}
 </a>
))
function Dashboard(props) {
  const tog = useRef(null)
  const ov = useRef(null)

    return (
        <>
        <div className="wrapper">
            <Sidebar myref={tog} myref2={ov}/>
            <div className="page-wrapper">
              <div className="over" ref={ov}>
                
              </div>
                <Topbar title="Dashboard"  myref2={ov} myref={tog} />
                <div className="page-content">
                <div className="statictics">
                <Row>
                    <Col className="item" xs={12} md={4}>
                      <div className="parent">
                        
                    
                      <div className="head">
                        <h5>new customers</h5>
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span className="icon"><FaEye/></span>
                        <span className="text">view</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <span className="icon"><FaEdit/></span>
                        <span className="text">edit</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <span className="icon"><FaRegTrashAlt/></span>
                        <span className="text">delete</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <span className="icon"><FaPrint/></span>
                        <span className="text">print</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        <span className="icon"><FaDownload/></span>
                        <span className="text">download</span>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                      </div>
                      <div className="body">
                        <Row>
                          <Col xs={12} xl={5} className="left">
                            <h2>3,897</h2>
                            <h5><span>+3.3%</span><span><FaArrowUp/></span></h5>
                          </Col>
                         <Col xs={12} xl={7} className="right">
                            <Charts1/>
                         </Col>
                        </Row>
                      </div>
                      </div>
                    </Col>
                    
                    <Col className="item" xs={12} md={4}>
                      <div className="parent">
                      <div className="head">
                        <h5>new orders</h5>
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span className="icon"><FaEye/></span>
                        <span className="text">view</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <span className="icon"><FaEdit/></span>
                        <span className="text">edit</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <span className="icon"><FaRegTrashAlt/></span>
                        <span className="text">delete</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <span className="icon"><FaPrint/></span>
                        <span className="text">print</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        <span className="icon"><FaDownload/></span>
                        <span className="text">download</span>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                      </div>
                      <div className="body">
                        <Row>
                          <Col xs={12} xl={5} className="left">
                            <h2>35,84</h2>
                            <h5 className="low"><span>-2.8%</span><span><FaArrowDown/></span></h5>
                          </Col>
                         <Col xs={12} xl={7} className="right">
                            <Charts2/>
                         </Col>
                        </Row>
                      </div>
                      </div>
                    </Col>
                    <Col className="item" xs={12} md={4}>
                      <div className="parent">
                      <div className="head">
                        <h5>growth</h5>
                    <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span className="icon"><FaEye/></span>
                        <span className="text">view</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <span className="icon"><FaEdit/></span>
                        <span className="text">edit</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <span className="icon"><FaRegTrashAlt/></span>
                        <span className="text">delete</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <span className="icon"><FaPrint/></span>
                        <span className="text">print</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        <span className="icon"><FaDownload/></span>
                        <span className="text">download</span>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                      </div>
                      <div className="body">
                        <Row>
                          <Col xs={12} xl={5} className="left">
                            <h2>89.7%</h2>
                            <h5><span>+2.8%</span><span><FaArrowUp/></span></h5>
                          </Col>
                         <Col xs={12} xl={7} className="right">
                            <Charts3/>
                         </Col>
                        </Row>
                      </div>
                      </div>
                    </Col>

                </Row>
                </div>
                <div className="main-charts">
                  <Row>
                    <Col xs={12} xl={8} className="item left">
                      <div className="revenue">
                         <div className="head">
                           <h5>Revenue</h5>
                           <Dropdown>
                      <Dropdown.Toggle as={CustomToggle}></Dropdown.Toggle>
                      <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <span className="icon"><FaEye/></span>
                        <span className="text">view</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="2">
                        <span className="icon"><FaEdit/></span>
                        <span className="text">edit</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <span className="icon"><FaRegTrashAlt/></span>
                        <span className="text">delete</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <span className="icon"><FaPrint/></span>
                        <span className="text">print</span>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5">
                        <span className="icon"><FaDownload/></span>
                        <span className="text">download</span>
                      </Dropdown.Item>
                      </Dropdown.Menu>
                   </Dropdown>
                         </div>
                         <div className="body">
                           <h5>Total profit : <span>$30.560</span></h5>
                           <p>
                             <span className="text1">income</span>
                             <span className="text2">expenses</span>
                           </p>
                           <div className='main-chart'>
                             <Charts4/>
                           </div>
                         </div>
                         </div>
                    </Col>
                    <Col xs={12} xl={4} className="item right">
                        <div className="sales">
                          <div className="head">
                            <h5>Sales by category</h5>
                            <div className="next">
                              <span><FaArrowRight/></span>
                            </div>
                          </div>
                          <div className="body">
                            <Charts5/>
                          </div>
                          <div className="foot">
                            <span className="text1">apperal</span>
                            <span className="text2">others</span>
                          </div>
                        </div>
                    </Col>
                  </Row>
                </div>
                 <div className='records'>
                   <Records />
                 </div>
                </div>
                <Footer/>
            </div>
         </div> 
        </>
    );
}

export default Dashboard;