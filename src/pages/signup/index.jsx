
import { Header } from "../../components/Header"
import { Button } from '../../components/Button';

import { Input } from '../../components/Input';
//import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { MdEmail, MdLock, MdVerifiedUser } from 'react-icons/md'
import { Column, Container, Title, SubtitleLogin, Wrapper, Row, AoClicar, JaTenhoConta,
    CriarText
 } from "./styles"

const SignUp = () => {

    //const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            console.log(formData)
            //const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais 
                        tecnologias e entrar mais rápido nas empresas mais desejadas.
                    </Title>
                </Column>

                <Column>
                    <Wrapper>
                        <Title>
                            Comece agora grátis.
                        </Title>
                        <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input name="nome" placeholder="Nome completo" leftIcon={<MdVerifiedUser />}  control={control} />
                            {errors.nome && <span>Nome é obrigatório</span>}

                            <Input name="email" placeholder="E-mail" leftIcon={<MdEmail />} control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}

                            <Input name="senha" placeholder="Password" leftIcon={<MdLock />} control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}

                            <Button title="Criar minha conta" variant="secondary" type="submit"/>
                        </form>
                        <Row>
                            <AoClicar>
                                Ao clicar em "criar minha conta", declaro que aceito as Políticas
                                de Privacidade e os Termos de Uso da DIO.
                            </AoClicar>
                        </Row>
                        <Row>
                            <JaTenhoConta>
                                Já tenho conta. <CriarText href="/login">Fazer login</CriarText>
                            </JaTenhoConta>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )

}

export { SignUp } 