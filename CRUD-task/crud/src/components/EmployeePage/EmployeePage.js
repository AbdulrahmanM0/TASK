import { Container } from "react-bootstrap";
import './EmployeePage.css';
import ReportsForm from "./ReportsForm";
import Alert from 'react-bootstrap/Alert';
import { useSelector } from "react-redux";

function EmployeePage() {
    const updateReport = useSelector(state=>state.reports.catchReport);

    return ( 
        <section className='employee-section'>
            <Container>
                <div className='content-container'>
                    <Alert variant='light'>
                        <h3>
                            {updateReport == null ? 'Daily Report' : 'YOU MUST UPDATE THE REPORT'}
                        </h3>
                    </Alert>
                    <ReportsForm />
                </div>
            </Container>
        </section>
     );
}

export default EmployeePage;