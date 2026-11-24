import { useEffect, useMemo, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import NoteForm from './components/NoteForm.jsx'
import NotesList from './components/NotesList.jsx'
import './App.css'

const STORAGE_KEY = 'notes-app-notes'

function readSavedNotes() {
  try {
    const savedNotes = window.localStorage.getItem(STORAGE_KEY)
    if (!savedNotes) return []

    const parsedNotes = JSON.parse(savedNotes)
    return Array.isArray(parsedNotes) ? parsedNotes : []
  } catch (error) {
    console.error('Unable to load saved notes from local storage.', error)
    return []
  }
}

function App() {
  const [notes, setNotes] = useState(readSavedNotes)
  const [editingNote, setEditingNote] = useState(null)
  const [editingVersion, setEditingVersion] = useState(0)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
    } catch (error) {
      console.error('Unable to save notes to local storage.', error)
    }
  }, [notes])

  const visibleNotes = useMemo(() => {
    const keyword = searchText.trim().toLocaleLowerCase()
    return [...notes]
      .sort((first, second) => new Date(second.createdAt) - new Date(first.createdAt))
      .filter((note) => note.title.toLocaleLowerCase().includes(keyword))
  }, [notes, searchText])

  function saveNote(noteData) {
    if (editingNote) {
      setNotes((currentNotes) =>
        currentNotes.map((note) =>
          note.id === editingNote.id
            ? { ...note, ...noteData, updatedAt: new Date().toISOString() }
            : note,
        ),
      )
      setEditingNote(null)
      return
    }

    const now = new Date().toISOString()
    const id = window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random()}`
    setNotes((currentNotes) => [
      { ...noteData, id, createdAt: now, updatedAt: now },
      ...currentNotes,
    ])
  }

  function editNote(note) {
    setEditingNote(note)
    setEditingVersion((version) => version + 1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function deleteNote(noteId) {
    const note = notes.find((item) => item.id === noteId)
    if (!note || !window.confirm(`Delete "${note.title}"? This can't be undone.`)) return

    setNotes((currentNotes) => currentNotes.filter((item) => item.id !== noteId))
    if (editingNote?.id === noteId) setEditingNote(null)
  }

  function deleteAllNotes() {
    if (!window.confirm(`Delete all ${notes.length} notes? This can't be undone.`)) return
    setNotes([])
    setEditingNote(null)
  }

  function clearForm() {
    setEditingNote(null)
  }

  return (
    <div className="app-shell">
      <Navbar />
      <main className="workspace">
        <section className="page-intro">
          <div className="intro-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> YOUR PERSONAL SPACE</p>
            <h1>A place for every<br /><span>little thought.</span></h1>
            <p className="intro-description">
              Keep your ideas close. Capture a thought, make a plan, or save something worth remembering.
            </p>
          </div>
          <div className="note-count" aria-live="polite">
            <span className="count-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M7 3.75h7.5L19 8.25v11A1.75 1.75 0 0 1 17.25 21h-10A1.75 1.75 0 0 1 5.5 19.25v-13A2.5 2.5 0 0 1 8 3.75Z" /><path d="M14 4v4.5h4.5M9 12h6M9 15.5h6" /></svg>
            </span>
            <span className="count-number">{notes.length}</span>
            <span className="count-label">{notes.length === 1 ? 'note saved' : 'notes saved'}</span>
          </div>
        </section>

        <div className="content-grid">
          <aside className="composer-column">
            <NoteForm
              key={editingNote ? `${editingNote.id}-${editingVersion}` : 'new'}
              editingNote={editingNote}
              onSave={saveNote}
              onCancel={clearForm}
            />
            <div className="gentle-reminder">
              <span className="reminder-sparkle" aria-hidden="true">✳</span>
              <p><strong>A small reminder</strong><br />You don&apos;t have to remember it all. That&apos;s what this space is for.</p>
            </div>
          </aside>

          <section className="notes-section" aria-label="Your notes">
            <div className="notes-toolbar">
              <div>
                <h2>Your notes <span className="section-count">{notes.length}</span></h2>
                <p className="notes-subtitle">A collection of your thoughts</p>
              </div>
              {notes.length > 0 && (
                <button className="text-button delete-all-button" onClick={deleteAllNotes} type="button">
                  Delete all
                </button>
              )}
            </div>
            <label className="search-field">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.2 4.2" /></svg>
              <input
                type="search"
                placeholder="Search by title..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                aria-label="Search notes by title"
              />
              {searchText && (
                <button type="button" className="clear-search" onClick={() => setSearchText('')} aria-label="Clear search">
                  &times;
                </button>
              )}
            </label>
            <NotesList
              notes={visibleNotes}
              totalNotes={notes.length}
              searchText={searchText}
              onEdit={editNote}
              onDelete={deleteNote}
            />
          </section>
        </div>
        <footer className="app-footer">
          <span>Made for the thoughts that matter.</span>
          <span className="footer-flower" aria-hidden="true">✳</span>
        </footer>
      </main>
    </div>
  )
}

export default App
