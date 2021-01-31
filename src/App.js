import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WmartSearch from './components/wmart-search';
import WmartFeedback from './components/wmart-feedback';


const useStyles = makeStyles((theme) => ({
  container: {
      marginTop: '20px'
  }
}));

function App() {
  const classes = useStyles();
  const dropDownOptions = [
    {label: 'ALL', value: 'all'},
    {label: 'IOS', value: 'ios'},
    {label: 'ANDROID', value: 'android'},
    {label: 'WINDOWS', value: 'windows'},
    {label: 'LINUX', value: 'linux'}
  ]

  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.container} maxWidth="sm">
        <WmartSearch
        onTyping={(inputParam) => {
          console.log(inputParam);
        }}
        onSearchClick={() => {
          console.log("onsearchclick");
        }}
        dropdownOptions={dropDownOptions}
        onDropdownChange={(inputParam) => {
          console.log(`Dropdown value changed to ${inputParam}`)
        }}
        dropdownSelectedValue={"all"}
      ></WmartSearch>
      <div>
        <WmartFeedback onFeedbackSubmit={(feedback) => { console.log(feedback) }} />
      </div>
      </Container>
    </React.Fragment>
  );
}


export default App;
