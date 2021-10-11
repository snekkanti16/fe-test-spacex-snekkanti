
export const GET_SPACE_X_LAUNCHES = 'GET_SPACE_X_LAUNCHES';

export type ApplicationState = {
  launches : Launches;
};

export type ApplicationsActionTypes =
  |GetSpaceXLaunches;

  export type Rocket = {
    rocket_id: string,
    rocket_name: string,
    rocket_type: string,
  }

  export type Links = {
    mission_patch_small: string
  }

  export type Launch = {
    id:Number,
    key:string,
    flight_number: Number,
    mission_name: string,
    mission_id: [],
    upcoming: boolean,
    launch_year: string,
    launch_date_unix: number,
    launch_date_utc: string,
    launch_date_local: string,
    is_tentative: boolean,
    tentative_max_precision: string,
    tbd: boolean,
    launch_window: number,
    rocket: Rocket,
    launch_success:boolean,
    details:string,
    links: Links
  };

  export type Launches = Launch[];

  type GetSpaceXLaunches = {
    type: typeof GET_SPACE_X_LAUNCHES;
    launches: Launches;
  };