import Home from "./Home";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";
import { sampleSalesData } from "../../utilities/utils.test";

const mockData = { data: undefined, isError: false, isLoading: true };

jest.mock("../../hooks/fetchElectricitySales.ts", () => ({
  useFetchElectricitySales: () => {
    return mockData;
  },
}));
jest.mock("react-chartjs-2");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("home component", () => {
  it("show spinner when loading for data", () => {
    render(<Home />, { wrapper });
    const spinnerElement = screen.getAllByTestId("loading");
    expect(spinnerElement).toBeTruthy();
  });

  it("should display error returned by API", () => {
    mockData.data = { error: { code: "Code", message: "Error Message" } };
    mockData.isLoading = false;
    render(<Home />, { wrapper });
    const apiErrorElement = screen.getAllByTestId("apierror");
    expect(apiErrorElement).toBeTruthy();
  });

  it("show error when unable to contact API", async () => {
    mockData.data = undefined;
    mockData.isError = true;
    mockData.isLoading = false;
    render(<Home />, { wrapper });
    await waitFor(() => {
      const spinnerElement = screen.getAllByTestId("error");
      expect(spinnerElement).toBeTruthy();
    });
  });

  it("show data components when we have data from API", async () => {
    mockData.isError = false;
    mockData.isLoading = false;
    mockData.data = {
      response: {
        data: sampleSalesData,
      },
    };
    render(<Home />, { wrapper });
    await waitFor(() => {
      const spinnerElement = screen.getAllByTestId("home");
      expect(spinnerElement).toBeTruthy();
    });
  });
});
