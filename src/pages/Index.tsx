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
              <Carousel className="w-full max-w-3xl">
                <CarouselContent>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                      alt="Computer System" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                      alt="System Interface" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
                      alt="Police Computer" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </CarouselItem>
                  <CarouselItem>
                    <img 
                      src="/lovable-uploads/3df86195-dc23-42ad-8b44-832e2d543f06.png" 
                      alt="Victoria Police" 
                      className="h-32 opacity-30"
                    />
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
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