import { useState } from 'react'

const EMAIL_RE = /\S+@\S+\.\S+/

export function useForm(fields) {
  const initial = Object.fromEntries(fields.map(f => [f, '']))
  const [values, setValues] = useState(initial)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

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
    if (!validate()) {
      const invalid = e.target.querySelector(':invalid')
      invalid?.focus()
      return
    }
    setLoading(true)
    // TODO: replace with real endpoint (e.g. MailerLite /api/subscribe)
    await new Promise(r => setTimeout(r, 700))
    setLoading(false)
    setSubmitted(true)
  }

  return { values, onChange, submitted, loading, handleSubmit }
}
