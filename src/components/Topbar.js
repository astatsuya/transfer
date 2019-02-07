import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton';

const Topbar = () => (
  <div className="topbar">
    <h3>社員データ</h3>
    <Link to={`${process.env.PUBLIC_URL}/`}>
      <LinkButton buttonName="トップ" />
    </Link>
    <Link to="/form/">
      <LinkButton buttonName="情報入力" />
    </Link>
    <Link to="/search/">
      <LinkButton buttonName="情報検索" />
    </Link>
    <Link to="/database/">
      <LinkButton buttonName="登録データ" />
    </Link>
  </div>
);

export default Topbar;
