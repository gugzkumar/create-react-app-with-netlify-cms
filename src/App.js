import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import {
  createBrowserRouter, Outlet, RouterProvider
} from "react-router-dom";
import { BodyContainer } from './App.styled.js';
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/Blogs/BlogPage";
import Landing from "./pages/Landing";
import theme from './styles/theme';

function Layout() {
  return <>
    <Header />
    <BodyContainer>
      <Outlet />
    </BodyContainer>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "blogs", element: <Blogs /> },
      { path: "blogs/:blogFileName", element: <BlogPage /> },
    ],
  }
])

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </>
  );
}

export default App;
