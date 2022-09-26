import { Container, TransactionTypeContainer } from './styles';

import CloseImg from '../../assets/close.svg';
import IncomeImg from '../../assets/income.svg';
import OutComeImg from '../../assets/outcome.svg';


import Modal from "react-modal";
Modal.setAppElement("#root");

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const NewTransactionModal = ({isOpen, onRequestClose, }: newTransactionModalProps) => {
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

        <Container>
          <h2>Cadastrart transação</h2>

          <input 
            placeholder="Titulo"
          />

          <input 
            type="number" 
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button type="button">
              <img src={IncomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>
            
            <button type="button">
              <img src={OutComeImg} alt="Saida" />
              <span>Entrada</span>
            </button>
          </TransactionTypeContainer>

          <input 
            placeholder="Categoria"
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
