import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const usuarios = [
  { email: 'cliente@teste.com', senha: '123', tipo: 'cliente' },
  { email: 'recepcao@teste.com', senha: '123', tipo: 'recepcionista' },
  { email: 'admin@teste.com', senha: '123', tipo: 'admin' },
]

function Login() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  function handleLogin() {
    const usuario = usuarios.find(u => u.email === email && u.senha === senha)
    if (!usuario) {
      setErro('Email ou senha incorretos')
      return
    }
    if (usuario.tipo === 'cliente') navigate('/cliente')
    if (usuario.tipo === 'recepcionista') navigate('/recepcionista')
    if (usuario.tipo === 'admin') navigate('/admin')
  }

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      background: '#0f0f0f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>
        {`
          @media (max-width: 480px) {
            .login-container {
              padding: 1rem !important;
            }
            .login-card {
              padding: 2rem 1.5rem !important;
            }
            .login-title {
              font-size: 20px !important;
            }
            .login-subtitle {
              font-size: 12px !important;
            }
            .login-input {
              padding: 10px 12px !important;
              font-size: 13px !important;
            }
            .login-button {
              padding: 12px !important;
              font-size: 13px !important;
            }
          }
        `}
      </style>

      <div className="login-card" style={{
        width: '100%',
        maxWidth: '380px',
        background: '#1a1a1a',
        border: '0.5px solid #2e2e2e',
        borderRadius: '16px',
        padding: '2.5rem 2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem'
      }}>

        {/* Logo e título */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#c9a84c',
            borderRadius: '12px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 3h2v18H7V3zm4 4h2v14h-2V7zm4-2h2v16h-2V5z" fill="#0f0f0f"/>
            </svg>
          </div>
          <h1 className="login-title" style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '22px',
            fontWeight: '600',
            color: '#f0ece0',
            margin: '0 0 4px',
            letterSpacing: '0.02em'
          }}>BarberSystem</h1>
          <p className="login-subtitle" style={{ fontSize: '13px', color: '#666', margin: 0, fontWeight: '300' }}>
            Acesse sua conta para continuar
          </p>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Campos */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#888', fontWeight: '500', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              E-mail
            </label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="login-input"
              style={{
                background: '#111',
                border: '0.5px solid #2e2e2e',
                borderRadius: '8px',
                padding: '12px 14px',
                fontSize: '14px',
                color: '#f0ece0',
                outline: 'none',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <label style={{ fontSize: '12px', color: '#888', fontWeight: '500', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Senha
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className="login-input"
              style={{
                background: '#111',
                border: '0.5px solid #2e2e2e',
                borderRadius: '8px',
                padding: '12px 14px',
                fontSize: '14px',
                color: '#f0ece0',
                outline: 'none',
              }}
            />
          </div>
        </div>

        {/* Erro */}
        {erro && (
          <p style={{ color: '#e05555', fontSize: '13px', margin: 0, textAlign: 'center' }}>
            {erro}
          </p>
        )}

        {/* Botão */}
        <button
          onClick={handleLogin}
          className="login-button"
          style={{
            background: '#c9a84c',
            border: 'none',
            borderRadius: '8px',
            padding: '13px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#0f0f0f',
            cursor: 'pointer',
            letterSpacing: '0.03em',
            width: '100%',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          Entrar
        </button>

        <p style={{ textAlign: 'center', fontSize: '12px', color: '#444', margin: 0 }}>
          BarberSystem © 2026 — Todos os direitos reservados
        </p>

      </div>
    </div>
  )
}

export default Login