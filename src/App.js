import {useState} from 'react'

import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'

import WbCloudySharpIcon from '@mui/icons-material/WbCloudySharp'
import { FlatwareTwoTone } from '@mui/icons-material'


const App = () =>
{
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)
  const loginClicked = () => { setLoginOpen(!loginOpen) }
  const registerClicked = () => { setRegisterOpen(!registerOpen) }

  const [rForm, setRForm] = useState({
    email: '', emailError: false, emailErrorStr: '',
    password: '', pwError: false, pwErrorStr: '',
    confirmPw: '', pwMatch: true, pwMatchErrorStr: ''
  })

  // register form submitted
  const register = () => {
    var valid = true

    if (rForm.password != rForm.confirmPw) {
      setRForm({...rForm, pwMatch: false, pwError: true, pwErrorStr: 'passwords do not match', pwMatchErrorStr: 'passwords do not match'})
      valid = false
    }

    if (rForm.password.length < 8) {
      setRForm({...rForm, pwError: true, pwErrorStr: 'password needs to be at least 8 characters long', pwMatchErrorStr: 'reconfirm password pls..'});
      valid = false
    }

    var hasAt = false
    var hasDomain = false
    for (var i = 0; i < rForm.email.length; i++) {
      if (rForm.email[i] == '@' && i > 0) {
        hasAt = !hasAt
      }

      if (hasAt && (rForm.email[i] == '.' && i != (rForm.email.length - 1))) {
        hasDomain = rForm.email[i - 1] == '@' ? false : true
      }
    }

    if (!(hasAt && hasDomain)) {
      setRForm({...rForm, emailError: true, emailErrorStr: 'enter a valid looking email address'});
      valid = false
    }

    if (valid) {
      // create new database entry
    }
  }

  return (
    <div className ='App' style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

      <h1 style={{color: "darkgrey"}}>MyCloud</h1>
      <ButtonGroup sx={{margin: "20px"}} orientation='vertical' variant='text'>
        <Button size='large' startIcon={<WbCloudySharpIcon/>} onClick={loginClicked}>Log In</Button>
        <Button size='small' onClick={registerClicked}>Register</Button>
      </ButtonGroup>

      <Dialog sx={{bgcolor: "darkgrey"}} open={registerOpen} onClose={registerClicked} fullWidth maxWidth="md">
        <DialogTitle sx={{bgcolor: "black", color: "darkgrey", textAlign: "center", marginBottom: "30px"}}>Register Cloud User</DialogTitle>
        <DialogContent>
          <TextField
            sx={{margin: "5px 0"}}
            color="secondary"
            error={rForm.emailError}
            required
            autoFocus
            success
            type="email"
            id="email"
            label="Email"
            fullWidth
            onChange={(elem) => {setRForm({...rForm, email: elem.target.value, emailError: false, emailErrorStr: ''}) } }
            helperText={rForm.emailErrorStr != '' ? rForm.emailErrorStr : ''}
          />

          <TextField
            sx={{margin: "5px 0"}}
            color="secondary"
            error={rForm.pwError}
            required
            autoFocus
            type="password"
            id="password"
            label="Password"
            fullWidth
            autoComplete='new-password'
            onChange={(elem) => {setRForm({...rForm, password: elem.target.value, pwError: false, pwMatch: true, pwErrorStr: '', pwMatchErrorStr: ''})}}
            helperText={rForm.pwErrorStr != '' ? rForm.pwErrorStr : ''}
          />

          <TextField
            sx={{margin: "5px 0"}}
            color="secondary"
            error={!rForm.pwMatch}
            required
            autoFocus
            type="password"
            id="confirm-password"
            label="Confirm"
            fullWidth
            onChange={(elem) => {setRForm({...rForm, pwError: false, pwMatch: true, confirmPw: elem.target.value, pwErrorStr: '', pwMatchErrorStr: ''})}}
            helperText={rForm.pwMatchErrorStr != '' ? rForm.pwMatchErrorStr : ''}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="text" sx={{color: "red"}} onClick={() => {setRegisterOpen(false)}}>Cancel</Button>
          <Button color="secondary" variant="contained" sx={{color: "darkgrey", bgcolor: "black"}} onClick={register}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;