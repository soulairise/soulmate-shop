// ProductCard.jsx — 상품 한 개를 그리는 카드 컴포넌트
// experts.map()처럼, 상품 목록을 돌면서 이 카드를 하나씩 그립니다.

function formatPrice(value) {
  return value.toLocaleString('ko-KR') + '원';
}

function ProductCard({ name, category, price, salePrice, colors, rating, reviewCount, soldOut, tags, image, bio }) {
  const hasSale = salePrice != null;
  const discountRate = hasSale ? Math.round((1 - salePrice / price) * 100) : 0;

  return (
    <article className={`product-card ${soldOut ? 'is-soldout' : ''}`}>
      <div className="product-thumb">
        <span className="product-emoji" role="img" aria-label={category}>{image}</span>
        {soldOut && <span className="soldout-badge">품절</span>}
        {!soldOut && tags.includes('신상품') && <span className="new-badge">NEW</span>}
      </div>

      <div className="product-body">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-bio">{bio}</p>

        <div className="product-colors">
          {colors.map((c) => (
            <span key={c} className="color-chip">{c}</span>
          ))}
        </div>

        <div className="product-rating">
          ⭐ {rating.toFixed(1)}
          <span className="review-count">({reviewCount})</span>
        </div>

        <div className="product-price-row">
          {hasSale ? (
            <>
              <span className="discount-rate">{discountRate}%</span>
              <span className="sale-price">{formatPrice(salePrice)}</span>
              <span className="origin-price">{formatPrice(price)}</span>
            </>
          ) : (
            <span className="sale-price">{formatPrice(price)}</span>
          )}
        </div>

        <button className="add-to-cart" disabled={soldOut}>
          {soldOut ? '품절되었습니다' : '장바구니 담기'}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
