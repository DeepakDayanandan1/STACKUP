import NoteCard from './NoteCard.jsx'

function NotesList({ notes, totalNotes, searchText, onEdit, onDelete }) {
  if (notes.length === 0) {
    const searched = searchText.trim().length > 0
    return (
      <div className="empty-state">
        <span className="empty-illustration" aria-hidden="true">
          <svg viewBox="0 0 92 92"><path d="M24 13h30l16 16v43a7 7 0 0 1-7 7H24a7 7 0 0 1-7-7V20a7 7 0 0 1 7-7Z" /><path d="M54 14v16h15M31 43h26M31 53h26M31 63h17" /><circle cx="68" cy="68" r="13" /><path d="m64 68 3 3 6-7" /></svg>
        </span>
        <h3>{searched ? 'No notes found' : totalNotes === 0 ? 'A fresh page' : 'Nothing here yet'}</h3>
        <p>
          {searched
            ? `No titles match “${searchText.trim()}”. Try another search.`
            : totalNotes === 0
              ? 'Your next good idea can start right here.'
              : 'Your search didn’t find a match. Try a different keyword.'}
        </p>
      </div>
    )
  }

  return (
    <div className="notes-grid">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default NotesList
