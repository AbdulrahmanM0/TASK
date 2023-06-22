import * as React from 'react';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

export default function SignInButton() {

  const handleAddUser = () => {
    document.getElementById('addUserBanar').classList.add('addUserBanar');
    document.getElementById('addUserBanar').classList.remove('addUserBanar_unactive');
  }

  return (
    <Button className='addUserBTN' variant="contained" onClick={()=>handleAddUser()} disableElevation>
        Add-User
        <PersonAddAltIcon className='addUserIcon' />
    </Button>
  );
}
