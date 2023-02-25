import React, { useState } from "react";

const data = [
  { id: 1, name: "John Doe", date: "2022-12-01",position:"project" },
  { id: 2, name: "Jane Doe", date: "2022-11-20",position:"sales" },
  { id: 3, name: "Bob Smith", date: "2022-10-15",position:"sales" },
  { id: 4, name: "Alice Johnson", date: "2022-09-01" ,position:"sales"},
];

const Table = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [sortType, setSortType] = useState("asc");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Filter data by date range
  const handleFilter = () => {
    const filteredData = data.filter(
      (item) => item.date >= startDate && item.date <= endDate
    );
    setFilteredData(filteredData);
  };

  // Sort data by name
  const handleSort = () => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (a.name < b.name) {
        return sortType === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortType === "asc" ? 1 : -1;
      }
      return 0;
    });
    setFilteredData(sortedData);
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  return (
    <div>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <table  style={{width:"90%"}}>
        <thead>
          <tr>
            <th onClick={handleSort} className="headname">Name</th>
            <th className="headdate">Date</th>
            <th className="headprofile">Profile</th>
            <th className="headcontact">Contact No.</th>
            <th className="headsource">Source</th>
            <th className="headremark">Remark</th>
         
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.date}</td>
              <td>{item.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
