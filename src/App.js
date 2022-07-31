import './App.css';
import {Switch, Route, useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Welcome } from './Welcome';
import { BlogList } from "./BlogList";
import { BlogDetails } from "./BlogDetails";
import { AddPlace } from "./AddPlace";
import { EditPlace } from "./EditPlace";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Login } from './Login';
import Write from './Write';
import TextField from '@mui/material/TextField';

export default function App() {
  const [name, setName] = useState("");
  const history = useHistory();  
 const [mode, setMode] = useState("dark");
 const theme = createTheme({
  palette: {
    mode: mode,
  },
});

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
    <div className="App">
     <AppBar position="static">
        <Toolbar>
        <Button color="inherit" onClick={()=>history.push("/")}>Home</Button>
        <Button color="inherit" onClick={()=>history.push("/blog/add")}>Add Place</Button>
        <Button color="inherit" onClick={()=>history.push("/write")}>Write</Button>
        <Button color="inherit" style={{marginLeft:"auto"}}
        startIcon={mode === 'dark' ? <Brightness7Icon />: <Brightness4Icon />}
        onClick={()=>setMode(mode === "light" ? "dark" : "light")}>{mode === "light" ? "dark" : "light"} mode</Button>
       <Button color="inherit" onClick={()=>history.push("/login")}>Login</Button>
        </Toolbar>
       </AppBar>
       
     <div className="route-container">
    <Switch>
    <Route path="/blog/add"> 
    <AddPlace /> 
    </Route>
    <Route path="/blog/edit/:id"> 
    <EditPlace /> 
    </Route>
    <Route path="/blog/:id"> 
    <BlogDetails /> 
    </Route>
      <Route path="/blog"> 
 
  </Route>
  <Route path="/write"> 
  <Write />
  </Route>
      <Route path="/login"> 
  <Login />
      </Route>
    <Route path="/">
     
      <BlogList />
      </Route>
    </Switch>
    </div>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

