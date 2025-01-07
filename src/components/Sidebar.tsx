import { LogIn, LogOut, Shield, Flag, Database, AlertTriangle, UserCheck, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 p-4 border-r border-border/50 space-y-3">
      <button className="nav-button" onClick={() => navigate('/main')}>
        <LogIn className="w-4 h-4" />
        Login to MDT
      </button>
      
      <button className="nav-button">
        <UserCheck className="w-4 h-4" />
        Login with Auto Call Sign
      </button>
      
      <button className="nav-button">
        <Settings className="w-4 h-4" />
        Change Status
      </button>
      
      <button className="nav-button text-destructive">
        <AlertTriangle className="w-4 h-4" />
        [- DURESS -]
      </button>
      
      <button className="nav-button" onClick={() => navigate('/law-enforcement')}>
        <Database className="w-4 h-4" />
        Law Enforcement Assessment Program (LEAP)
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