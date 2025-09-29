import React from 'react';

function Header() {
  return (
    <header className="app-header">
        <span>
            <button><img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png" alt="" /></button>
            <button><img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png" alt="" /></button>
        </span>
        <div>
            <h2>React Cinema</h2>
            <h5>: Beyond The Screen</h5>
        </div>
        <span>
            <button><img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png" alt="" /></button>
            <button><img src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png" alt="" /></button>
        </span>
    
        
    </header>
  );
}

export default Header;