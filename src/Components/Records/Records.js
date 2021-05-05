import React,{useEffect,useRef} from 'react';
import './records.css';
import {HiTrendingUp} from 'react-icons/hi'
import {BsCheckCircle} from 'react-icons/bs'
import {AiFillPieChart} from 'react-icons/ai'
import {AiOutlineExclamationCircle,AiFillEye} from 'react-icons/ai'
import {FaFileDownload,FaEllipsisV,FaEye,FaEdit,FaRegTrashAlt,FaPrint,FaDownload,FaArrowUp,FaArrowDown,FaArrowRight} from 'react-icons/fa'
import {BiChevronDown,BiChevronLeft,BiChevronUp,BiChevronRight} from 'react-icons/bi'
import {IoIosSend} from 'react-icons/io';
import {FiSend} from 'react-icons/fi';
import {useTable,useSortBy,usePagination,useGlobalFilter} from 'react-table'
import dataitems from './records.json'
import Dropdown from 'react-bootstrap/Dropdown'


function Records(props) {
   
   const icons =['<BsCheckCircle/>','<AiFillPieChart/>','<AiOutlineExclamationCircle/>','<IoIosSend/>','<FaFileDownload/>']
     
   const style = [{color:'#28c76f',bg:'#28c76f20'},{color:'#ff9f43',bg:'#ff9f4320'},{color:'#ea5455',bg:'#ea545520'}]
     const resultsRef = React.createRef();
     const statusRef = React.createRef();

    const columns = React.useMemo(
   ()=>[
       {
           id:1,
       Header:() => <span>#</span>,
       
        accessor: 'rank',
       
    },
      {  id:2,
          Header:()=> (<span><HiTrendingUp/></span>),
        accessor: 'status',
        Cell: (value)=>{
          switch(value.value){
              case icons[0]:
                  return <span className="Sicon icon-1"><BsCheckCircle/></span>;
            case icons[1]:
                return  <span className="Sicon icon-2"><AiFillPieChart/></span>;
                case icons[2]:
                return   <span className="Sicon icon-3"><AiOutlineExclamationCircle/></span>;
                case icons[3]:
             return   <span className="Sicon icon-4"><IoIosSend/></span>;
                default:
                return <span className="Sicon icon-5"><FaFileDownload/></span>     
          }

        },
        
    },
      
         {    id:3,
              Header: 'client',
             
        accessor: 'client',
        Cell: row =>{

        return ( <div className="client">
            {row.value.img.startsWith('./') === true ?<img src={row.value.img} alt="client"/>:<span className="avater" style={{color : style[Math.floor(Math.random() * style.length)].color,backgroundColor:style[Math.floor(Math.random() * style.length)].bg}}>{row.value.img}</span>}
            <div className="text">
               <span className="name" > {row.value.name}</span>
               <span className="mail">gjordan@fernandez-coleman.com</span>

            </div>
            </div>
        )
       },
       
     
    },
      {    id:4,
           Header: 'total',
      
        accessor: 'total'
       
    },
     {  id:5,
         Header: 'issue date',
        accessor: 'date'
       
    },
     {   id:6,
         Header: 'balance',
      
        accessor: 'balance',
        Cell:(v)=>{
         return ( v.value.startsWith('p')  === true? <span className="active">{v.value}</span> :<span>{v.value}</span> )
        }
      
    },
    {  id:7,
        Header: 'action',
        accessor: 'action',
        Cell:()=>{
            return<div className="action">
                <span className="Aicon"><FiSend/></span>
                <span className="Aicon"><AiFillEye/></span>
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
        }
    },

    ]  ,[]
  
 )
 const data = React.useMemo(
     ()=> dataitems.data
 ,[])

const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    setGlobalFilter,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize,globalFilter },
  } = useTable({
    columns,
    data,
    initialState: { pageIndex: 0 },
  },useGlobalFilter,useSortBy,usePagination)

