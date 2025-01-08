import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import { useNavigate } from "react-router-dom";

const CriminalHistory = () => {
  const navigate = useNavigate();
  const criminalRecords = [
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Engage in a Police Pursuit / Evade Police" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Assault Police" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Resist Police" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Reckless Driving" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Driving While License Suspended" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Failure to Stop" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Failure to Give Information" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Failure to Report" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Driving an Unregistered Vehicle" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Driving an Uninsured Vehicle" },
  ];

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
        <main className="flex-1 p-6 bg-black">
          <div className="space-y-4">
            <h1 className="text-blue-500 text-2xl font-bold mb-6">Criminal History</h1>
            <div className="space-y-2">
              {criminalRecords.map((record, index) => (
                <div key={index} className="text-green-500">
                  {record.date} - {record.paid} - {record.amount} - {record.offense}
                </div>
              ))}
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

export default CriminalHistory;