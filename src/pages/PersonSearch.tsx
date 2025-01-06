import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const PersonSearch = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">Person Search</h1>
            <img 
              src="/lovable-uploads/66a4e067-9738-42e6-a0cf-30e0b34e2d7c.png"
              alt="Person Search Results" 
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

export default PersonSearch;