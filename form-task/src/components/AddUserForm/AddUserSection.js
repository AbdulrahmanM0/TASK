import './AddUserForm.css'; //style
import FormCard from './FormCard';

function AddUserSection() {
    return ( 
        <div id='addUserBanar' className="addUserBanar_unactive">
            <FormCard banar={'addUserBanar'} />
        </div>
     );
}

export default AddUserSection;