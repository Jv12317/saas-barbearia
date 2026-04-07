import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const agendamentosIniciais = [
  { id: 1, hora: '09:00', cliente: 'João Silva', servico: 'Corte', barbeiro: 'Carlos', iniciais: 'CA', status: 'confirmado' },
  { id: 2, hora: '10:00', cliente: 'Rafael Souza', servico: 'Barba', barbeiro: 'Marcos', iniciais: 'MA', status: 'pendente' },
  { id: 3, hora: '11:00', cliente: 'Lucas Pereira', servico: 'Combo', barbeiro: 'Pedro', iniciais: 'PE', status: 'pendente' },
  { id: 4, hora: '14:00', cliente: 'Marcos Lima', servico: 'Corte', barbeiro: 'Carlos', iniciais: 'CA', status: 'cancelado' },
  { id: 5, hora: '15:00', cliente: 'Felipe Costa', servico: 'Combo', barbeiro: 'Pedro', iniciais: 'PE', status: 'confirmado' },
  { id: 6, hora: '16:00', cliente: 'Bruno Alves', servico: 'Corte', barbeiro: 'Marcos', iniciais: 'MA', status: 'confirmado' },
  { id: 7, hora: '17:00', cliente: 'Diego Rocha', servico: 'Combo', barbeiro: 'Pedro', iniciais: 'PE', status: 'confirmado' },
  { id: 8, hora: '18:00', cliente: 'André Lima', servico: 'Corte', barbeiro: 'Carlos', iniciais: 'CA', status: 'pendente' },
]

const barbeiros = ['Carlos', 'Marcos', 'Pedro']
const iniciaisBarbeiro = { Carlos: 'CA', Marcos: 'MA', Pedro: 'PE' }

