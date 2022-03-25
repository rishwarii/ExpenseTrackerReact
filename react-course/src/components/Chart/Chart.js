import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointVal = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMAx = Math.max(...dataPointVal);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          max={totalMAx}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
