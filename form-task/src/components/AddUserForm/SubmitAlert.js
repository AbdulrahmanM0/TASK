import Alert from 'react-bootstrap/Alert';

function SubmitAlert() {
  return (
    <>
        <Alert key={'success'} variant={'success'} id='succeded' className='unactive'>
          Successfully Registered .
        </Alert>
        <Alert key={'warning'} variant={'warning'} id='warning' className='unactive'>
          Existed Email !
        </Alert>
    </>
  );
}

export default SubmitAlert;