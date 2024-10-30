import { TNote } from "@/api/note";
import SidebarNoteItem from "../SidebarNoteItem";

export default function SidebarNoteList({ notes }: { notes: TNote[] }) {
  if (notes.length == 0) {
    return <div className="notes-empty">{"No notes created yet!"}</div>;
  }

  return (
    <ul className="notes-list">
      {notes.map((note) => {
        return (
          <li key={note.id}>
            <SidebarNoteItem noteId={note.id} note={note} />
          </li>
        );
      })}
    </ul>
  );
}
