import React from "react";
// import "./Dashboard.css";

const testData = [
  { venue: "Red Rocks", band: "Caamp", date: "12-01-2022", tickets: 5 },
  {
    venue: "Red Butte",
    band: "Justin Timberlake",
    date: "11-15-2022",
    tickets: 20,
  },
  {
    venue: "Madison Square Garden",
    band: "Korn",
    date: "10-29-2022",
    tickets: 100,
  },
];

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Venue</th>
            <th>Band</th>
            <th>Date</th>
            <th>Tickets</th>
          </tr>
        </thead>
        <tbody>
          {testData.map((data) => (
            <tr>
              <td>{data.venue}</td>
              <td>{data.band}</td>
              <td>{data.date}</td>
              <td>{data.tickets}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
