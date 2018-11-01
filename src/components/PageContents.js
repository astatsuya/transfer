import React from 'react';
import { Link } from 'react-router-dom'

const PageContents = () => (
  <div className="pagecontents">
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
