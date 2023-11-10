const tableCustomStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "700",
        backgroundColor: "#f8f9fa",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
        fontWeight: 400,
        color: "#172b4d",
        div: {
          whiteSpace: "unset !important",
        },
      },
    },
    rows: {
      style: {
        "&:nth-child(even)": {
          backgroundColor: "#fcfcfc",
        },
      },
    },
    header: {
      style: {
        backgroundColor: "#fcfcfc",
      },
    },
  };
  export default tableCustomStyles;
  