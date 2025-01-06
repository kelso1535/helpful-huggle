import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { InfoPanel } from "@/components/InfoPanel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 flex">
          <div className="flex-1 p-6">
            <div className="flex flex-col items-center justify-center h-full gap-8">
              <Carousel className="w-full max-w-4xl">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/b1f0b691-37c9-40c1-b5f5-725cedb0a02d.png"
                      alt="MDT Main Interface" 
                      className="w-full h-[400px] object-contain rounded-lg bg-black/50"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/2ef0ff2c-b267-420f-b3f3-f2aa3634a5b5.png"
                      alt="MDT Supervisor View" 
                      className="w-full h-[400px] object-contain rounded-lg bg-black/50"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/229632a8-09af-4dd2-9fe9-0c45e6899d41.png"
                      alt="Criminal History" 
                      className="w-full h-[400px] object-contain rounded-lg bg-black/50"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/66a4e067-9738-42e6-a0cf-30e0b34e2d7c.png"
                      alt="Person Search Results" 
                      className="w-full h-[400px] object-contain rounded-lg bg-black/50"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/4bf6a251-c16e-496f-bf71-4fae02caee10.png"
                      alt="Law Enforcement Program" 
                      className="w-full h-[400px] object-contain rounded-lg bg-black/50"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-0" />
                <CarouselNext className="bg-white/10 hover:bg-white/20 border-0" />
              </Carousel>
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