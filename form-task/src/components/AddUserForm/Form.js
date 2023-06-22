import { Formik, Field, Form } from 'formik';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { Row, Col } from 'react-bootstrap';
import defaultUserImg from '../Assets/Images/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.webp';
import { useRef , useEffect , useState} from 'react';
import axios from 'axios';

function FormComponent() {
  const [ userData , setUserData ] = useState([]);
  const userPic = useRef(null);
  


  useEffect(()=>{
    const getData = axios.get('http://localhost:3001/users').then(res=>setUserData(res.data));
  },[userData]);

  const handleSubmit = (values) => {
    const check = userData.some((data) => data.email === values.email);
    const warn = document.getElementById('warning');
    const succ = document.getElementById('succeded');
  
    if (!check) {
      axios.post('http://localhost:3001/users', values);
      succ.classList.add('active');
      succ.classList.remove('unactive');
      values.email = '';
      values.password = '';
      values.firstName = '';
      values.lastName = '';
      values.userImg = '';
      warn.classList.remove('active');
      warn.classList.add('unactive');
    } else {
      values.email = '';
      values.password = '';
      warn.classList.add('active');
      warn.classList.remove('unactive');
    }
    console.log(check);
  };
  

  const handleCancel = () => {
    document.getElementById('addUserBanar').classList.add('addUserBanar_unactive');
    document.getElementById('addUserBanar').classList.remove('addUserBanar');
  }

  const handleUserImg = (e, setFieldValue) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setFieldValue('userImg', imgUrl);
    userPic.current.src = imgUrl;
    console.log(userPic.current);
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          userImg: '',
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            <Row>
              <Field id='firstName' name='firstName' placeholder='First Name' required/>

              <Field id='lastName' name='lastName' placeholder='Last Name' required/>

              <Field id='email' name='email' placeholder='E-mail' type='email' required/>

              <Field id='password' name='password' placeholder='Password' type='password' required/>

              <Col className='userImgForm'>
                <img ref={userPic} src={defaultUserImg} className='defaultUserImg' />
                <input
                  id='userImg'
                  name='userImg'
                  type='file'
                  accept='image/jpeg, image/png, image/jpg'
                  onChange={(e) => handleUserImg(e, setFieldValue)}
                 
                />
              </Col>

              <div className='formButtons'>
                <Button className='formBtn' type='submit' variant='contained' endIcon={<SendIcon />}>
                  Send
                </Button>
                <Button className='formBtn' variant='outlined' startIcon={<CloseIcon />} onClick={()=>handleCancel()} >
                  Close
                </Button>
              </div>
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default FormComponent;
