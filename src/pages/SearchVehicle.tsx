import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SearchVehicle = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-64 p-4 border-r border-border/50 space-y-3 bg-background">
          <button 
            className="nav-button"
            onClick={() => navigate('/person-search')}
          >
            SEARCH PEOPLE
          </button>
          <button 
            className="nav-button bg-red-500/20 text-red-400"
            onClick={() => navigate('/search-vehicle')}
          >
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
          <button 
            className="nav-button"
            onClick={() => navigate('/search-serial')}
          >
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
        <main className="flex-1 p-6 bg-black text-green-500">
          <div className="space-y-4">
            <h1 className="text-blue-400 text-xl">Search Vehicle</h1>
            
            <div className="max-w-md space-y-2">
              <Input 
                type="text"
                placeholder="Enter plate number..."
                className="bg-black border-green-500/50 text-green-500"
              />
              <Button 
                className="w-full bg-cyan-900 hover:bg-cyan-800 text-white"
              >
                Run Vehicle Check
              </Button>
            </div>

            <div className="mt-8 border border-green-500/30 p-4 rounded">
              <div className="space-y-4">
                <div className="border-b border-green-500/30 pb-2">
                  <div className="text-center border-b border-green-500 py-1 mb-2">
                    ------------------- VEHICLE DATABASE ENTRY -------------------
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-green-500">PLATE:</span>
                      <span className="ml-2">ABC123</span>
                    </div>
                    <div>
                      <span className="text-green-500">MODEL:</span>
                      <span className="ml-2">BUFFALO STX</span>
                    </div>
                    <div>
                      <span className="text-green-500">COLOR:</span>
                      <span className="ml-2">BLACK</span>
                    </div>
                    <div>
                      <span className="text-green-500">OWNER:</span>
                      <span className="ml-2">JOHN DOE</span>
                    </div>
                    <div>
                      <span className="text-green-500">REGISTRATION:</span>
                      <span className="ml-2">VALID</span>
                    </div>
                    <div>
                      <span className="text-green-500">INSURANCE:</span>
                      <span className="ml-2">VALID</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center border-b border-green-500 py-1">
                    ------------------- FLAGS -------------------
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-green-500">STOLEN:</span>
                      <span className="ml-2">NO</span>
                    </div>
                    <div>
                      <span className="text-green-500">WANTED:</span>
                      <span className="ml-2">NO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div className="w-80 border-l border-border/50">
          <InfoPanel />
        </div>
      </div>
    </div>
  );
};

export default SearchVehicle;