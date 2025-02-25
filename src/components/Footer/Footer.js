/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <span className={s.text}>
            This website is not affiliated with{' '}
            <a className={s.link} href="https://www.battlescribe.net/">
              BattleScribe
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
