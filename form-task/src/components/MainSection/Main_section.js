import SignInButton from "./SignInButton";
import { Container } from "react-bootstrap";
import AddUserSection from "../AddUserForm/AddUserSection";
import './MainSection.css';


function MainSection() {
    return ( 
        <section className='mainSection'>
            <AddUserSection />
            <Container>
                <SignInButton />
            </Container>
        </section>
     );
}

export default MainSection;