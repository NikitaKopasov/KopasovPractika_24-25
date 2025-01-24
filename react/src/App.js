
import React, { useState } from 'react';
import './App.css';
import logo from './assets/images/smile.png';
import plus from './assets/images/plus.png';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [boardName, setBoardName] = useState('');
  const [boards, setBoards] = useState([]);

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
    setBoardName('');
  };

  const handleSave = () => {
    if (boardName.trim()) {
      setBoards([...boards, boardName.trim()]);
      setBoardName('');
      setIsFormVisible(false);
    }
  };

  const handleCancel = () => {
    setBoardName('');
    setIsFormVisible(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <a href="">
          <img src={logo} alt="logo" className="logo" />
        </a>
      </header>

      <section>
        <button id="new-board" onClick={toggleForm}>
          <img src={plus} className="plus" alt="plus icon" /> Новая доска
        </button>

        {isFormVisible && (
          <div className="board-form">
            <h3 className='name-board'>Название доски</h3>
            <input
              type="text"
              value={boardName}
              onChange={(e) => setBoardName(e.target.value)}
              placeholder="Введите название доски"
            />
            <div className="form-buttons">
            <button onClick={handleCancel}>Отмена</button>
              <button onClick={handleSave}>Сохранить</button>
            </div>
          </div>
        )}

        <div className="boards-list">
          {boards.map((board, index) => (
            <div key={index} className="board-item">
              {board}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;

