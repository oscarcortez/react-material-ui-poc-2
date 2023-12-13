import { useSelector } from "react-redux";
import axios from "axios";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from "react";
// import { Typography } from "@mui/material";
// import * as React from 'react';


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'description',
    headerName: 'Descripcion',
    width: 150,
    editable: true,
  },
  {
    field: 'inputSearch',
    headerName: 'Valores de busqueda',
    width: 150,
    editable: true,
  },
  {
    field: 'isSuscribed',
    headerName: 'Suscrito',
    width: 80,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'url',
    headerName: 'link',
    width: 200,
    editable: true,
  },
  {
    field: 'typeSource',
    headerName: 'Type Source',
    valueGetter: (params) =>
      params.row.typeSource ? params.row.typeSource.descripcion : '',
      width: 200,
  },
];

export const OpenSourceListPage = () => {
  const token = useSelector((state) => state.token.value);
  console.log("token from opensource list: ", token);
  const [openSourceList, setOpenSourceList] = useState([]);

  useEffect(() => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  
  axios.get(`http://localhost:8075/api/v1/opensources/page?nroPage=1&pageSize=50`, { headers })
  .then((response) => {
    setOpenSourceList(response.data);
    console.log(response.data)}
    )
  .catch((err) => console.log(err));
  }, [token]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {/* <Typography variant="pre" component="pre">
      {JSON.stringify(openSourceList.data.dataList, null, 2)}
      </Typography> */}
        
      <DataGrid
        rows={openSourceList.data ? openSourceList.data.dataList : []}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}