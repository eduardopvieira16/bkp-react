import { Container, Title, Label, Input, Card, ButtonLogin } from "./SignInStyles";

const SignIn: React.FC = () => {
  return (
    <Container>
    <Card>
      <Title>Fazer Login:</Title>

      <Label>Usuário</Label>
      <div>
        <Input />
      </div>
      <Label>Senha</Label>
      <div>
        <Input />
      </div>

      <ButtonLogin type="button">Entrar</ButtonLogin>
    </Card>
  </Container>
  );
}


export default SignIn;
