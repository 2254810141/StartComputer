import { useParams, Link } from 'react-router-dom'
import '../../styles/ProductDetail.css'
import { findAccessoryById } from '../../data/catalog'

function AccessoryDetailPage({ onAddToCart = () => {} }) {
  const { accessoryId } = useParams()
  const accessory = findAccessoryById(accessoryId)

  if (!accessory) {
    return (
      <main className="detail-page section">
        <div className="container detail-card">
          <p className="muted">Không tìm thấy phụ kiện.</p>
          <Link to="/accessories" className="ghost-btn">
            Quay lại danh sách Phụ kiện
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="detail-page section">
      <div className="container detail-card">
        <div className="detail-header">
          <div>
            <p className="eyebrow">Phụ kiện chính hãng</p>
            <h1>{accessory.name}</h1>
            <p className="muted">{accessory.desc}</p>
          </div>
          <div className="detail-price">{accessory.displayPrice}</div>
        </div>

        {accessory.image && (
          <div className="detail-media">
            <img src={accessory.image} alt={accessory.name} />
          </div>
        )}

        <div className="detail-body">
          <div>
            <h3>Chi tiết</h3>
            <ul className="detail-specs">
              {accessory.details?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="detail-actions">
          <Link to="/accessories" className="ghost-btn">
            Quay lại danh sách
          </Link>
          <button
            type="button"
            className="primary-btn"
            onClick={() => onAddToCart({ id: accessory.id, name: accessory.name, price: accessory.price })}
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </main>
  )
}

export default AccessoryDetailPage
