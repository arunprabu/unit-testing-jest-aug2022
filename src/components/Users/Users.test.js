import { render, screen, waitFor } from "@testing-library/react";

import { fetchApi } from "../../utils/fetchAPI";
import Users from "./Users";

jest.mock('../../utils/fetchAPI'); // Mocks a module with an auto-mocked version when it is being required.

describe('UsersComponent', () => {

  // Let's have the mock data to serve upon the network call
  // Called as stub
  const mockUserList = [
    {
      id: 1,
      name: 'Steve Smith',
      phone: 2332323
    },
    {
      id: 2,
      name: 'Virat Kohli',
      phone: 3465656
    }
  ];
  
  // Testing the REST API call with Mocks
  // as the n/w call with get the data after sometime, it should have async await
  it('renders comp properly with API data [MOCKING]', async() => { 

    // 1. Have mock data
    // 2. Intercept the network call
    // 3. resolve with the above mock data (successful api call)
    // TODO: // learn about mocking error case (reject)

    fetchApi.mockResolvedValue(mockUserList);

    render(<Users />);
    await waitFor( () => {
      expect(screen.getByText('Steve Smith')).toBeInTheDocument();
    });
  });

  it('renders error in comp properly with API data [MOCKING]', async() => { 
    fetchApi.mockRejectedValue(new Error('error'));
    render(<Users />);
    await waitFor( () => {
      expect(screen.getByText('Unable to load Users. Try again')).toBeInTheDocument();
    });
  });
});