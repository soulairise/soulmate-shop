// ProductList.jsx — 목업 데이터를 받아 상품 목록을 그립니다.
import { useState } from 'react';
import ProductCard from './ProductCard';

// 카테고리 필터 버튼 목록
const CATEGORIES = ['전체', '매트', '요가복', '소도구'];

function ProductList({ products }) {
  const [activeCategory, setActiveCategory] = useState('전체');

  // 선택한 카테고리에 맞는 상품만 걸러냅니다.
  const filtered =
    activeCategory === '전체'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="product-section" id="products">
      <div className="section-head">
        <h2 className="section-title">전체 상품</h2>
        <p className="section-sub">몸과 마음의 균형을 위한 소울매트의 큐레이션</p>
      </div>

      <div className="category-filter">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 극단 케이스: 목록이 비었을 때도 화면이 깨지지 않도록 처리 */}
      {filtered.length === 0 ? (
        <p className="empty-message">해당 카테고리에 상품이 없습니다.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProductList;
