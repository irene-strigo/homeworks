
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
  chartType="PieChart"
  data={[
    ["Task", "Hours per Day"],
    ["Learn", 5],
    ["Eat", 1],
    ["Commute", 1],
    ["Read", 2],
    ["Sleep", 7],
    ["Walk", 2],

  ]}
 
  width="100%"
  height="400px"
  legendToggle
/>
    </div>
  );
}

export default App;
