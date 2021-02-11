import React from "react";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";

import Planet from "../Planet/Planet";
import { exoplanetsChartStyle } from "./style";

function drawPlanet(val, meta) {
  return (
    <Link to={`/search/${val}`} className="aSuper">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Planet size={20} type="planet" />
        <div style={{ paddingLeft: 10 }}>{val}</div>
      </div>
    </Link>
  );
}

function drawStar(val, meta) {
  const temperature = meta.rowData[9];

  return (
    <Link to={`/search/${val}`} className="aSuper">
      <div style={{ display: "flex", alignItems: "center" }}>
        <Planet
          size={20}
          type="star"
          starOptions={{
            temperature: temperature,
          }}
        />
        <div style={{ paddingLeft: 10 }}>{val}</div>
      </div>
    </Link>
  );
}

const columns = [
  {
    name: "Planeta",
    options: {
      filter: false,
      sort: true,
      customBodyRender: drawPlanet,
    },
  },
  {
    name: "Masa [♃]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Średnica [♃]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Gęstość [g/cm^3]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Okres orbitalny [dni🜨]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Apoapsis [au]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Gwiazda",
    options: {
      filter: false,
      sort: true,
      customBodyRender: drawStar,
    },
  },
  {
    name: "Masa gw. [☉]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Średnica gw. [☉]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  {
    name: "Temperatura ef. gw. [K]",
    options: {
      filter: false,
      sort: true,
      customBodyRender: (val) => val || "n/d",
    },
  },
  "Metoda odkrycia",
];

const options = {
  print: false,
  rowsPerPage: 15,
  setTableProps: () => ({
    size: "small",
  }),
  textLabels: {
    body: {
      noMatch: "Przepraszamy, nie znaleziono pasujących rekordów",
      toolTip: "Sortuj",
      columnHeaderTooltip: (column) => `Sortuj według ${column.label}`,
    },
    pagination: {
      next: "Następna strona",
      previous: "Poprzednia strona",
      rowsPerPage: "Wiersze na stronę:",
      displayRows: "z",
    },
    toolbar: {
      search: "Szukaj",
      downloadCsv: "Pobierz CSV",
      print: "Drukuj",
      viewColumns: "Pokaż kolumny",
      filterTable: "Filtruj tabelę",
    },
    filter: {
      all: "Wszystkie",
      title: "FILTRY",
      reset: "RESET",
    },
    viewColumns: {
      title: "Pokaż kolumny",
      titleAria: "Pokaż/Ukryj kolumny tabeli",
    },
    selectedRows: {
      text: "wiersz(e) zaznaczone",
      delete: "Usuń",
      deleteAria: "Usuń zaznaczone wiersze",
    },
  },
};

function ExoplanetsChart({ exoplanets }) {
  const classes = exoplanetsChartStyle();

  const getNecessaryData = () => {
    return exoplanets.map((e) => [
      e.pl_name, // nazwa
      e.pl_bmassj, // masa
      e.pl_radj, // średnica
      e.pl_dens, // gęstość
      e.pl_orbper, // okres orbitalny
      e.pl_orbsmax, // apoapsis
      e.pl_hostname, // gwiazda
      e.st_mass,
      e.st_rad,
      e.st_teff,
      e.pl_discmethod, // metoda odkrycia
    ]);
  };

  return (
    <MUIDataTable
      className={classes.root}
      title={"Tabela Egzoplanet"}
      columns={columns}
      data={getNecessaryData()}
      options={options}
    />
  );
}

export default ExoplanetsChart;