function PainelRecepcionista() {
  const [agendamentos, setAgendamentos] = useState(agendamentosIniciais)
  const navigate = useNavigate()

  function confirmar(id) {
    setAgendamentos(prev => prev.map(a => a.id === id ? { ...a, status: 'confirmado' } : a))
  }

  function cancelar(id) {
    setAgendamentos(prev => prev.map(a => a.id === id ? { ...a, status: 'cancelado' } : a))
  }

  function statsPorBarbeiro(nome) {
    const lista = agendamentos.filter(a => a.barbeiro === nome && a.status !== 'cancelado')
    const total = lista.length
    const servicos = {}
    lista.forEach(a => { servicos[a.servico] = (servicos[a.servico] || 0) + 1 })
    return { total, servicos }
  }

  const total = agendamentos.length
  const confirmados = agendamentos.filter(a => a.status === 'confirmado').length
  const pendentes = agendamentos.filter(a => a.status === 'pendente').length

  const badgeStyle = (status) => {
    if (status === 'confirmado') return { background: '#0f2e1a', color: '#4caf7d', border: '0.5px solid #1a4a2a' }
    if (status === 'pendente') return { background: '#2e2410', color: '#c9a84c', border: '0.5px solid #4a3a18' }
    return { background: '#2e1010', color: '#e05555', border: '0.5px solid #4a1818' }
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f', fontFamily: "'DM Sans', sans-serif", color: '#f0ece0' }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      <style>
        {`
          @media (max-width: 768px) {
            .header-recep {
              padding: 1rem !important;
              flex-direction: column !important;
              gap: 0.5rem !important;
              align-items: flex-start !important;
            }
            .header-title-recep {
              font-size: 16px !important;
            }
            .header-subtitle-recep {
              font-size: 11px !important;
            }
            .btn-sair-recep {
              align-self: flex-end !important;
              padding: 4px 10px !important;
              font-size: 11px !important;
            }
            .container-recep {
              padding: 1rem !important;
            }
            .grid-resumo {
              grid-template-columns: 1fr !important;
            }
            .grid-barbeiros {
              grid-template-columns: 1fr !important;
            }
            .agendamento-recep {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 8px !important;
            }
            .hora-agendamento-recep {
              min-width: auto !important;
              align-self: flex-start !important;
            }
            .botoes-acao {
              align-self: stretch !important;
              justify-content: space-between !important;
            }
            .status-badge-recep {
              align-self: flex-end !important;
            }
          }
        `}
      </style>

      {/* Header */}
      <div className="header-recep" style={{ background: '#1a1a1a', borderBottom: '0.5px solid #2e2e2e', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="header-title-recep" style={{ fontFamily: "'Playfair Display', serif", fontSize: '18px', fontWeight: '600', color: '#f0ece0', margin: '0 0 2px' }}>BarberSystem</h1>
          <span className="header-subtitle-recep" style={{ fontSize: '12px', color: '#666' }}>Painel do Recepcionista</span>
        </div>
        <button className="btn-sair-recep" onClick={() => navigate('/')} style={{ background: 'transparent', border: '0.5px solid #2e2e2e', borderRadius: '8px', padding: '6px 14px', fontSize: '12px', color: '#888', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
          Sair
        </button>
      </div>

      <div className="container-recep" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

        {/* Resumo */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Resumo de hoje</p>
          <div className="grid-resumo" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {[{ num: total, label: 'Agendamentos' }, { num: confirmados, label: 'Confirmados' }, { num: pendentes, label: 'Pendentes' }].map(s => (
              <div key={s.label} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px 12px', textAlign: 'center' }}>
                <div style={{ fontSize: '24px', fontWeight: '500', color: '#c9a84c', marginBottom: '4px' }}>{s.num}</div>
                <div style={{ fontSize: '11px', color: '#666' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Por barbeiro */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Atendimentos por barbeiro</p>
          <div className="grid-barbeiros" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
            {barbeiros.map(nome => {
              const { total, servicos } = statsPorBarbeiro(nome)
              return (
                <div key={nome} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px 12px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#c9a84c22', border: '0.5px solid #c9a84c55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: '500', color: '#c9a84c', marginBottom: '8px' }}>
                    {iniciaisBarbeiro[nome]}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: '500', color: '#f0ece0', marginBottom: '6px' }}>{nome}</div>
                  <div style={{ fontSize: '20px', fontWeight: '500', color: '#c9a84c', marginBottom: '4px' }}>{total}</div>
                  <div style={{ fontSize: '11px', color: '#666', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    {Object.entries(servicos).map(([s, n]) => (
                      <span key={s}>{n} {s.toLowerCase()}{n > 1 ? 's' : ''}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '0.5px solid #2e2e2e', margin: 0 }} />

        {/* Lista de agendamentos */}
        <div>
          <p style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem', fontWeight: '500' }}>Agendamentos do dia</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {agendamentos.map(a => (
              <div className="agendamento-recep" key={a.id} style={{ background: '#1a1a1a', border: '0.5px solid #2e2e2e', borderRadius: '10px', padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="hora-agendamento-recep" style={{ fontSize: '15px', fontWeight: '500', color: '#c9a84c', minWidth: '48px' }}>{a.hora}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', color: '#f0ece0', fontWeight: '500', marginBottom: '3px' }}>{a.cliente}</div>
                  <div style={{ fontSize: '12px', color: '#666' }}>{a.servico} · {a.barbeiro}</div>
                </div>
                {a.status === 'pendente' ? (
                  <div className="botoes-acao" style={{ display: 'flex', gap: '6px' }}>
                    <button onClick={() => confirmar(a.id)} style={{ background: 'transparent', border: '0.5px solid #1a4a2a', borderRadius: '6px', padding: '5px 10px', fontSize: '11px', color: '#4caf7d', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Confirmar</button>
                    <button onClick={() => cancelar(a.id)} style={{ background: 'transparent', border: '0.5px solid #4a1818', borderRadius: '6px', padding: '5px 10px', fontSize: '11px', color: '#e05555', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Cancelar</button>
                  </div>
                ) : (
                  <span className="status-badge-recep" style={{ fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: '500', ...badgeStyle(a.status) }}>
                    {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default PainelRecepcionista