import { cn } from "../lib/utils";

interface ChipProps {
  label: string;
  colorClass: string;
}

const Chip: React.FC<ChipProps> = ({ label, colorClass }) => {
  return (
    <div
      className={cn("px-3 py-1 rounded-full text-sm font-medium", colorClass)}>
      {label}
    </div>
  );
};

export default Chip;
