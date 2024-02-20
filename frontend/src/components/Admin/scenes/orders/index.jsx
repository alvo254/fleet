import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../Glob/theme";
import { mockDataContacts } from "../../Data/mockData";
import Header from "../../Comp/Header";
import { useTheme } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import Receipts from "../../../Receipts/Receipts";

const Orders = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [orders, setOrders] = useState([])


  useEffect(()=>{
    // axios("/orders")
    // .then((resv)=>{setOrders(resv.data)})
    fetch("https://quickfleet-api.herokuapp.com/orders")
    .then((res)=> res.json())
    .then(data => setOrders(data))
  },[])
  console.log(orders)

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    // { field: "registrarId", headerName: "SenderName" },
    {
      field: "senderName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "receiverName",
      headerName: "ReceiverName",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "natureOfGoods",
      headerName: "Nature of Goods",
      flex: 1,
    },
    {
      field: "pickup",
      headerName: "Pickup ",
      flex: 1,
    },
    {
      field: "destination",
      headerName: "Destination",
      flex: 1,
    },

    {
      field: "Route",
      headerName: "Dispatch",
      type: "actions",
      width: 130,
      align: "center",

      renderCell: (params) => {
        console.log(params);

        return (
          <>
            <Link
              to='/receipts'
              onClick={ () => <Receipts /> }
              
            >
              <button className="viewBtn">Dispatch</button>
            </Link>
          </>
        );
      },
    },


  ];

  return (
    <Box m="20px">
      <Header
        title="Orders"
        subtitle="List of orders for Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.blueAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[200],
            borderBottom: "none",
            color: "orange"

          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],

          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[200],

            
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
            
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
            
          },
        }}
      >
        <DataGrid
          rows={orders}

          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Orders;
