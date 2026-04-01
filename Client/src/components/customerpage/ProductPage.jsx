import { Link } from 'react-router-dom'
import '../../styles/ShopPage.css'
import { laptopProducts } from '../../data/catalog'

function ProductPage({ onAddToCart = () => {} }) {
  return (
    <main className="shop-page section">
      <div className="container section__header">
        <div>
          <p className="eyebrow">Laptop nổi bật</p>
          <h2>Danh sách Laptop</h2>
          <p className="muted">Cấu hình tối ưu cho học tập, lập trình và gaming.</p>
        </div>
      </div>

      <div className="container shop-grid">
        {laptopProducts.map((item) => (
          <article className="shop-card" key={item.id}>
            <h3>{item.name}</h3>
            <p className="shop-price">{item.displayPrice}</p>
            <ul className="spec-list">
              {item.specs.map((spec) => (
                <li key={spec}>{spec}</li>
              ))}
            </ul>
            <div className="shop-actions">
              <Link to={`/products/${item.id}`} className="ghost-btn">
                Xem
              </Link>
              <button
                type="button"
                className="primary-btn"
                onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
              >
                Thêm vào giỏ
              </button>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

export default ProductPage
