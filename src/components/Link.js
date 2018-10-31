import React from 'react';
import LinkButton from './LinkButton';


const Link = () => (


  <div className="top-link">
    <LinkButton buttonName={'トップ'} />
    <LinkButton buttonName={'情報入力'} />
    <LinkButton buttonName={'情報検索'} />
    <LinkButton buttonName={'データベース'} />
  </div>
);

export default Link;
