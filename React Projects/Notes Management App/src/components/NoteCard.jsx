function NoteCard({ note, onEdit, onDelete }) {
  const createdDate = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(note.createdAt))

  return (
    <article className={`note-card note-${note.color || 'cream'}`}>
      <div className="note-card-topline">
        <span className="note-date"><span className="date-dot" /> {createdDate}</span>
        <span className="note-decoration" aria-hidden="true">✳</span>
      </div>
      <h3>{note.title}</h3>
      <p className="note-description">{note.description}</p>
      <div className="note-card-actions">
        <button type="button" className="note-action edit-action" onClick={() => onEdit(note)}>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="m12.9 3.5 3.6 3.6M4 16l3.4-.7L16 6.7a1.8 1.8 0 0 0-2.6-2.6l-8.6 8.6L4 16Z" /></svg>
          Edit
        </button>
        <button type="button" className="note-action delete-action" onClick={() => onDelete(note.id)}>
          <svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4.5 6h11M8 6V4.5h4V6m2.5 0-.7 10H6.2L5.5 6m3 2.5v5m3-5v5" /></svg>
          Delete
        </button>
      </div>
    </article>
  )
}

export default NoteCard
