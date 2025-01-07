import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const CriminalHistory = () => {
  const criminalRecords = [
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Engage in a Police Pursuit / Evade Police" },
    { date: "19/10/2023", paid: "N", amount: "$3500", offense: "CHARGE: Assault Police" },
    { date: "19/10/2023", paid: "Y", amount: "$1", offense: "CHARGE: Right to Trial" },
    { date: "19/10/2023", paid: "N", amount: "$5000", offense: "CHARGE: Kidnapping" },
    { date: "03/10/2023", paid: "N", amount: "$20000", offense: "CHARGE: Attempted Murder (Police)" },
    { date: "03/10/2023", paid: "N", amount: "$2000", offense: "CHARGE: Armed Robbery" },
    { date: "21/03/2023", paid: "Y", amount: "$1", offense: "CHARGE: Right to Trial" },
    { date: "21/03/2023", paid: "Y", amount: "$3500", offense: "CHARGE: Engage in a Police Pursuit / Evade Police" },
    { date: "21/03/2023", paid: "Y", amount: "$20000", offense: "CHARGE: Attempted Murder (Police)" },
    { date: "21/03/2023", paid: "Y", amount: "$1000", offense: "CHARGE: Contempt of Court" },
    { date: "21/03/2023", paid: "Y", amount: "$2000", offense: "CHARGE: Possess weapon (firearm) without legal authority" },
    { date: "21/03/2023", paid: "Y", amount: "$2000", offense: "CHARGE: Discharge weapon in a public place" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-black">
          <div className="space-y-4">
            <h1 className="text-blue-500 text-2xl font-bold mb-6">Criminal History</h1>
            <div className="border border-green-500/30 rounded-lg p-4">
              <h2 className="text-green-500 text-center mb-4 text-lg">------------------------LEAP CRIMINAL HISTORY------------------------</h2>
              <div className="grid grid-cols-[1fr_0.5fr_1fr_3fr] gap-4 text-green-500 mb-2">
                <div>Date</div>
                <div>P?</div>
                <div>Amount</div>
                <div>Offence</div>
              </div>
              <div className="space-y-1">
                {criminalRecords.map((record, index) => (
                  <div 
                    key={index} 
                    className="grid grid-cols-[1fr_0.5fr_1fr_3fr] gap-4 text-green-500"
                  >
                    <div>{record.date}</div>
                    <div>{record.paid}</div>
                    <div>{record.amount}</div>
                    <div>{record.offense}</div>
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

export default CriminalHistory;