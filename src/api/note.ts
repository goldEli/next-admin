const data: TNote[] = [
  {
    id: "1702459181837",
      title: "sunt aut",
      content: "quia et suscipit suscipit recusandae",
      updateTime: "2023-12-13T09:19:48.837Z",
    },
    {
      id: "1702459182837",
      title: "qui est",
      content: "est rerum tempore vitae sequi sint",
      updateTime: "2023-12-13T09:19:48.837Z",
    },
    {
      id: "1702459188837",
      title: "ea molestias",
      content: "et iusto sed quo iure",
      updateTime: "2023-12-13T09:19:48.837Z",
  },
];

export async function getAllNotes() {
  return data;
}

export async function getNote(noteId: string) {
  return data.find((note) => note.id === noteId);
}

export type TNote = {
  id: string;
  title: string;
  content: string;
  updateTime: string;
};

