//Create with inspiration from following links:
// https://mui.com/x/react-data-grid/getting-started/
//https://mui.com/material-ui/react-table/

import * as React from 'react';
import './AppendingOrders.css';

//import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

function createOrder(orderNumber: number, customerName: string, phoneNr: number, date: string, time: string, status: string, subTotal: number) {
    return {
        orderNumber: orderNumber,
        customerName: customerName,
        phoneNr: phoneNr,
        date: date,
        time: time,
        status: status,
        subTotal: subTotal
    };
}

/*function createProduct(productNumber: number, productName: string, amount: number, price: price){
    return {
        productNumber: productNumber,
        productName: productName,
        amount: amount,
        price: price,
    };
}*/

/*function FoldOutRow(props: { foldOutRow: ReturnType<typeof createProduct> }) {
    const { foldOutRow } = props;
    const [open, setOpen] = React.useState(false);

    return(
        <TableBody>
            {foldOutRow.map((historyFoldOutRow) => (
                <TableRow key={historyFoldOutRow.productNumber}>
                    <TableCell>{historyFoldOutRow.productNumber}</TableCell>
                    <TableCell align="right">{historyFoldOutRow.productName}</TableCell>
                    <TableCell align="right">{historyFoldOutRow.amount}</TableCell>
                    <TableCell align="right">{historyFoldOutRow.price}</TableCell>
                </TableRow>
            ))}
            <TableRow>
                <TableCell colSpan={1}/>
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell colSpan={1} align="right">{row.subTotal}</TableCell>
            </TableRow>
        </TableBody>

    )
}*/

function Row(props: { row: ReturnType<typeof createOrder> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);


    return (
        <>
            <TableRow
                onClick={() => setOpen(!open)}>
                <TableCell >
                    {row.orderNumber}
                </TableCell>
                <TableCell >{row.customerName}</TableCell>
                <TableCell align="right">{row.phoneNr}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.time}</TableCell>
                <TableCell align="right" >
                    <span style={{padding: "8px", borderRadius: "13px", width: "fit-content"}} className={row.status}>
                        {row.status}
                    </span>
                </TableCell>
                <TableCell align="right">{row.subTotal}</TableCell>
            </TableRow>
            {/*Table that folds out*/}
            <TableRow className="subtable">
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Order
                            </Typography>
                            <Table size="small">
                                <TableHead>
                                    <TableRow className="subtableRow">
                                        <TableCell colSpan={1}/>    
                                        <TableCell>Product nr.</TableCell>
                                        <TableCell>Product Name</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                        <TableRow className="subtableRow">
                                            <TableCell colSpan={1}/>
                                            <TableCell >{"46829"}</TableCell>
                                            <TableCell >{"Salmon sanwich"}</TableCell>
                                            <TableCell align="right">{"3"}</TableCell>
                                            <TableCell align="right">{"6.5"}</TableCell>
                                        </TableRow>
                                    <TableRow className="subtableRow">
                                        <TableCell colSpan={2}/>
                                        <TableCell colSpan={2} style={{fontWeight: 'bold'}}>Subtotal</TableCell>
                                        <TableCell colSpan={1} align="right" style={{fontWeight: 'bold'}}>{"6.5"}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

const rows = [
    createOrder(874650, "Freja Nørgaard Jensen", 53881603, "14/09", "14:50", "Denied", 6.5),
    createOrder(783429, "Hanne Marie Ibsen", 38204932, "14/09", "12:33", "Done",10),
    createOrder(251637, "Bo Carlsen", 78432888, "13/09", "9:28", 'Pending',7),
    createOrder(123994, "Jørgen Rasmussen", 93204002, "13/09", "22:10", "Preparing",11.5),
    createOrder(124455, "Karl Hansen", 27890245, "11/09", "17:42", "Preparing",7),

];

/*const makeStyles=(status)=> {
    if (status === 'Approved'){
        return(
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        )
    }
    else if (status === 'Pending'){
        return(
            background: 'rgb(320 254 159 / 47%)',
            color: 'red',
        )
    }
    else return (
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
    )

}*/

function appendingOrders() {


    return (
        <>
            <div className="newOrdersTable"  >
                <TableContainer className="tableContainer" >
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell>Order number</TableCell>
                                <TableCell>Customer name</TableCell>
                                <TableCell align="right">Phone nr.</TableCell>
                                <TableCell align="right">Date</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <Row key={row.customerName} row={row} />
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </>
    );
}

export default appendingOrders;