import { Shield } from 'lucide-react';

export const Header = () => {
  return (
    <div className="flex items-center justify-between p-6 border-b border-border/50">
      <div className="flex items-center gap-4">
        <Shield className="w-10 h-10 text-primary" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">CRIMTRAC</h1>
          <p className="text-sm text-muted-foreground">Law Enforcement System</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <img src="/lovable-uploads/3df86195-dc23-42ad-8b44-832e2d543f06.png" alt="AFP Logo" className="h-12 opacity-80" />
      </div>
    </div>
  );
};