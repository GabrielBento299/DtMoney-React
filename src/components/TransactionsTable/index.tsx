import { Container } from './styles';

const TransactionsTable = () => {
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
                <tr>
                    <td>Desenvolvimento de website</td>
                    <td className="deposit">R$12,0000</td>
                    <td>Desenvolvimento</td>
                    <td>24/09/2022</td>
                </tr>
                
                <tr>
                    <td>Alugel</td>
                    <td className="withdraw">- R$4,000</td>
                    <td>Casa</td>
                    <td>24/09/2022</td>
                </tr>
            </tbody>
        </table>
    </Container>
  )
}

export default TransactionsTable