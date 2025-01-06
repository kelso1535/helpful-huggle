import { LogOut, Shield, Flag, Database, UserCheck, AlertTriangle } from 'lucide-react';

export const Sidebar = () => {
  return (
    <div className="w-64 p-4 border-r border-border/50 space-y-3">
      <button className="nav-button">
        <Database className="w-4 h-4" />
        Login to MDT
      </button>
      
      <button className="nav-button">
        <UserCheck className="w-4 h-4" />
        Login Auto Callsign
      </button>
      
      <button className="nav-button">
        <AlertTriangle className="w-4 h-4" />
        Change Status
      </button>
      
      <button className="nav-button text-destructive">
        <Shield className="w-4 h-4" />
        [- DURESS -]
      </button>
      
      <button className="nav-button">
        <Database className="w-4 h-4" />
        Law Enforcement Assistance Program (LEAP)
      </button>
      
      <button className="nav-button">
        <Flag className="w-4 h-4" />
        Flag Police Unit Stolen
      </button>
      
      <button className="nav-button">
        <LogOut className="w-4 h-4" />
        Logout of MDT
      </button>
      
      <button className="nav-button text-destructive">
        <LogOut className="w-4 h-4" />
        Exit
      </button>
    </div>
  );
};