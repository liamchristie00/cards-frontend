import { useState } from 'react';

function CardUI() {
  const [searchInput, setSearchInput] = useState('');
  const [addInput, setAddInput] = useState('');
  const [results, setResults] = useState<string[]>([]);

  async function addCard(e: any) {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/addcard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card: addInput }),
    });

    const data = await response.json();

    if (data.error) {
      alert('Error adding card');
    } else {
      alert('Card added!');
      setAddInput('');
    }
  }

  async function searchCard(e: any) {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/searchcards', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search: searchInput }),
    });

    const data = await response.json();
    setResults(data.results);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search card"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={searchCard}>Search</button><br />

      <input
        type="text"
        placeholder="Card to add"
        value={addInput}
        onChange={(e) => setAddInput(e.target.value)}
      />
      <button onClick={addCard}>Add</button><br />

      <div>
        {results.map((card, index) => (
          <div key={index}>{card}</div>
        ))}
      </div>
    </div>
  );
}

export default CardUI;
