import { GlobalStyle } from "./styles/global";

import { useState } from "react";

import Dashoboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/newTransactionModal";
import { TransactionsContext, TransactionsProvider } from "./TransactionsContext";


const App = () => {
  const [isNewTransansactionModalOpen, setisNewTransansactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setisNewTransansactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setisNewTransansactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <GlobalStyle />

        <Header
          onOpenNewTransactionModal={handleOpenNewTransactionModal}
        />

        <NewTransactionModal
          isOpen={isNewTransansactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal} 
        />
      
        <Dashoboard />
    </TransactionsProvider>
  );
};

export default App;
