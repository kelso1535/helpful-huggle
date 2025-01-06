export const InfoPanel = () => {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold mb-4">Information</h2>
      
      <div className="space-y-2">
        <div>
          <span className="info-label">Officer:</span>
          <span className="info-value ml-2">None</span>
        </div>
        
        <div>
          <span className="info-label">Callsign:</span>
          <span className="info-value ml-2">None</span>
        </div>
        
        <div>
          <span className="info-label">Status:</span>
          <span className="info-value ml-2">
            <span className="status-badge bg-yellow-500/20 text-yellow-500">
              Inactive
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};