function MiniCards({date, kills}) {
  return (
    <div className="bg-zinc-700 rounded-lg p-2">
      <span className="text-gray-200 text-xs">{date}</span>
      <p>{kills} kills</p>
    </div>
  );
}

export default MiniCards;
