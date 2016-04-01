import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import Tabs from 'material-ui/lib/tabs/tabs';
import Tab from 'material-ui/lib/tabs/tab';

class NavBar extends Component {
  render() {
    let styles = {
      tabs: {
        width: '390px',
        position: 'absolute',
        right: '60px',
        textTransform: 'uppercase',
      },
      tab: {
        height: '64px',
        color: '#fff',
      },
      inkBar: {
        height: '4px',
        marginTop: '-4px',
        backgroundColor: '#FF5252',
      },
    };
    return (
      <div className="app-header">
        <Tabs tabItemContainerStyle={{backgroundColor: 'transparent'}} style={styles.tabs} inkBarStyle={styles.inkBar}>
          <Tab style={styles.tab} label="Home"/>
          <Tab style={styles.tab} label="Account"/>
          <Tab style={styles.tab} label="About"/>
        </Tabs>
      </div>
    );
  };
}

export default NavBar;
