import { Container, TransactionTypeContainer, RadioBox } from './styles';

import { useTransactions } from '../../hooks/useTransactions';

import { FormEvent, useState } from 'react';
import Modal from "react-modal";

 import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutComeImg from '../../assets/outcome.svg';

Modal.setAppElement("#root");

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose, }: newTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [type, setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    onRequestClose();
  }
  
  return (
    <div>
      <Modal 
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
      >

        <button 
          className="react-modal-close"
          type="button" 
          onClick={onRequestClose}>
          <img src={CloseImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrart transação</h2>

          <input 
            placeholder="Titulo"
            value={title}
            onChange={({target}) => setTitle(target.value)}
          />

          <input 
            type="number" 
            placeholder="Valor"
            value={amount}
            onChange={({target}) => setAmount(Number(target.value))}
          />

          <TransactionTypeContainer>
            <RadioBox 
              type="button" 
              onClick={() => setType('deposit')}
              isActive={type === 'deposit'}
              activeColor="green"
            >
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>
            
            <RadioBox 
              type="button"
              onClick={() => setType('withdraw')}
              isActive={type === 'withdraw'}
              activeColor="red"
            >
              <img src={OutComeImg} alt="Saida" />
              <span>Saida</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
            value={category}
            onChange={({target}) => setCategory(target.value)}
          />

          <button type="submit">
            Cadastrar
          </button>
        </Container>
      </Modal>
    </div>
  );
};

export default NewTransactionModal;
