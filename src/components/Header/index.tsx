import LogoImg from  '../../assets/logo.svg';
import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="Logo" />
        <button type="button">
            Nova transação
         </button>
      </Content>
    </Container>
  )
}

export default Header