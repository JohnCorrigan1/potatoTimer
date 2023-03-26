const Stats: React.FC<{ hours: number }> = (props) => {
  return (
    <>
      <div className="mt-10">
        <h1 className="text-primary-content text-2xl font-bold">
          Hours Worked
        </h1>
      </div>
      <div className="stats shadow bg-base-300">
        <div className="stat place-items-center w-[120px]">
          <div className="stat-title">Today</div>
          <div className="stat-value">{props.hours}</div>
        </div>

        <div className="stat place-items-center w-[120px]">
          <div className="stat-title">Past 7d</div>
          <div className="stat-value text-secondary">35</div>
        </div>

        <div className="stat place-items-center w-[120px]">
          <div className="stat-title">Past 30d</div>
          <div className="stat-value">100</div>
        </div>
      </div>
    </>
  );
};

export default Stats;
