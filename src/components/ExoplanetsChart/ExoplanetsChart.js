import React from 'react';
import MUIDataTable from "mui-datatables";

import { exoplanetsChartStyle } from './style';

/*  TODO:
    - Dodać kolumny
    - Dostosować opcje dla kategorii (usunąć filtrowanie po unikalnych wartościach kolumn, np. nazwach gwiazd)
*/

const columns = [
    "Gwiazda",
    "Litera",
    "Metoda Odkrycia",
    "Okres Orbitalny"
];

const options = {
    print: false,
    setTableProps: () => ({
        size: 'small'
    })
}

function ExoplanetsChart({ exoplanets }) {
    const classes = exoplanetsChartStyle();

    const getNecessaryData = () => {
        return exoplanets.map(e => [
            e.pl_hostname,
            e.pl_letter,
            e.pl_discmethod,
            e.pl_orbper
        ]);
    }

    React.useEffect(() => {
        console.log(getNecessaryData());
    }, [exoplanets])

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