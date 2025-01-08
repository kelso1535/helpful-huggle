import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import { useNavigate } from "react-router-dom";

const LawEnforcement = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-64 p-4 border-r border-border/50 space-y-3 bg-background">
          <button 
            className="nav-button bg-red-500/20 text-red-400"
            onClick={() => navigate('/person-search')}
          >
            SEARCH PEOPLE
          </button>
          <button className="nav-button">
            SEARCH VEHICLE
          </button>
          <button className="nav-button">
            SEARCH HISTORY
          </button>
          <button className="nav-button">
            PIN
          </button>
          <button 
            className="nav-button"
            onClick={() => navigate('/criminal-history')}
          >
            CRIM HIST
          </button>
          <button className="nav-button">
            REPORTS
          </button>
          <button className="nav-button">
            SERIALS
          </button>
          <button className="nav-button">
            ACTIONS
          </button>
          <button className="nav-button">
            FIN. RECORDS
          </button>
          <button 
            className="nav-button"
            onClick={() => navigate('/supervisor')}
          >
            SUPERVISOR
          </button>
          <button className="nav-button">
            WANTED
          </button>
          <button className="nav-button">
            EXIT
          </button>
        </div>
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-4">Law Enforcement Assessment Program</h1>
          <p>Select an option from the menu on the left to proceed.</p>
        </main>
        <div className="w-80 border-l border-border/50">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default LawEnforcement;