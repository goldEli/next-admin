import { Note } from "@/api/note";
import dayjs from "dayjs";

export default function SidebarNoteList({ notes }: { notes: Note[] }) {

  
    if (notes.length == 0) {
      return <div className="notes-empty">
        {'No notes created yet!'}
      </div>
    }
  
    return <ul className="notes-list">
      {notes.map((note) => {
      const { title, updateTime } = note;
      return <li key={note.id}>
        <header className="sidebar-note-header">
          <strong>{title}</strong>
          <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
        </header>
      </li>
    })}
    </ul>
  }