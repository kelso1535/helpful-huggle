import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import MainInterface from "./pages/MainInterface";
import SupervisorView from "./pages/SupervisorView";
import CriminalHistory from "./pages/CriminalHistory";
import PersonSearch from "./pages/PersonSearch";
import LawEnforcement from "./pages/LawEnforcement";
import SearchVehicle from "./pages/SearchVehicle";
import SearchSerial from "./pages/SearchSerial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/main" element={<MainInterface />} />
          <Route path="/supervisor" element={<SupervisorView />} />
          <Route path="/criminal-history" element={<CriminalHistory />} />
          <Route path="/person-search" element={<PersonSearch />} />
          <Route path="/law-enforcement" element={<LawEnforcement />} />
          <Route path="/search-vehicle" element={<SearchVehicle />} />
          <Route path="/search-serial" element={<SearchSerial />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;