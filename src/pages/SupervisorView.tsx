import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const SupervisorView = () => {
  const units = [
    { callsign: "CRD 625", badge: "405666", name: "JOHNNY DISTANCE", gprd: "19:09", status: "UNAVAILABLE STATION", location: "Vinsor St & Atlas St, Mission Row" },
    { callsign: "MA 242", badge: "823966", name: "FRANKLIN WEST", gprd: "17:34", status: "UNAVAILABLE BUSY", location: "San Andreas Ave & Palomino Ave, Little Seoul" },
    { callsign: "MRK 282", badge: "975850", name: "RICK BOBBY", gprd: "18:12", status: "UNAVAILABLE BUSY", location: "San Andreas Ave, Pillbox Hill" },
    { callsign: "CEN 207", badge: "982222", name: "SHERMAN HILL", gprd: "18:35", status: "ACTIVE", location: "Elgin Ave & Olympic Fwy, Strawberry" },
    { callsign: "MIL 215", badge: "566036", name: "JOSEPH FREEMAN", gprd: "19:10", status: "UNAVAILABLE STATION", location: "Vinsor St & Atlas St, Mission Row" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-black">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-blue-500 text-2xl font-bold">SUPERVISOR</h1>
              <div className="space-x-2">
                <button className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded">
                  Refresh Units
                </button>
                <button className="bg-blue-500/20 text-blue-400 px-4 py-1 rounded">
                  Phone Numbers
                </button>
              </div>
            </div>
            
            <div className="border border-green-500/30 rounded-lg p-4">
              <div className="grid grid-cols-[1fr_1fr_2fr_1fr_2fr_3fr] gap-4 text-green-500 mb-4">
                <div>CALLSIGN</div>
                <div>ID #</div>
                <div>NAME</div>
                <div>GPRD</div>
                <div>STATUS</div>
                <div>LOCATION</div>
              </div>
              
              <div className="space-y-2">
                {units.map((unit, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[1fr_1fr_2fr_1fr_2fr_3fr] gap-4 text-green-500"
                  >
                    <div>{unit.callsign}</div>
                    <div>{unit.badge}</div>
                    <div>{unit.name}</div>
                    <div>{unit.gprd}</div>
                    <div className="text-yellow-500">{unit.status}</div>
                    <div>{unit.location}</div>
                  </div>
                ))}
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

export default SupervisorView;