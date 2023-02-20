import React, { useState } from 'react';
import Modal from './Modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Open Modal</button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h2>This is the modal content</h2>
        <p>Here is some more text</p>
        <button onClick={() => setShowModal(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default App;
