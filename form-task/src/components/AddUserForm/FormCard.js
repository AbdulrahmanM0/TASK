import FormComponent from "./Form";
import SubmitAlert from './SubmitAlert';

function FormCard() {
    return ( 
        <div className="formContainer">
            <SubmitAlert />
            <FormComponent />
        </div>
     );
}

export default FormCard;