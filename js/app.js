// Basic JavaScript starter
document.addEventListener('DOMContentLoaded', () => {
  console.log('App initialized')
  const cta = document.getElementById('cta')
  if (cta) {
    cta.addEventListener('click', () => {
      showMessage('Hello — this is a demo notification from app.js')
    })
  }
})

function showMessage(message) {
  if (typeof window === 'undefined') return
  // Small non-blocking UI: toast
  const toast = document.createElement('div')
  toast.textContent = message
  Object.assign(toast.style, {
    position: 'fixed',
    right: '1rem',
    bottom: '1rem',
    background: '#111',
    color: '#fff',
    padding: '0.6rem 0.8rem',
    borderRadius: '6px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.12)'
  })
  document.body.appendChild(toast)
  setTimeout(() => toast.remove(), 3000)
}

export { showMessage }