const CustomToggle = React.forwardRef(({onClick},ref)=>(
 <a href  ref={ref}  onClick={e=> {
     e.preventDefault();
      onClick(e);
   }}>
   {<span className="dropicon"><FaEllipsisV/></span>}
 </a>
))

   useEffect(() => {
       
       if(pageIndex === 0){
          
           document.querySelector('.pagination').childNodes.forEach(i => {
               i.classList.remove('active')
              i.classList.remove('disabled')
           })  
           document.querySelector('.pagination').childNodes[1].classList.add('active')
             document.querySelector('.pagination').childNodes[0].classList.add('disabled')
           

      }
      else if(pageIndex === 1){
           document.querySelector('.pagination').childNodes.forEach(i => {
               i.classList.remove('active')
               i.classList.remove('disabled')
           }) 
          document.querySelector('.pagination').childNodes[2].classList.add('active')
        
      }
      else{
           document.querySelector('.pagination').childNodes.forEach(i => {
              
            i.classList.remove('active')
               i.classList.remove('disabled')
              console.log('tre')
           }) 
            document.querySelector('.pagination').childNodes[3].classList.add('active')
             document.querySelector('.pagination').childNodes[4].classList.add('disabled')
     
      }
  
  
      
   },[pageIndex]);
 
   useEffect(() => {
     
     if(resultsRef.current.value=== '30'){
       document.querySelector('.pagination').childNodes[2].classList.add('none')
       document.querySelector('.pagination').childNodes[3].classList.add('none')
     }
     else if(resultsRef.current.value=== '20'){
       document.querySelector('.pagination').childNodes[2].classList.remove('none')
       document.querySelector('.pagination').childNodes[3].classList.add('none')
     }
    else if(resultsRef.current.value=== '10'){
      document.querySelector('.pagination').childNodes[2].classList.remove('none')
       document.querySelector('.pagination').childNodes[3].classList.remove('none')
    }
    else{
     return ''
    }
     
   },[resultsRef]);
//  useEffect(() => {
//    if(statusRef.current.value === 'downloaded'){
//      data.filter( i=> {
//       return i.status.startsWith('<A')
//      })
//    }
   
//  }, [statusRef]);
    return (
        <>
        <div className="records">
            <div className='head'>
                <div className="left">
                <form>
                <label for="results">show</label>
               
                <select name="results" id="results" ref={(r)=>{resultsRef.current = r}} value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}>
               {[10, 20, 30, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                    {pageSize}
                     </option>
               ))}
                </select>
                </form>
                <a className="butn" href>add record</a>
                </div>
                <div className="right">
                    <form>
                        <label for="search">search</label>
                        <input type="text" placeholder="Search Invoice" className='search'  value={globalFilter || ""} onChange={e => setGlobalFilter(e.target.value)}/>
                        <select ref={(r)=>{statusRef.current = r}}>
                            <option value>select status</option>
                            <option value='downloaded'>downloaded</option>
                            <option value='draft'>draft</option>
                            <option value='partial payment'>partial payment</option>
                            <option value='past duo'>past duo</option>
                        </select>
                    </form>
                </div>
                </div>
                <div className="body">
                    <table {...getTableProps()}>
                        <thead>
                             {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                 {headerGroup.headers.map(column => (
                                
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                                <span>
                    {column.isSorted
                      ?  <BiChevronDown className="sorticon"/>
                        :<BiChevronUp className="sorticon"/>
                     }
                  </span></th>
                                ))}
                            </tr>
                            ))}
                        </thead>
                        <tbody {...getTableBodyProps()}>
                            
                            { page.map((row, i) => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                                </tr>
                            )
                            })}
                        </tbody>
                        
                    </table>
                </div>
                <div className="foot">

                       <span className="size">
                          <strong>
                            Showing 1 to {pageSize} of {pageOptions.length}
                          </strong>
                        </span>
                         <ul className="pagination">
                      
                      <li onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {<BiChevronLeft/>}
                    </li>
                    
                    {
                        
                    [0,1,2].map( i=>
                    (
                     
                      <li key={i} onClick={()=> gotoPage(i)}>{i+1}</li>
                      
                    
                  
                    ))
                    
                   }
                     <li onClick={() => nextPage()} disabled={!canNextPage}>
                    {<BiChevronRight/>}
                    
                    </li>
                    </ul>
                </div>
            
        </div>
        </>
    );
}

export default Records;