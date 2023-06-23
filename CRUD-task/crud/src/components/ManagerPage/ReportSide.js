import { useSelector } from "react-redux";


function ReportSide() {
    const reportDetails = useSelector(state=>state.reports.reportDetails);
    console.log(reportDetails)
    
    
    return ( 
    <div>{reportDetails != null && 
        <div>
            <h5>Name: {reportDetails.employee}</h5>
            <h6>Address: {reportDetails.address}</h6>
            <br/>
            <hr/>
            
            <p>{reportDetails.report}</p>
        </div>
    }
        </div> 
    );
}

export default ReportSide;