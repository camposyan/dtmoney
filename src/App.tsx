import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import Modal from "react-modal";

import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement('#root');

function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
