import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { FilterProvider } from "./contexts/FilterContext";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function App() {
  return (
    <FilterProvider>
      <div className="bg-gray-100 min-h-screen">
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
        </BrowserRouter>
      </div>
    </FilterProvider>
  );
}
