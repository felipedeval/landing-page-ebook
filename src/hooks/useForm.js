import { useState } from 'react'

const EMAIL_RE = /\S+@\S+\.\S+/
const BREVO_API_KEY = import.meta.env.VITE_BREVO_API_KEY
const BREVO_LIST_ID = Number(import.meta.env.VITE_BREVO_LIST_ID)

async function subscribeToBrevo({ email, name }) {
  const body = {
    email,
    listIds: [BREVO_LIST_ID],
    updateEnabled: true, // atualiza o contato se já existir
  }

  if (name) {
    body.attributes = { FIRSTNAME: name.trim() }
  }

  const res = await fetch('https://api.brevo.com/v3/contacts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': BREVO_API_KEY,
    },
    body: JSON.stringify(body),
  })

  // 201 = criado, 204 = já existia e foi atualizado — ambos são sucesso
  if (!res.ok && res.status !== 204) {
    const err = await res.json().catch(() => ({}))
    throw new Error(err.message || `Brevo error ${res.status}`)
  }
}

export function useForm(fields) {
  const initial = Object.fromEntries(fields.map(f => [f, '']))
  const [values, setValues] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  function onChange(e) {
    setValues(v => ({ ...v, [e.target.name]: e.target.value }))
  }

  function validate() {
    if (fields.includes('name') && !values.name.trim()) return false
    if (fields.includes('email') && !EMAIL_RE.test(values.email)) return false
    return true
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!validate()) {
      e.target.querySelector(':invalid')?.focus()
      return
    }
    setLoading(true)
    try {
      await subscribeToBrevo(values)
      setSubmitted(true)
    } catch (err) {
      setError('Algo deu errado. Tente novamente.')
      console.error('[Brevo]', err.message)
    } finally {
      setLoading(false)
    }
  }

  return { values, onChange, submitted, loading, error, handleSubmit }
}
