import {  useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

const TransactionsTable = () => {   
  const { transactions } = useTransactions();

  return (
    <Container>
        <table>
            <thead>
                <tr>
                    <th>Titulo</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
            </thead>

            <tbody>
               {transactions.map(transaction => (
                  <tr key={transaction.id}>
                     <td>{transaction.title}</td>
                     <td className={transaction.type}> {transaction.type === 'deposit' ? '' : ' - '}
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency:  'BRL'
                        }).format(transaction.amount)}
                    </td>
                     <td>{transaction.category}</td>
                     <td>
                        {new Intl.DateTimeFormat('pt-Br',).format(
                          new Date(transaction.createdAt))}
                     </td>
                 </tr>
                ))}
            </tbody>
        </table>
    </Container>
  )
}

export default TransactionsTable