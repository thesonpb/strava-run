import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes.jsx";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      retry: 0,
      onError: () => {},
    },
  },
});

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1c1d21",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
