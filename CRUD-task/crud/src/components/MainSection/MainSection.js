import './MainSection.css';
import JopCard from './MainCards';
import engineerPic from '../../Assets/Images/engineer-svgrepo-com.svg';
import managerPic from '../../Assets/Images/manager-illustration-on-a-background-premium-quality-symbols-line-flat-icon-for-concept-or-graphic-design-vector.jpg';
import accountantPic from '../../Assets/Images/microsoftteams-1200x570.jpg';

function MainSection() {
    return (
         <section className='mainSectio'>
            <JopCard 
            engineerPic={engineerPic}
            managerPic={managerPic}
            accountantPic={accountantPic}
            
            />
        </section>
     );
}

export default MainSection;