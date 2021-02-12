import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { foundPlanetStyles } from './style';

const getRowsAsPlanet = data => {
  return [
    { name: "Host Star Name", value: data.pl_hostname },
    { name: "Planet Letter", value: data.pl_letter },
    { name: "Planet Name", value: data.pl_name },
    { name: "Discovery Method", value: data.pl_discmethod },
    { name: "Controversial Flag", value: data.pl_controvflag },
    { name: "Number of Planets in System", value: data.pl_pnum },
    { name: "Orbital Period (days)", value: data.pl_orbper },
    { name: "Orbit Semi-Major Axis (au)", value: data.pl_orbsmax },
    { name: "Eccentricity", value: data.pl_orbeccen },
    { name: "Inclination (deg)", value: data.pl_orbincl },
    { name: "Planet Mass or M*sin(i) [Jupiter mass]", value: data.pl_bmassj },
    { name: "Planet Mass or M*sin(i) Provenance", value: data.pl_bmassprov },
    { name: "Planet Radius (Jupiter radii)", value: data.pl_radj },
    { name: "Planet Density (g/cm**3)", value: data.pl_dens },
    { name: "TTV Flag", value: data.pl_ttvflag },
    { name: "Kepler Field Flag", value: data.pl_kepflag },
    { name: "K2 Mission Flag", value: data.pl_k2flag },
    { name: "Number of Notes", value: data.pl_nnotes },
    { name: "RA (sexagesimal)", value: data.ra_str },
    { name: "Dec (sexagesimal)", value: data.dec_str },
    { name: "RA (decimal degrees)", value: data.ra },
    { name: "Dec (decimal degrees)", value: data.dec },
    { name: "Gaia Distance [pc]", value: data.gaia_dist },
    { name: "G-band (Gaia) [mag]", value: data.gaia_gmag },
    { name: "Date of Last Update", value: data.rowupdate },
    { name: "Discovery Facility", value: data.pl_facility },
  ];
}

const getRowsAsStar = data => {
  const fp = data[0];

  return [
    { name: "Distance (pc)", value: fp.st_dist },
    { name: "Optical Magnitude [mag]", value: fp.st_optmag },
    { name: "Optical Magnitude Band", value: fp.st_optband },
    { name: "Effective Temperature (K)", value: fp.st_teff },
    { name: "Stellar Mass (solar mass)	", value: fp.st_mass },
    { name: "Stellar Radius (solar radii)", value: fp.st_rad },
    { name: "Planets in System", value: data.map(p => p.pl_name).join(", ") }
  ];
}

const getRows = (data, type) => {
  switch(type) {
    case "planet":
      return getRowsAsPlanet(data);
    case "star":
      return getRowsAsStar(data);
    default:
      return [];
  }
}

const getLabel = type => {
  switch(type) {
    case "planet":
      return "Planeta";
    case "star":
      return "Gwiazda";
    default:
      return "Obiekt";
  }
}

function FoundPlanet(props) {
  const classes = foundPlanetStyles();

  return (
    <Paper className={classes.root}>
      <Typography variant="h5">{getLabel(props.type)}: {props.name}</Typography>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nazwa</TableCell>
              <TableCell align="right">Wartość</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getRows(props.data, props.type).map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default FoundPlanet;