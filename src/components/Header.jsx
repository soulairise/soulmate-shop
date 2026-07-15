// Header.jsx — 브랜드 로고, 메뉴, 장바구니가 있는 상단 헤더
function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="logo" href="#top">
          soulmate<span className="logo-dot">.</span>
        </a>
        <nav className="nav">
          <a href="#products">전체상품</a>
          <a href="#products">매트</a>
          <a href="#products">요가복</a>
          <a href="#products">소도구</a>
          <a href="#story">브랜드스토리</a>
        </nav>
        <div className="header-actions">
          <button className="icon-btn" aria-label="검색">🔍</button>
          <button className="icon-btn" aria-label="장바구니">🛒</button>
          <button className="login-btn">로그인</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
