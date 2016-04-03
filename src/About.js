import React, { Component } from 'react'
import RaisedButton from 'material-ui/lib/raised-button';
import AvatarURL from './assets/avatar.png';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <div className="story">
            <h3>个人信息</h3>
            <div className="desc">
              大四学渣一枚<br />呵呵<br />呵呵
            </div>
            <a href="https://github.com/FunkySamuel37">
              <RaisedButton label="下载简历" primary={false} labelStyle={{fontSize: '16px', color: '#FFF'}} backgroundColor='#FF5252' />
            </a>
          </div>
          <div className="paper">
            <img src={AvatarURL} />
          </div>
          <div className="info">
            <h3>联系方式</h3>
            <ul>
              <li>
                <span>姓名：</span> 于智威
              </li>
              <li>
                <span>邮箱：</span> masterzhiwei@gmail.com
              </li>
              <li>
                <span>微信：</span> FunkySamuel37
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
}

export default About;
