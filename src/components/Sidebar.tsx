import { LogOut, Shield, Flag, Database, History, Search, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-64 p-4 border-r border-border/50 space-y-3">
      <button className="nav-button" onClick={() => navigate('/main')}>
        <Database className="w-4 h-4" />
        Main Interface
      </button>
      
      <button className="nav-button" onClick={() => navigate('/supervisor')}>
        <Users className="w-4 h-4" />
        Supervisor View
      </button>
      
      <button className="nav-button" onClick={() => navigate('/criminal-history')}>
        <History className="w-4 h-4" />
        Criminal History
      </button>
      
      <button className="nav-button" onClick={() => navigate('/person-search')}>
        <Search className="w-4 h-4" />
        Person Search
      </button>
      
      <button className="nav-button" onClick={() => navigate('/law-enforcement')}>
        <Shield className="w-4 h-4" />
        Law Enforcement Program
      </button>
      
      <button className="nav-button text-destructive">
        <Shield className="w-4 h-4" />
        [- DURESS -]
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