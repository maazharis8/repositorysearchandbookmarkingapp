import { TbBookmarkPlus, TbBookmarkOff } from "react-icons/tb";
const columns = (handleBookMark,bookmarks) => [
  {
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    minWidth: "120px",
  },
  {
    name: "Owner",
    selector: (row) => row.owner.login,
    sortable: true,
    minWidth: "150px",
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    minWidth: "180px",
  },
  {
    name: "Stars",
    selector: (row) => row.stargazers_count,
    sortable: true,
    minWidth: "120px",
  },
  {
    name: "Actions",
    cell: (row) => (
      <div role="button" onClick={() => handleBookMark(row)}>
         {bookmarks?.some((bookmark) => bookmark.id === row.id) ? <TbBookmarkOff /> : <TbBookmarkPlus />}
      </div>
    ),
  },
];
const mobileCategoriesColumns = [
  {
    name: "Source ID",
    selector: (row) => row.source_category_id,
    sortable: true,
    minWidth: "170px",
  },
  {
    name: "Type",
    selector: (row) => row.category_type_cd,
    sortable: true,
    minWidth: "190px",
  },
];

export { columns, mobileCategoriesColumns };
