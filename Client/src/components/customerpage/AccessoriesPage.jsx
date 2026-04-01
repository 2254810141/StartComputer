import { Link } from 'react-router-dom'
import '../../styles/ShopPage.css'
import { accessories } from '../../data/catalog'

function AccessoriesPage({ onAddToCart = () => {} }) {
  return (
    <main className="shop-page section">
      <div className="container section__header">
        <div>
          <p className="eyebrow">Phụ kiện chính hãng</p>
          <h2>Trang Phụ kiện</h2>
          <p className="muted">Hoàn thiện góc làm việc với phụ kiện chất lượng cao.</p>
        </div>
      </div>

      <div className="container shop-grid">
        {accessories.map((item) => (
          <article className="shop-card" key={item.id}>
            <h3>{item.name}</h3>
            <p className="shop-price">{item.displayPrice}</p>
            <p className="muted">{item.desc}</p>
            <div className="shop-actions">
              <Link to={`/accessories/${item.id}`} className="ghost-btn">
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

export default AccessoriesPage
