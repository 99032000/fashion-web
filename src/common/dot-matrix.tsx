export function DotMatrix() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-6">
      {[...Array(16)].map((_, index) => (
        <div key={index} className="h-2 w-2 rounded-full bg-[#267144]"></div>
      ))}
    </div>
  );
}
