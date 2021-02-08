import './App.css';
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import WmartSearch from './components/wmart-search';
import WmartFeedback from './components/wmart-feedback';
import WmartTab from './components/wmart-tab';


const useStyles = makeStyles((theme) => ({
  container: {
      marginTop: '20px'
  },
  tab: {
    border: "2px solid red"
  },
  feedback: {
    border: "2px solid yellow"
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
        <WmartFeedback classNames={[ classes.feedback ]} onFeedbackSubmit={(feedback) => { console.log(feedback) }} />
      </div>
      <div style={{ margin: 20 }}>
        <WmartTab
          selectedTab={0}
          classNames={[]}
          items={[
            {
              label: 'Label 1',
              children: <div>Tab 1</div>
            },
            {
              label: 'Label 2',
              children: <div>Tab 2</div>
            },
            {
              label: 'Label 3',
              children: <div>Tab 3</div>
            }
          ]}
          onTabChange = {(val) => { console.log(`Tab changed to :- ${val}`) }}
        ></WmartTab>
      </div>
      </Container>
    </React.Fragment>
  );
}


export default App;
