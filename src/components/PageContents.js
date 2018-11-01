import React from 'react';
import Form from './Form';
import DataBase from './Database';
import Search from './Search';
import SearchForm from './Searchform';
import Topbar from './Topbar';
import { Link } from 'react-router-dom'


const PageContents = () => (
  <div className="main-page">
    <br />
    <p><Link to="/search/">情報検索</Link>から条件を指定して異動状況を確認できます。</p>
    <p><Link to="/database/">データベース</Link>で全てのリストが確認できます。</p>
    <br />
    <br />
    <br />
    <p>※情報入力をされていない方は<Link to="/form/">情報入力ページ</Link>から入力お願いします。</p>
    <br />
  </div>
)


export default PageContents;
