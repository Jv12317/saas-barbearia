import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const servicos = [
  { id: 1, nome: 'Corte', preco: 'R$ 35' },
  { id: 2, nome: 'Barba', preco: 'R$ 25' },
  { id: 3, nome: 'Combo', preco: 'R$ 55' },
]

const barbeiros = [
  { id: 1, nome: 'Carlos', iniciais: 'CA' },
  { id: 2, nome: 'Marcos', iniciais: 'MA' },
  { id: 3, nome: 'Pedro', iniciais: 'PE' },
]

const horarios = [
  { hora: '09:00', disponivel: true },
  { hora: '10:00', disponivel: false },
  { hora: '11:00', disponivel: true },
  { hora: '14:00', disponivel: true },
  { hora: '15:00', disponivel: true },
  { hora: '16:00', disponivel: false },
  { hora: '17:00', disponivel: true },
  { hora: '18:00', disponivel: true },
]

function AgendamentoCliente() {
  const [servicoSelecionado, setServicoSelecionado] = useState(null)
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState(null)
  const [data, setData] = useState('')
  const [horario, setHorario] = useState(null)
  const [confirmado, setConfirmado] = useState(false)
  const navigate = useNavigate()

  function handleConfirmar() {
    if (!servicoSelecionado || !barbeiroSelecionado || !data || !horario) {
      alert('Por favor, preencha todos os campos!')
      return
    }
    setConfirmado(true)
  }

  if (confirmado) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#0f0f0f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'DM Sans', sans-serif",
        padding: '2rem'
      }}>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
        <div style={{
          background: '#1a1a1a',
          border: '0.5px solid #2e2e2e',
          borderRadius: '16px',
          padding: '2.5rem 2rem',
          maxWidth: '380px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
            width: '56px', height: '56px',
            background: '#c9a84c22',
            border: '0.5px solid #c9a84c55',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto'
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13l4 4L19 7" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', color: '#f0ece0', margin: 0 }}>
            Agendamento confirmado!
          </h2>
          <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>
            {servicoSelecionado.nome} com {barbeiroSelecionado.nome}<br />
            {data} às {horario}
          </p>
          <button
            onClick={() => setConfirmado(false)}
            style={{
              background: '#c9a84c',
              border: 'none',
              borderRadius: '8px',
              padding: '12px',
              fontSize: '14px',
              fontWeight: '500',
              color: '#0f0f0f',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              marginTop: '0.5rem'
            }}
          >
            Novo agendamento
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', fontFamily: "'DM Sans', sans-serif", color: '#f0ece0' }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>
        {`
          @media (max-width: 768px) {
            .header-cliente {
              padding: 1rem !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
              align-items: flex-start !important;
            }
            .header-title-cliente {
              font-size: 16px !important;
            }
            .header-subtitle-cliente {
              font-size: 11px !important;
            }
            .btn-sair-cliente {
              align-self: flex-end !important;
              padding: 4px 10px !important;
              font-size: 11px !important;
            }
            .container-cliente {
              padding: 1rem !important;
            }
            .grid-servicos {
              grid-template-columns: 1fr !important;
            }
            .grid-barbeiros {
              grid-template-columns: 1fr !important;
            }
            .grid-horarios {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <div className="header-cliente" style={{
        background: '#1a1a1a',
        borderBottom: '0.5px solid #2e2e2e',
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div>
          <h1 className="header-title-cliente" style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '600', color: '#f0ece0', margin: '0 0 2px' }}>
            BarberSystem
          </h1>
          <span className="header-subtitle-cliente" style={{ fontSize: '12px', color: '#666' }}>Olá, cliente!</span>
        </div>
        <button
          className="btn-sair-cliente"
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            border: '0.5px solid #2e2e2e',
            borderRadius: '8px',
            padding: '6px 14px',
            fontSize: '12px',
            color: '#888',
            cursor: 'pointer',
            fontFamily: "'DM Sans', sans-serif"
          }}
        >
          Sair
        </button>
      </div>

      {/* Body */}
      <div className="container-cliente" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Serviços */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>
            Escolha o serviço
          </p>
          <div className="grid-servicos" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {servicos.map(s => (
              <div
                key={s.id}
                onClick={() => setServicoSelecionado(s)}
                style={{
                  background: servicoSelecionado?.id === s.id ? '#1f1c13' : '#1a1a1a',
                  border: `0.5px solid ${servicoSelecionado?.id === s.id ? '#c9a84c' : '#2e2e2e'}`,
                  borderRadius: '10px',
                  padding: '14px 10px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#f0ece0', marginBottom: '4px' }}>{s.nome}</div>
                <div style={{ fontSize: '12px', color: '#c9a84c' }}>{s.preco}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Barbeiros */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>
            Escolha o barbeiro
          </p>
          <div className="grid-barbeiros" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {barbeiros.map(b => (
              <div
                key={b.id}
                onClick={() => setBarbeiroSelecionado(b)}
                style={{
                  background: barbeiroSelecionado?.id === b.id ? '#1f1c13' : '#1a1a1a',
                  border: `0.5px solid ${barbeiroSelecionado?.id === b.id ? '#c9a84c' : '#2e2e2e'}`,
                  borderRadius: '10px',
                  padding: '14px 10px',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '36px', height: '36px',
                  borderRadius: '50%',
                  background: '#c9a84c22',
                  border: '0.5px solid #c9a84c55',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: '#c9a84c',
                  marginBottom: '8px'
                }}>
                  {b.iniciais}
                </div>
                <div style={{ fontSize: '12px', color: '#f0ece0' }}>{b.nome}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Data */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>
            Escolha a data
          </p>
          <input
            type="date"
            value={data}
            onChange={e => setData(e.target.value)}
            style={{
              background: '#1a1a1a',
              border: '0.5px solid #2e2e2e',
              borderRadius: '8px',
              padding: '12px 14px',
              fontSize: '14px',
              color: '#f0ece0',
              outline: 'none',
              width: '100%',
              fontFamily: "'DM Sans', sans-serif",
              colorScheme: 'dark'
            }}
          />
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Horários */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>
            Escolha o horário
          </p>
          <div className="grid-horarios" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
            {horarios.map(h => (
              <div
                key={h.hora}
                onClick={() => h.disponivel && setHorario(h.hora)}
                style={{
                  background: horario === h.hora ? '#1f1c13' : '#1a1a1a',
                  border: `0.5px solid ${horario === h.hora ? '#c9a84c' : '#2e2e2e'}`,
                  borderRadius: '8px',
                  padding: '10px 6px',
                  fontSize: '13px',
                  color: !h.disponivel ? '#333' : horario === h.hora ? '#c9a84c' : '#888',
                  cursor: h.disponivel ? 'pointer' : 'default',
                  textAlign: 'center'
                }}
              >
                {h.hora}
              </div>
            ))}
          </div>
        </div>

        {/* Botão */}
        <button
          onClick={handleConfirmar}
          style={{
            background: '#c9a84c',
            border: 'none',
            borderRadius: '8px',
            padding: '14px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#0f0f0f',
            cursor: 'pointer',
            width: '100%',
            fontFamily: "'DM Sans', sans-serif",
            letterSpacing: '0.03em'
          }}
        >
          Confirmar Agendamento
        </button>

      </div>
    </div>
  )
}

export default AgendamentoCliente