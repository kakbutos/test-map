import { BusIcon } from '@/shared/ui/icons/BusIcon';
import './SiteMarker.css';

interface SiteMarkerProps {
  color: string;
  isSelected: boolean;
  onClick: (e: React.MouseEvent) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export function SiteMarker({
  color,
  isSelected,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: SiteMarkerProps) {
  return (
    <div
      className={`site-marker ${isSelected ? 'site-marker--selected' : ''}`}
      style={{ backgroundColor: color }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <BusIcon className="site-marker__icon" />
    </div>
  );
}

