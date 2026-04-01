import { Link } from 'react-router-dom'
import '../../styles/AuthPage.css'

function RegisterPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Đăng ký</h1>
        <p className="auth-subtitle">Tạo tài khoản để mua sắm dễ dàng hơn tại StartComputer</p>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="register-name">Họ và tên</label>
            <input
              id="register-name"
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-password">Mật khẩu</label>
            <input
              id="register-password"
              type="password"
              name="password"
              placeholder="Tạo mật khẩu"
              required
              minLength={6}
            />
          </div>

          <div className="auth-field">
            <label htmlFor="register-confirm">Nhập lại mật khẩu</label>
            <input
              id="register-confirm"
              type="password"
              name="confirmPassword"
              placeholder="Nhập lại mật khẩu"
              required
              minLength={6}
            />
          </div>

          <div className="auth-actions">
            <button type="submit" className="auth-submit">
              Tạo tài khoản
            </button>
          </div>
        </form>

        <div className="auth-alt">
          <span>Đã có tài khoản?</span>
          <Link to="/login" className="auth-link">
            Đăng nhập
          </Link>
        </div>
      </div>
    </main>
  )
}

export default RegisterPage
