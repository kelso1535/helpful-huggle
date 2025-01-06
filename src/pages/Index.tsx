import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex">
          <div className="flex-1 p-6">
            <div className="flex items-center justify-center h-full">
              <img 
                src="/lovable-uploads/3df86195-dc23-42ad-8b44-832e2d543f06.png" 
                alt="Victoria Police" 
                className="h-32 opacity-30"
              />
            </div>
          </div>
          <div className="w-80 border-l border-border/50">
            <InfoPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;