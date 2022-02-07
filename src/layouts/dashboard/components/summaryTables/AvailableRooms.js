import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
	{ field: 'id', headerName: 'SLNO', width: 70 },
	{ field: 'bedId', headerName: 'BED ID', width: 70 },
	{ field: 'buildiing', headerName: 'Building', width: 130 },
	{ field: 'floor', headerName: 'Floor', width: 130 },
	{ field: 'roomNumber', headerName: 'Room Number', width: 130 },
	{ field: 'price', type: 'number', headerName: 'Price', width: 80 }
];

const rows = [
	{
		id: 1,
		bedId: '203A',
		buildiing: 'sharan PG',
		floor: 'First Floor',
		roomNumber: '001',
		price: 6000
	},
	{
		id: 2,
		bedId: '307A',
		buildiing: 'sharan PG',
		floor: 'First Floor',
		roomNumber: '001',
		price: 5500
	},
	{
		id: 3,
		bedId: '206B',
		buildiing: 'sharan PG',
		floor: 'Second Floor',
		roomNumber: '002',
		price: 4000
	},
	{
		id: 4,
		bedId: '108A',
		buildiing: 'sharan PG',
		floor: 'Second Floor',
		roomNumber: '003',
		price: 5000
	},
	{
		id: 5,
		bedId: '109C',
		buildiing: 'sharan PG',
		floor: 'Ground Floor',
		roomNumber: '004',
		price: 5000
	}
];

export default function AvailableRooms() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[ 5 ]} />
		</div>
	);
}
