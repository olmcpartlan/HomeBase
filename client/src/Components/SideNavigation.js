import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import WifiIcon from '@material-ui/icons/Wifi';
import TvIcon from '@material-ui/icons/Tv';
import List from '@material-ui/core/List';
import React, { Component } from 'react';
import { BrowserRouter, Route, Router } from 'react-router-dom';

import { withRouter } from 'react-router-dom';

class SideBar extends Component {
  constructor(props) {
    super(props)
  }

  RedirectUrl(url) {
    this.props.history.push(url);
    console.log(url);
  }

  render() {

    return (
      <div className="side-container">
        <Divider />
        <BrowserRouter>
          <List>
            <ListItem button onClick={() => this.RedirectUrl('/')}>
              <ListItemIcon><CloudUploadSharpIcon /></ListItemIcon>
              <ListItemText primary={'Boost'} />
            </ListItem>
            <ListItem button onClick={() => this.RedirectUrl('/plex')}>
              <ListItemIcon><TvIcon /></ListItemIcon>
              <ListItemText primary={'Plex'} href="/plex" />
            </ListItem>
            <ListItem button onClick={() => this.RedirectUrl('/proxy')}>
              <ListItemIcon><WifiIcon /></ListItemIcon>
              <ListItemText primary={'Proxy'} />
            </ListItem>
            <ListItem button onClick={() => this.RedirectUrl('/lighting')}>
              <ListItemIcon><EmojiObjectsIcon /></ListItemIcon>
              <ListItemText primary={'Lighting'} />
            </ListItem>
          </List>
        </BrowserRouter>

      </div>
    )

  }


}

export default withRouter(SideBar)