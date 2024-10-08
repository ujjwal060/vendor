import React, { useState, useEffect } from 'react';
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell } from '@coreui/react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye} from '@fortawesome/free-solid-svg-icons';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Image = styled('img')({
  width: '100px',
  height: 'auto',
  marginRight: '10px'
});

const InfoRow = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px solid #ddd'
});

const CustomTableHead = styled(TableHead)({
  backgroundColor: '#f5f5f5',
});

const CustomTableHeaderCell = styled(TableCell)({
  fontWeight: 'bold',
  color: '#333',
});

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const vendorId = localStorage.getItem('vendorID');
    const response = await axios.get(`https://www.taxidermyvendor.hunt30.com/api/getOrder/${vendorId}`);
    setOrders(response.data.data);
  };

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };

  return (
    <div className="container mt-4">
      <div className='d-flex justify-content-between'>
        <h2>Ordered Listings</h2>
      </div>
      <CTable className="table mt-3">
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>S.No</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Booking ID</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>User Name</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>confirmation Id</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Species Count</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Extensions Count</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Order Date</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Payment Status</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Total Amount</CTableHeaderCell>
            <CTableHeaderCell scope="col" style={{ textAlign: "center" }}>Actions</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {orders
          .filter(order => order.status === 'delivered')
          .map((order, index) => (
            <CTableRow key={order.orderId}>
              <CTableDataCell style={{ textAlign: "center" }}>{index + 1}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.bookingId}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.userName || 'N/A'}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.confirmationId || 'N/A'}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.species.length}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.extensions.length}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{new Date(order.orderDate).toLocaleDateString()}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>{order.paymentStatus}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>${order.totalAmount}</CTableDataCell>
              <CTableDataCell style={{ textAlign: "center" }}>
                 {order.status === 'delivered' && (
                    <span style={{ color: "#28a745", fontSize: '16px', fontWeight: 'bold' }}>
                      Trophy completed
                    </span>
                  )}
                <Tooltip title="View Order">
                  <button
                    style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', marginLeft: '10px' }}
                    onClick={() => handleViewOrder(order)}
                  >
                    <FontAwesomeIcon icon={faEye} style={{ color: "#007bff", fontSize: '20px' }} />
                  </button>
                </Tooltip>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>Order Details</DialogTitle>
        <DialogContent>
          {selectedOrder && (
            <div>
              <Typography variant="h6" gutterBottom>User Details</Typography>
              <div>
                <InfoRow>
                  <Typography variant="body1"><strong>User Name:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.userName || 'N/A'}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>User Email:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.userEmail || 'N/A'}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Shop Name:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.shopName || 'N/A'}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Shop Address:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.shopAddress || 'N/A'}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>delivery Address:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.deliveryAddress || 'N/A'}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Order Date:</strong></Typography>
                  <Typography variant="body1">{new Date(selectedOrder.orderDate).toLocaleDateString()}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Status:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.status}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Total Amount:</strong></Typography>
                  <Typography variant="body1">${selectedOrder.totalAmount}</Typography>
                </InfoRow>
                <InfoRow>
                  <Typography variant="body1"><strong>Booking ID:</strong></Typography>
                  <Typography variant="body1">{selectedOrder.bookingId}</Typography>
                </InfoRow>
              </div>

              <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>Species Details</Typography>
              <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
                <Table>
                  <CustomTableHead>
                    <TableRow>
                      <CustomTableHeaderCell align="center">Name</CustomTableHeaderCell>
                      <CustomTableHeaderCell align="center">Image</CustomTableHeaderCell>
                      <CustomTableHeaderCell align="center">Price</CustomTableHeaderCell>
                    </TableRow>
                  </CustomTableHead>
                  <TableBody>
                    {selectedOrder.species.map((species, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{species.speciesName}</TableCell>
                        <TableCell align="center">
                          <Image src={`https://www.taxidermyvendor.hunt30.com/${species.image}`} alt={`Species ${index + 1}`} />
                        </TableCell>
                        <TableCell align="center">${species.speciesPrice}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>

              <Typography variant="h6" gutterBottom>Extensions Details</Typography>
              <TableContainer component={Paper}>
                <Table>
                  <CustomTableHead>
                    <TableRow>
                      <CustomTableHeaderCell align="center">Name</CustomTableHeaderCell>
                      <CustomTableHeaderCell align="center">Image</CustomTableHeaderCell>
                      <CustomTableHeaderCell align="center">Price</CustomTableHeaderCell>
                    </TableRow>
                  </CustomTableHead>
                  <TableBody>
                    {selectedOrder.extensions.map((extension, index) => (
                      <TableRow key={index}>
                        <TableCell align="center">{extension.extensionName}</TableCell>
                        <TableCell align="center">
                          <Image src={`https://www.taxidermyvendor.hunt30.com/${extension.image}`} alt={`Extension ${index + 1}`} />
                        </TableCell>
                        <TableCell align="center">${extension.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OrderDetails;
