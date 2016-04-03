import React, { Component } from 'react'
import LeftNav from 'material-ui/lib/left-nav';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import {SelectableContainerEnhance} from 'material-ui/lib/hoc/selectable-enhance';
import * as colors from '../colors';

const SelectableList = SelectableContainerEnhance(List);


class AppLeftNav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      open: false,
    };
  }

  componentWillMount() {
    this.setState({
      selectedIndex: this._getSelectedIndex()
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: this._getSelectedIndex()
    });
  }
  _getSelectedIndex() {
    return this.context.router.isActive('/home') ? '/home' :
      this.context.router.isActive('/account') ? '/account' :
      this.context.router.isActive('/about') ? '/about' : '/home';
  }

  render() {
    let styles = {
      header: {
        cursor: 'pointer',
        fontSize: '24px',
        color: '#fff',
        lineHeight: '64px',
        fontWeight: '300',
        backgroundColor: colors.primaryColor,
        paddingLeft: '24px',
        paddingTop: '0px',
        marginBottom: '8px',
      },
      selectedList: {
        color: colors.accentColor,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
      }
    };
    return (
      <LeftNav
        open={this.state.open}
        docked={false}
        onRequestChange={open => this._setState({open})}>
        <div style={styles.header}
          onTouchTap={this.handleTouchTapHeader.bind(this)}>
          S2
        </div>
        <SelectableList
          selectedItemStyle={styles.selectedList}
          valueLink={{
            value: this.state.selectedIndex,
            requestChange: this.handleUpdateSelectedIndex.bind(this),
          }}>
          <ListItem
            value="/home"
            primaryText="Home" />
          <ListItem
            value="/account"
            primaryText="Account" />
          <ListItem
            value="/about"
            primaryText="About" />
        </SelectableList>
      </LeftNav>
    );
  }

  _setState({open}) {
    this.setState({open});
    console.log(open);
  }

  handleToggle() {
    this.setState({open: !this.state.open});
  }

  handleTouchTapHeader() {
    this.context.router.push('/home');
    this.setState({open: false});
  }

  handleUpdateSelectedIndex(e,index) {
    this.context.router.push(index);
    this.setState({
      open: false,
      selectedIndex: index,
    });
  }
}

AppLeftNav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default AppLeftNav;
