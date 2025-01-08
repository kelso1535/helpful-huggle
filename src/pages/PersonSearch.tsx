import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const PersonSearch = () => {
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
          <button 
            className="nav-button"
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
            <h1 className="text-blue-400 text-xl">Search Person</h1>
            
            <div className="max-w-md space-y-2">
              <Input 
                type="text"
                placeholder="Enter name..."
                className="bg-black border-green-500/50 text-green-500"
              />
              <Button 
                className="w-full bg-cyan-900 hover:bg-cyan-800 text-white"
              >
                Run Person Check
              </Button>
            </div>

            <div className="mt-8 border border-green-500/30 p-4 rounded">
              <div className="space-y-4">
                <div className="border-b border-green-500/30 pb-2">
                  <div className="text-center border-b border-green-500 py-1 mb-2">
                    ------------------- LEAP DATABASE ENTRY -------------------
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-green-500">NAME:</span>
                      <span className="ml-2">JONES, BRAXTON</span>
                    </div>
                    <div>
                      <span className="text-green-500">HOME ADDR:</span>
                      <span className="ml-2">STRAWBERRY, LOS SANTOS</span>
                    </div>
                    <div>
                      <span className="text-green-500">DOB:</span>
                      <span className="ml-2">1972-3-23</span>
                    </div>
                    <div>
                      <span className="text-green-500">PHONE NO:</span>
                      <span className="ml-2">583674</span>
                    </div>
                    <div>
                      <span className="text-green-500">SEX:</span>
                      <span className="ml-2">M</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-center border-b border-green-500 py-1">
                    ------------------- ROAD TRAFFIC AUTHORITY -------------------
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <span className="text-green-500">LIC CLASS:</span>
                      <span className="ml-2">[CAR] [RIDER]</span>
                    </div>
                    <div>
                      <span className="text-green-500">LIC STATUS:</span>
                      <span className="ml-2">CURRENT</span>
                    </div>
                    <div>
                      <span className="text-green-500">EXPIRES:</span>
                      <span className="ml-2">2023-11-13 00:00 AM</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-500">CONDITIONS:</span>
                        <span className="ml-2">NONE</span>
                      </div>
                      <div>
                        <span className="text-green-500">DEMERIT PTS:</span>
                        <span className="ml-2">0 (LAST 7 DAYS)</span>
                      </div>
                    </div>

                    <div className="mt-4 space-y-2">
                      <div>
                        <span className="text-green-500">WANTED:</span>
                        <span className="ml-2">NO</span>
                      </div>
                      <div>
                        <span className="text-green-500">BAIL:</span>
                        <span className="ml-2">NO</span>
                      </div>
                      <div>
                        <span className="text-green-500">MEN HEALTH:</span>
                        <span className="ml-2">NO</span>
                      </div>
                      <div>
                        <span className="text-green-500">POS WEAP:</span>
                        <span className="ml-2">NO</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-center border-b border-green-500 py-1 mb-2">
                      FLAGS
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-500">VIOLENCE POLICE:</span>
                        <span className="ml-2">YES</span>
                      </div>
                      <div>
                        <span className="text-green-500">VIOLENCE:</span>
                        <span className="ml-2">NO</span>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-center border-b border-green-500 py-1 mb-2">
                        WEAPON LICENCES
                      </div>
                      <div>
                        <span className="text-green-500">HANDGUN:</span>
                        <span className="ml-2">NO</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-500">WEAPON LONGARM:</span>
                        <span className="ml-2">NO</span>
                      </div>
                      <div>
                        <span className="text-green-500">CONCEAL CARRY PERMIT:</span>
                        <span className="ml-2">NO</span>
                      </div>
                      <div>
                        <span className="text-green-500">F/ARM PROHIB ORDER:</span>
                        <span className="ml-2">NO</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="text-center border-b border-green-500 py-1 mb-2">
                      OTHER
                    </div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-green-500">DNA ON FILE:</span>
                        <span className="ml-2">CURRENT ON FILE</span>
                      </div>
                      <div>
                        <span className="text-green-500">FINE / CHARGE:</span>
                        <span className="ml-2">$ - AS NECESSARY</span>
                      </div>
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

export default PersonSearch;