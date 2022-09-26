import { Container, Content } from './styles';

import LogoImg from  '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo" />

        <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
        </button>
      </Content>
    </Container>
  )
}

export default Header