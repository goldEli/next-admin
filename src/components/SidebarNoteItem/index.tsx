import dayjs from "dayjs";
import SidebarNoteItemContent from "@/components/SidebarNoteItemContent";
import { Note } from "@/api/note";

export default function SidebarNoteItem({
  noteId,
  note,
}: {
  noteId: string;
  note: Note;
}) {
  const { title, content = "", updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
      </header>
    </SidebarNoteItemContent>
  );
}
