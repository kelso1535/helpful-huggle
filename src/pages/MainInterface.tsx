import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const MainInterface = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Main Interface</h1>
            <img 
              src="/lovable-uploads/b1f0b691-37c9-40c1-b5f5-725cedb0a02d.png"
              alt="MDT Main Interface" 
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

export default MainInterface;