import { useState } from 'react'

const colors = [
  { name: 'cream', label: 'Cream' },
  { name: 'sage', label: 'Sage' },
  { name: 'rose', label: 'Rose' },
  { name: 'lavender', label: 'Lavender' },
]

function NoteForm({ editingNote, onSave, onCancel }) {
  const [title, setTitle] = useState(editingNote?.title ?? '')
  const [description, setDescription] = useState(editingNote?.description ?? '')
  const [color, setColor] = useState(editingNote?.color ?? colors[0].name)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (!title.trim() || !description.trim()) {
      setError('Add a title and a few words before saving.')
      return
    }
    onSave({ title: title.trim(), description: description.trim(), color })
    setTitle('')
    setDescription('')
    setColor(colors[0].name)
    setError('')
  }

  function handleClear() {
    setTitle('')
    setDescription('')
    setColor(colors[0].name)
    setError('')
    onCancel()
  }

  return (
    <form className="note-form" onSubmit={handleSubmit} noValidate>
      <div className="form-heading">
        <span className="form-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M14.5 4.5 19.5 9.5M4 20l4.3-.9L19 8.4a2.1 2.1 0 0 0-3-3L5.3 16.1 4 20Z" /><path d="M13 6 18 11" /></svg>
        </span>
        <div>
          <h2>{editingNote ? 'Edit your note' : 'New note'}</h2>
          <p>{editingNote ? 'Make it just right' : 'Get it out of your head'}</p>
        </div>
      </div>

      <label className="form-label" htmlFor="note-title">TITLE</label>
      <input
        id="note-title"
        className="form-input"
        type="text"
        placeholder="Give your note a name..."
        value={title}
        onChange={(event) => {
          setTitle(event.target.value)
          setError('')
        }}
        maxLength={100}
        required
      />

      <div className="description-label-row">
        <label className="form-label" htmlFor="note-description">YOUR THOUGHT</label>
        <span className="character-count">{description.length} / 500</span>
      </div>
      <textarea
        id="note-description"
        className="form-input description-input"
        placeholder="What's on your mind?"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value)
          setError('')
        }}
        maxLength={500}
        required
      />

      <div className="color-picker">
        <span className="form-label">NOTE COLOR</span>
        <div className="color-options" role="group" aria-label="Note color">
          {colors.map((option) => (
            <button
              key={option.name}
              type="button"
              className={`color-swatch swatch-${option.name}${color === option.name ? ' selected' : ''}`}
              onClick={() => setColor(option.name)}
              aria-label={option.label}
              aria-pressed={color === option.name}
            />
          ))}
        </div>
      </div>

      {error && <p className="form-error" role="alert">{error}</p>}
      <div className="form-actions">
        <button className="primary-button" type="submit">
          <span>{editingNote ? 'Update note' : 'Create note'}</span>
          <span className="button-arrow" aria-hidden="true">↗</span>
        </button>
        <button className="clear-form-button" type="button" onClick={handleClear}>
          {editingNote ? 'Cancel' : 'Clear form'}
        </button>
      </div>
    </form>
  )
}

export default NoteForm
