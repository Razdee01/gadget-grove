const Stats = () => {
  return (
    <div className="py-10 bg-base-200/50 flex justify-center px-4">
      <div className="stats stats-vertical lg:stats-horizontal shadow-xl bg-base-300 w-full max-w-5xl border border-white/5">
        <div className="stat place-items-center">
          <div className="stat-title font-bold uppercase tracking-widest text-xs">
            Total Sales
          </div>
          <div className="stat-value text-primary">31K</div>
          <div className="stat-desc font-bold text-secondary">↗︎ 400 (22%)</div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title font-bold uppercase tracking-widest text-xs">
            Active Users
          </div>
          <div className="stat-value text-secondary">4,200</div>
          <div className="stat-desc font-bold text-primary">
            90% Satisfaction
          </div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title font-bold uppercase tracking-widest text-xs">
            New Items
          </div>
          <div className="stat-value">1,200</div>
          <div className="stat-desc font-bold">Daily Updates</div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
