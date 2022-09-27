import { Container } from './styles';

import IncomeImage from '../../assets/income.svg';
import OutComeImage from '../../assets/outcome.svg';
import TotalImage from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
 
const Sumary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((accumulator, transition) => {
    if(transition.type === 'deposit') {
      accumulator.deposits += transition.amount;
      accumulator.total += transition.amount;
    } else {
      accumulator.withdraws += transition.amount; 
      accumulator.total -= transition.amount; 
    }

    return accumulator;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  });

  return (
    <Container>

      <div>
        <header>
          <p>Entradas</p>
          <img src={IncomeImage} alt="Entradas" />
        </header>
        <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.deposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saidas</p>
          <img src={OutComeImage} alt="Saidas" />
        </header>
        <strong> - 
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="fundo">
        <header>
          <p>Total</p>
          <img src={TotalImage} alt="Total" />
        </header>
        <strong>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(summary.total)}
        </strong>
      </div>

    </Container>
  )
}

export default Sumary