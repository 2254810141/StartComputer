import { Link } from 'react-router-dom'
import '../../styles/AuthPage.css'

function LoginPage() {
  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">Đăng nhập</h1>
        <p className="auth-subtitle">Chào mừng bạn quay lại StartComputer</p>

        <form className="auth-form">
          <div className="auth-field">
            <label htmlFor="login-email">Email</label>
            <input
              id="login-email"
              type="email"
              name="email"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="login-password">Mật khẩu</label>
            <input
              id="login-password"
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="auth-forgot">
            <Link to="/forgot-password" className="auth-link">
              Quên mật khẩu?
            </Link>
          </div>

          <div className="auth-actions">
            <button type="submit" className="auth-submit">
              Đăng nhập
            </button>
          </div>
        </form>

        <div className="auth-alt">
          <span>Chưa có tài khoản?</span>
          <Link to="/register" className="auth-link">
            Đăng ký ngay
          </Link>
        </div>
      </div>
    </main>
  )
}

export default LoginPage
