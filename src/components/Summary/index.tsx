import { Container } from './styles';

import IncomeImage from '../../assets/income.svg';
import OutComeImage from '../../assets/outcome.svg';
import TotalImage from '../../assets/total.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../TransactionsContext';

const Sumary = () => {
  const transactions = useContext(TransactionsContext);

  console.log(transactions)

  
  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImage} alt="Entradas" />
        </header>
        <strong>R$1000,00</strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutComeImage} alt="Saidas" />
        </header>
        <strong> - R$500,00</strong>
      </div>

      <div className="fundo">
        <header>
          <p>Entradas</p>
          <img src={TotalImage} alt="Total" />
        </header>
        <strong>R$500,00</strong>
      </div>

    </Container>
  )
}

export default Sumary