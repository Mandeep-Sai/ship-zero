import Home from "./Home";
import { render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNode } from "react";

// jest.mock("../../services/electricitySales.ts", () => ({
//   fetchData: jest.fn(),
// }));

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
    jest.mock("react-query", () => ({
      useQuery: jest
        .fn()
        .mockReturnValue({ data: undefined, isLoading: true, error: {} }),
    }));
    render(<Home />, { wrapper });
    const spinnerElement = screen.getAllByTestId("loading");
    expect(spinnerElement).toBeTruthy();
  });

  // it("show error when unable to contact API", async () => {
  //   jest.mock("react-query", () => ({
  //     useQuery: jest.fn().mockReturnValue({
  //       data: undefined,
  //       isLoading: false,
  //       isError: true,
  //       error: Error,
  //     }),
  //   }));
  //   render(<Home />, { wrapper });
  //   await waitFor(() => {
  //     const spinnerElement = screen.getAllByTestId("error");
  //     expect(spinnerElement).toBeTruthy();
  //   });
  // });
  // it("should display error returned by API", () => {
  //   jest.mock("react-query", () => ({
  //     useQuery: jest.fn().mockReturnValue({
  //       data: { error: { code: "Code", message: "Error Message" } },
  //       isLoading: false,
  //       isError: false,
  //     }),
  //   }));
  //   const apiErrorElement = screen.getAllByTestId("apierror");
  //   expect(apiErrorElement).toBeTruthy();
  // });
});
