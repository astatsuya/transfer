import React from 'react';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom'


const Topbar = () => (
  <div className="topbar">
    <h3>社員データ</h3>
    <Link to={process.env.PUBLIC_URL + '/'}>
      <LinkButton buttonName={'トップ'}  />
    </Link>
    <Link to="/form/">
      <LinkButton buttonName={'情報入力'} />
    </Link>
    <Link to="/search/">
      <LinkButton buttonName={'情報検索'} />
    </Link>
    <Link to="/database/">
      <LinkButton buttonName={'データベース'} />
    </Link>
  </div>
);

export default Topbar;
