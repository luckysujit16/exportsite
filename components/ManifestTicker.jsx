const ITEMS = [
  "PULSES",
  "SPICES",
  "FRESH VEGETABLES",
  "ONION",
  "POTATO",
  "CUSTOM SOURCING ON REQUEST",
];

export default function ManifestTicker() {
  const line = ITEMS.join("   /   ");
  return (
    <div
      className="w-full overflow-hidden bg-ink border-b border-white/10"
      aria-label="Product manifest"
    >
      <div className="manifest-track py-2 text-[11px] tracking-[0.25em] text-white/70 whitespace-nowrap font-medium">
        <span className="px-4">
          {line}
          {"   /   "}
          {line}
        </span>
        <span className="px-4" aria-hidden="true">
          {line}
          {"   /   "}
          {line}
        </span>
      </div>
    </div>
  );
}
