import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
const tableData = [
  {
    id: 1,
    first_name: "Ericha",
    last_name: "Pearch",
    email: "epearch0@yellowpages.com",
    gender: "Agender",
    ip_address: "110.72.254.164",
  },
  {
    id: 2,
    first_name: "Deane",
    last_name: "Betje",
    email: "dbetje1@about.com",
    gender: "Male",
    ip_address: "85.19.213.113",
  },
  {
    id: 3,
    first_name: "Booth",
    last_name: "Giddy",
    email: "bgiddy2@house.gov",
    gender: "Male",
    ip_address: "250.150.119.27",
  },
  {
    id: 4,
    first_name: "Hermie",
    last_name: "Bagnold",
    email: "hbagnold3@cdc.gov",
    gender: "Male",
    ip_address: "115.155.47.85",
  },
  {
    id: 5,
    first_name: "Vin",
    last_name: "Bartoletti",
    email: "vbartoletti4@about.me",
    gender: "Female",
    ip_address: "19.54.8.80",
  },
  {
    id: 6,
    first_name: "Carlita",
    last_name: "Kille",
    email: "ckille5@utexas.edu",
    gender: "Female",
    ip_address: "70.62.99.166",
  },
  {
    id: 7,
    first_name: "Fremont",
    last_name: "Sandcraft",
    email: "fsandcraft6@studiopress.com",
    gender: "Male",
    ip_address: "185.142.104.92",
  },
  {
    id: 8,
    first_name: "Berny",
    last_name: "Sute",
    email: "bsute7@etsy.com",
    gender: "Male",
    ip_address: "189.191.172.250",
  },
  {
    id: 9,
    first_name: "Almira",
    last_name: "Boothman",
    email: "aboothman8@google.es",
    gender: "Female",
    ip_address: "145.149.210.145",
  },
  {
    id: 10,
    first_name: "Welsh",
    last_name: "Chattell",
    email: "wchattell9@infoseek.co.jp",
    gender: "Male",
    ip_address: "199.174.91.72",
  },
];
export const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
      <Table aria-label="sample table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
