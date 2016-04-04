import React, { Component } from 'react'
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

import axios from 'axios';
import { isEmpty } from 'lodash/lang';

import UserInfo from './user/UserInfo';
import github from './utils/github'
import Repos from './user/Repos';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      repos: {}
    };
  }
  render() {
    let GitHubInfo;
    if (!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label="Save" />
        </div>
      );
    };

    return (
      <div className="account">
        <Card className="content">
          <form onSubmit={this._handleSubmit.bind(this)}>
            <DatePicker refs="birthday"
                        hintText="Birth Day"
                        autoOK={false} />
            <TextField hintText="Your GithHub Account"
                       ref="account"/>
            <FlatButton label="Search GitHub"
                        secondary={true}
                        type="submit" />
          </form>
          { GitHubInfo }
        </Card>
      </div>
    );
  }

  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    github.getGithubInfo(account)
      .then((res) => {
        this.setState({
          user: res.user,
          repos: res.repos
        });
        console.log(res.repos);
      });
  }
}

export default Account;
