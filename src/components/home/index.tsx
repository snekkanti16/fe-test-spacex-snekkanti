import React, {useEffect} from 'react';
import {useSelector, useDispatch } from "react-redux";
import {thunkGetSpaceXLaunches} from '../../store/application/thunks';
import { RootState } from '../../store/index';
import * as types from '../../store/application/types';
import { DataGrid, GridCellParams } from '@mui/x-data-grid';
import DetailsModal from '../detailsmodal';
import './index.css';

const Home: React.FC = () => {
  
  const dispatch = useDispatch();
  const getSpaceXLaunches = (name: string) => dispatch(thunkGetSpaceXLaunches(name));
  let launchesState : types.Launches = useSelector((state: RootState) => state.application.launches);
  useEffect(() => {
    getSpaceXLaunches('');
  },[]);

  const searchByMissionName = (name: string) => getSpaceXLaunches(name);

  const columns = [
    { field: 'id', headerName: 'Flight Number', width: 250 },
    { field: 'mission_name', headerName: 'Mission Name', width: 250 },
    {field:'launch_date_utc',headerName:'Launch Date', width:250},
    { field: 'launch_success', headerName: 'Launch Success', width: 250 },
    { field: 'print', headerName: 'Rocket Details', width: 250, sortable: false, disableClickEventBubbling: true,
    renderCell: (cellValues : GridCellParams) => {
      return (
        <DetailsModal {...cellValues.row}/>
      );
    }
  }
  ];

  return (
    <>
    <h3> SpaceX Rocket Launches </h3>
    <input  type ='search' placeholder='Search By Mission Name' className='searchbar' onChange={(event) => searchByMissionName(event.target.value)}/>
    <div className='table'>
        {launchesState && <DataGrid
        rows={launchesState}
        columns={columns}
        rowsPerPageOptions={[10,25,50]}
      />}
    </div>
    </>
  );
};
export default Home;
