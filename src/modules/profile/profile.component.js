import React, { useState } from 'react';
import Header from './components/header.component';
import Grid from './components/grid.component';
import Filter from './components/filter.component';

import { ROOT_API } from '../../constants';

class Profile extends React.PureComponent {
  state = {
    user: {},
    posts: []
  };
  fetchDatas = async () => {
    const { match } = this.props;
    const { username } = (match || {}).params;

    const user = await fetch(`${ROOT_API}/users?username=${username}`)
      .then(response => response.json())
      .then(data => {
        const user = data[0];
        this.setState({ user });
        return user;
      });

    return await fetch(`${ROOT_API}/posts?userId=${user.id}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ posts: data });
      });
  };

  componentDidMount() {
    this.fetchDatas();
  }

  render() {
    const { user, posts } = this.state;

    return (
      <>
        <Header user={user} />
        {<Filter username={user.username} />}
        <Grid items={posts} />
      </>
    );
  }
}

export default Profile;
