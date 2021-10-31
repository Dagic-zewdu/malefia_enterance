import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { signIn } from '../store/actions/user-services';
import { Link, withRouter } from 'react-router-dom';
function LoginForm({ state, signIn, history }) {
    const [details, setDetails] = useState({ email: '', password: '' })
    const { error, loading } = state
    console.log(state)
    const submitHandler = e => {
        e.preventDefault();
        signIn(details, history.push)
    }
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }

    return (
        <form onSubmit={submitHandler}>
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='email'
                        placeholder='Enter Email'
                        name='email' id='email'
                        fullWidth
                        required
                        type='email'
                        onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    <TextField
                        label='Password'
                        placeholder='Enter password'
                        name='password'
                        id='password'
                        type='password'
                        min={5}
                        fullWidth
                        required
                        onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"
                    />
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Typography > Do you have an account ?
                        <Link to="/signup" >
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        </form>
    )

}
const mapDispatchToProps = dispatch => ({
    signIn: (userCredentials, push) => dispatch(signIn(userCredentials, push))
});
const mapStateToProps = (state, ownProps) => {
    return {
        state: state
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm))
