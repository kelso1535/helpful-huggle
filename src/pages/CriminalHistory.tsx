import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const CriminalHistory = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Criminal History</h1>
            <img 
              src="/lovable-uploads/229632a8-09af-4dd2-9fe9-0c45e6899d41.png"
              alt="Criminal History" 
              className="w-full max-w-4xl mx-auto rounded-lg bg-black/50"
            />
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