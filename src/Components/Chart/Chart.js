// import { deleteDatabase } from "workbox-core/_private";
import "./Chart.css";
import ChartBars from "./ChartBars";
const Chart = (props) => {
  const valueArray = props.datapoints.map((datapoint) => datapoint.value);
  const max = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
          <ChartBars
            value={datapoint.value}
            key={datapoint.label}
            maxValue={max}
            label={datapoint.label}
          />
      ))}
    </div>
  );
};
export default Chart;
