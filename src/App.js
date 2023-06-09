import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/files/data', {
          params: { fileName: filter },
        });
        setData(response.data);
      } catch (error) {
        console.log('Error fetching data from files:', error);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <Container>
      <input
        type="text"
        placeholder="Filter by filename"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>File</th>
            <th>Text</th>
            <th>Number</th>
            <th>Hex</th>
          </tr>
        </thead>
        <tbody>
          {data.map((fileData) =>
            fileData.lines.map((line, index) => (
              <tr key={`${fileData.file}-${index}`}>
                <td>{fileData.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
