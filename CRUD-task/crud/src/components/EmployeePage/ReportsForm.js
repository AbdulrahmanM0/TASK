import { reportsActions } from "../../DataCenter/DataCenter";
import { useDispatch , useSelector } from "react-redux";
import { useState , useRef , useEffect } from 'react';
import { sendReports } from "../../DataCenter/DataCenter";
import { updateReports } from "../../DataCenter/DataCenter";


function ReportsForm() {
    const dispatch = useDispatch();
    const [employee,setEmployee] = useState('');
    const [address,setAddress] = useState('');
    const [report,setReport] = useState('');
    const nameInput = useRef(null);
    const addressInput = useRef(null);
    const reportInput = useRef(null);
    const toggle = useSelector(state=>state.reports.toggle);
    const updateReport = useSelector(state=>state.reports.catchReport);

    console.log(updateReport);
    useEffect(()=>{
        nameInput.current.focus()
    },[])

    const handleName = (e)=>{
        setEmployee(e.target.value);
    }
    const handleAddress = (e)=>{
        setAddress(e.target.value);
    }
    const handleReport = (e)=>{
        setReport(e.target.value);
    }
    const sendReport = (e) =>{
        e.preventDefault();
        dispatch(sendReports({employee,
        address,
        report
    }))
    nameInput.current.value = '';
    addressInput.current.value = '';
    reportInput.current.value = '';
    }
    const updateTheReport = (id) => {
        dispatch(updateReports(id));
      };
      
    return (
         <div className='form-container' >
            {updateReport !== null &&
            <div className='reportToUpdate'>
                <h4>{updateReport.employee}</h4>
                <h5>{updateReport.address}</h5>
                <hr/>
                <p>{updateReport.report}</p>
            </div>
            }
            <form className='report-form' onSubmit={(e)=>{sendReport(e)}}>
                <input ref={nameInput} type='text' name='Employee name' placeholder='employeeName' onChange={(e)=>{handleName(e)}} required />
                <input ref={addressInput} type='text' name='reportAddress' placeholder="Enter Address" onChange={(e)=>{handleAddress(e)}} required />
                <textarea ref={reportInput} placeholder='Todays report' rows="8" cols="50" onChange={(e)=>{handleReport(e)}} required >
                    
                </textarea>
                {!toggle ? <button type='submit'>SUBMIT</button>
                :
                <button onClick={()=>updateTheReport(updateReport.id)} >UPDATE</button>
                }
            </form>
        </div> );
}

export default ReportsForm;