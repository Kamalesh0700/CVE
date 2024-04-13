import React, { useState, useEffect } from "react";
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0); 
  useEffect(() => {
    fetchData();
  }, [currentPage, itemsPerPage]); 

  useEffect(() => {
    axios.get('http://localhost:5000/get')
      .then((res) => {
        setData(res.data);
        setTotalCount(res.data.length); 
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); 

  const fetchData = () => {
    axios.get(`http://localhost:5000/get?_page=${currentPage}&_limit=${itemsPerPage}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handlePerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1); 
  };

  return (
    <div>
      <center><h1>CVE LIST</h1></center> 
      <center><p>Total Records in the list: {totalCount}</p></center> 
      <table>
        <thead>
          <tr>
            <th>CVE-ID</th>
            <th>IDENTIFIER</th>
            <th>Published DATE</th>
            <th>Modify</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, index) => (
            <tr key={index}>
              <td>{item.cveId}</td>
              <td>{item.identifier}</td>
              <td>{item.publishedDate}</td>
              <td>{item.lastModifiedDate}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <center>
        <div>
          <label>Results Per Page:</label>
          <select value={itemsPerPage} onChange={handlePerPageChange}>
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>

        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={nextPage} disabled={currentItems.length < itemsPerPage}>
          Next Page
        </button>
      </center>
    </div>
  );
}

export default Home;
