import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import { Search, History, UserCheck, AlertTriangle, Users, Flag } from 'lucide-react';

const LawEnforcement = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="w-64 p-4 border-r border-border/50 space-y-3 bg-background">
          <button className="nav-button">
            <Search className="w-4 h-4" />
            Search People
          </button>
          
          <button className="nav-button">
            <Search className="w-4 h-4" />
            Search Vehicle
          </button>
          
          <button className="nav-button">
            <History className="w-4 h-4" />
            Search History
          </button>
          
          <button className="nav-button">
            <Flag className="w-4 h-4" />
            PIN
          </button>
          
          <button className="nav-button">
            <History className="w-4 h-4" />
            CRIM HIST
          </button>
          
          <button className="nav-button">
            <AlertTriangle className="w-4 h-4" />
            REPORTS
          </button>
          
          <button className="nav-button">
            <Users className="w-4 h-4" />
            SERIALS
          </button>
          
          <button className="nav-button">
            <UserCheck className="w-4 h-4" />
            PENDING
          </button>
          
          <button className="nav-button">
            <Flag className="w-4 h-4" />
            FIN. RECORDS
          </button>
          
          <button className="nav-button text-destructive">
            <Users className="w-4 h-4" />
            SUPERVISOR
          </button>
          
          <button className="nav-button text-destructive">
            <AlertTriangle className="w-4 h-4" />
            WANTED
          </button>
        </div>
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