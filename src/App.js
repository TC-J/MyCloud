import {useState} from 'react'

import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'

import WbCloudySharpIcon from '@mui/icons-material/WbCloudySharp'

const App = () =>
{
  const [loginOpen, setLoginOpen] = useState(false)
  const [registerOpen, setRegisterOpen] = useState(false)

  const loginClicked = () => { setLoginOpen(!loginOpen) }
  const registerClicked = () => { setRegisterOpen(!registerOpen) }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  var confirmPassword = ''

  const [login, setLogin] = useState({
    email: '', password: '', confirmPassword: '', emailError: false, passwordError: false, confirmPasswordError: false
  })

  const register = () => {
    console.log(`registeration attempt: email (${email}) password (${password}) confirmation password (${confirmPassword})`)
    if (password != confirmPassword) {
      document.getElementById('confirm-password').error = true;
    }
  }

  return (
    <div className ='App' style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

      <h1 style={{color: "darkgrey"}}>MyCloud</h1>
      <ButtonGroup sx={{margin: "20px"}} orientation='vertical' variant='text'>
        <Button size='large' startIcon={<WbCloudySharpIcon/>} onClick={loginClicked}>Log In</Button>
        <Button size='small' onClick={registerClicked}>Register</Button>
      </ButtonGroup>

      <Dialog open={registerOpen} onClose={registerClicked} fullWidth maxWidth="md">
        <DialogTitle color="darkgrey">MyCloud</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            success
            type="email"
            id="email"
            label="e-mail address"
            fullWidth
            onChange={(elem) => {setEmail(elem.target.value)}}
          />

          <TextField
            required
            autoFocus
            type="password"
            id="password"
            label="password"
            fullWidth
            autoComplete='new-password'
            onChange={(elem) => {setPassword(elem.target.value)}}
          />

          <TextField
            required
            autoFocus
            type="password"
            id="confirm-password"
            label="confirm password"
            fullWidth
            onChange={(elem) => {confirmPassword = elem.target.value}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {setRegisterOpen(false)}}>Cancel</Button>
          <Button onClick={register}>Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;