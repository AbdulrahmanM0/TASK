import './Manager.css';
import ReportSide from './ReportSide';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from 'react-bootstrap';
import { useEffect, useRef } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { getReports , deleteReport , getdetails } from '../../DataCenter/DataCenter';
import { reportsActions } from '../../DataCenter/DataCenter';
import SendAlert from './SendAlert';



function ManagerPage() {
    const reports = useSelector(state=>state.reports.reports);
    const isLoading = useSelector(state=>state.reports.isLoading);
    const dispatch = useDispatch();
    const searchBar = useRef();
    const sendReport = reportsActions.sendReport;
    const sendAlert = useRef(null)

    const handleDelete = (id) =>{
        dispatch(deleteReport(id));
    }

    useEffect(()=>{
        dispatch(getReports())
    },[dispatch])

    const handleSearch = () => {
        const li = document.querySelectorAll('li');
        for(let i = 0; i < li.length ; i++) {
            if(li[i].firstElementChild.innerText.toUpperCase().indexOf(searchBar.current.value.toUpperCase())){
                li[i].style.display = 'none';
            } else {
                li[i].style.display = 'block';
            }
        }
    }

    const handleDetails = (id) =>{
        dispatch(getdetails(id))
    }

    const handleUpdate = (report) => {
        dispatch(sendReport(report));
        sendAlert.current.style.display = 'block';
        setTimeout(()=>{
            sendAlert.current.style.display = 'none';
        },2000)
    }

    return ( 
        <section>
            <div className='hidden' ref={sendAlert}>
                <SendAlert/>
            </div>
            <Container>
                <div className='managerBoard'>
                    <div className='dataList'>
                        <input type='text' className='searchInput' ref={searchBar} onChange={()=>{handleSearch()}}/>
                        <ul className='reportsList'>
                            {reports == null ?'loading' :[...reports].reverse().map(report=>
                            <li key={report.id}>
                                <p>{report.address}</p>
                                <Stack direction="row" spacing={2}>
                                <Button variant="contained" color="success" onClick={()=>handleDetails(report.id)}>
                                    READE
                                </Button>
                                <Button color="secondary" onClick={()=>{handleUpdate(report)}}>
                                    UPDATE
                                </Button>
                                <Button variant="outlined" color="error" onClick={()=>{handleDelete(report.id)}}>
                                    DELETE
                                </Button>
                                </Stack>
                            </li>)}
                        </ul>
                    </div>
                    <div className='reportSide'>
                        <ReportSide />
                    </div>
                </div>
            </Container>
        </section>
     );
}

export default ManagerPage;