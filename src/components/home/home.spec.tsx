import React from "react";
import configureStore from '../../store/store';
import { Provider as ReduxProvider } from 'react-redux';
import { render, waitFor, fireEvent } from "@testing-library/react";
import Home from "./index";
import data from './launchesMockData'
import mockedAxios from 'axios';

const store = configureStore();

jest.mock("axios");
describe("/", () => {
  
    it("should render Home with 50 Launch Records", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : data });
      const { getByText, getByRole } = render(<ReduxProvider store={store}>
        <div>
          <Home/>
        </div>
        </ReduxProvider>);
      await waitFor(() => getByText("Flight Number"));
      const elem = getByRole("grid");
      expect(elem).toMatchSnapshot();
      expect(getByText("1-50 of 50")).toBeInTheDocument()
    });

    it("should render Home with two Launch Records with Mission Name Crew", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : data });
      const { getByText, getByRole, getByPlaceholderText } = render(<ReduxProvider store={store}>
        <div>
          <Home/>
        </div>
        </ReduxProvider>);
        const searchEle = getByPlaceholderText("Search By Mission Name");
        fireEvent.change(searchEle,{ target: { value: 'Crew' }});
      await waitFor(() => getByText("Flight Number"));
      const elem = getByRole("grid");
      expect(elem).toMatchSnapshot();
      expect(getByText("1-2 of 2")).toBeInTheDocument()
    });

    it("should render Home with 50 Launch Records with Mission Name Empty", async () => {
      mockedAxios.get = jest.fn().mockResolvedValue({ data : data });
      const { getByText, getByRole, getByPlaceholderText } = render(<ReduxProvider store={store}>
        <div>
          <Home/>
        </div>
        </ReduxProvider>);
        const searchEle = getByPlaceholderText("Search By Mission Name");
        fireEvent.change(searchEle,{ target: { value: '' }});
      await waitFor(() => getByText("Flight Number"));
      const elem = getByRole("grid");
      expect(elem).toMatchSnapshot();
      expect(getByText("1-50 of 50")).toBeInTheDocument()
    });
  });