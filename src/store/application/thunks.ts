import { AppThunk } from '../store';
import axios from 'axios';
import * as actions from './actions';
import * as types from './types';

export const thunkGetSpaceXLaunches = (name: string) : AppThunk => {
  return async (dispatch, getState) => {
    try { 
      const res = await axios.get('https://api.spacexdata.com/v3/launches');
      const launches : types.Launches = res.data;
      let updatedLaunches = launches.sort((a,b) => b.launch_date_unix - a.launch_date_unix).map((launch : types.Launch) => ({
        ...launch,
        key: launch.mission_name, 
        id: launch.flight_number,
        mission_name:launch.mission_name,
        launch_success:launch.launch_success }));
        if(name){
          updatedLaunches = updatedLaunches.filter(launch => launch.mission_name.includes(name));
        }
        updatedLaunches = updatedLaunches.slice(0,50);
      dispatch(actions.setLaunches(updatedLaunches));
    } catch (e){
      // To Do Handle Exceptions
      console.error("Error Getting SpaceX Launches information");
    }
  };

}