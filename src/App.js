import logo from './logo.svg';
import React from "react";
import './App.css';
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

function App() {
  return (
    <div className="App">
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div>
  );
}
export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export default App;
