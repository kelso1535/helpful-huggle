import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const LawEnforcement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Law Enforcement Program</h1>
            <img 
              src="/lovable-uploads/4bf6a251-c16e-496f-bf71-4fae02caee10.png"
              alt="Law Enforcement Program" 
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

export default LawEnforcement;