import { RouterProvider } from "react-router";
import { router } from "./router";
import { MobileOverlay } from "./components/MobileOverlay";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <MobileOverlay />
    </>
  );
}