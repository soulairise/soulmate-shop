// App.jsx — 소울매트 쇼핑몰 전체를 조립하는 곳
import Header from './components/Header';
import ProductList from './components/ProductList';
import mockProducts from './data/mockProducts';
import './App.css';

function App() {
  // ★ 지금은 가짜(목업) 데이터를 직접 씁니다.
  // 나중에 백엔드가 생기면 이 부분만 바꾸면 됩니다:
  //   const [products, setProducts] = useState([]);
  //   useEffect(() => {
  //     fetch('/api/products').then(r => r.json()).then(setProducts);
  //   }, []);
  const products = mockProducts;

  return (
    <div id="top" className="app">
      <Header />

      {/* 히어로 — 브랜드 첫인상 */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">MIND · BODY · BALANCE</p>
          <h1 className="hero-title">
            매일의 수련을<br />더 단단하게, 더 편안하게
          </h1>
          <p className="hero-desc">
            소울매트는 몸과 마음의 균형을 위한 요가용품을 만듭니다.<br />
            친환경 소재로, 당신의 수련에 온전히 집중하세요.
          </p>
          <a href="#products" className="hero-cta">상품 둘러보기</a>
        </div>
      </section>

      {/* 상품 목록 */}
      <main className="main">
        <ProductList products={products} />
      </main>

      {/* 브랜드 스토리 */}
      <section className="story" id="story">
        <h2 className="story-title">soulmate</h2>
        <p className="story-text">
          "매트 위에서 만나는 또 다른 나."<br />
          소울매트는 당신이 매트 위에서 보내는 시간을 소중하게 여깁니다.
          지속가능한 소재와 정직한 만듦새로, 오래 함께할 수련의 동반자를 만듭니다.
        </p>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">soulmate<span className="logo-dot">.</span></div>
          <p className="footer-info">
            소울매트 (Soulmate) · 요가 & 웰니스 브랜드<br />
            고객센터 평일 10:00 - 18:00 · 교환/반품 안내 · 개인정보처리방침
          </p>
          <p className="footer-copy">© 2026 soulmate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
