import { Container } from './styles';

import Sumary from '../Summary';
import TransactionsTable from '../TransactionsTable';

const Dashoboard = () => {
  return (
    <Container>
        <Sumary />
        <TransactionsTable />
    </Container>
  )
}

export default Dashoboard