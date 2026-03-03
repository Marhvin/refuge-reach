import { cn } from "../lib/utils";

interface ChipProps {
  label: string;
  colorClass: string;
}

function formatLabel(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/, (c) => c.toUpperCase());
}

const Chip: React.FC<ChipProps> = ({ label, colorClass }) => {
  return (
    <div
      className={cn("px-3 py-1 rounded-full text-sm font-medium", colorClass)}>
      {formatLabel(label)}
    </div>
  );
};

export default Chip;
