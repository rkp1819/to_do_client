import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {
  makeStyles
} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, RouteLink, Redirect } from "react-router-dom"
import { useHistory } from "react-router-dom";

function Copyright() {
  return ( <
      Typography variant = "body2"
      color = "textSecondary"
      align = "center" > {
        'Copyright © '
      } <
      Link color = "inherit"
      href = "/home" >
      To - Do <
      /Link>{' '} {
      new Date().getFullYear()
    } {
      '.'
    } <
    /Typography>
);
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Signin() {
  const classes = useStyles();
  const history = useHistory();
  //using email as user name
  const [loginData, setLoginData] = React.useState({
    username: "",
    password: ""
  });

  function handleEmailChange(event) {
    const email = event.target.value;
    console.log(email);
    setLoginData((prevState) => {
      return {
        ...prevState,
        username: email
      }
    });
  }

  function handlePasswordChange(event) {
    const password = event.target.value
    setLoginData((prevState) => {
      return {
        ...prevState,
        password: password
      }
    });
  }

  function handleSignin(event) {
    console.log("email:   " + event.target.email.value);
    console.log("password:   " + event.target.password.value);
    console.log("loginData: ::::: ::: :: " + loginData);
    login();
    event.preventDefault();
  }

  function login() {
    axios.post('http://localhost:3000/login', loginData)
      .then(response => {

        console.log("login response:  " + require('util').inspect(response, {
          depth: null
        }));
        if(response.data.Successful && response.data.loggedIn){
          history.push("/home");
        }
      }).catch(error => {
        console.log(error);
      });
    // console.log(this.state.loginform.contactNo, this.state.loginform.password);
  }

  return ( <
    Container component = "main"
    maxWidth = "xs" >
    <
    CssBaseline / >
    <
    div className = {
      classes.paper
    } >
    <
    Avatar className = {
      classes.avatar
    } >
    <
    LockOutlinedIcon / >
    <
    /Avatar> <
    Typography component = "h1"
    variant = "h5" >
    Sign in
    <
    /Typography> <
    form className = {
      classes.form
    }
    onSubmit = {
      handleSignin
    }
    noValidate >
    <
    TextField variant = "outlined"
    margin = "normal"
    required fullWidth id = "email"
    label = "Email Address"
    name = "email"
    autoComplete = "email"
    value = {
      loginData.username
    }
    autoFocus onChange = {
      handleEmailChange
    }
    /> <
    TextField variant = "outlined"
    margin = "normal"
    required fullWidth name = "password"
    label = "Password"
    type = "password"
    id = "password"
    autoComplete = "current-password"
    value = {
      loginData.password
    }
    onChange = {
      handlePasswordChange
    }
    /> <
    FormControlLabel control = {
      <
      Checkbox value = "remember"
      color = "primary" / >
    }
    label = "Remember me" /
    >
    <
    Button type = "submit"
    fullWidth variant = "contained"
    color = "primary"
    className = {
      classes.submit
    } >
    Sign In <
    /Button> <
    Grid container >
    <
    Grid item xs >
    <
    Link href = "#"
    variant = "body2" >
    Forgot password ?
    <
    /Link> < /
    Grid > <
    Grid item >
    <
    Link href = "/signup"
    variant = "body2" > {
      "Don't have an account? Sign Up"
    } <
    /Link> < /
    Grid > <
    /Grid> < /
    form > <
    /div> <
    Box mt = {
      8
    } >
    <
    Copyright / >
    <
    /Box> < /
    Container >
  );
}
