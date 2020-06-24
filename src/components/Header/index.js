import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Content,
    FacebookIcon,
    SearchField,
    TextButton,
    IconButton,
    NotificationButtons,
    Buttons,
    SearchFieldGroup,
    CreatePopup,
    CreatePoputItem,
    OtherOptionsPopup
} from './styles';
import { GrFacebook, GrFlagFill } from 'react-icons/gr'
import { GoSearch } from 'react-icons/go'
import {
    FaUserFriends,
    FaFacebookMessenger,
    FaBell,
    FaQuestionCircle,
    FaCaretDown,
    FaBullhorn,
    FaUsers,
    FaCalendarAlt,
    FaStore
} from 'react-icons/fa'
import profile from '../../assets/profile.jpg';


export default function Header() {

    const name = useSelector(state => state.user.profile.name);
    return (
        <Container>
            <Content>
                <SearchFieldGroup>
                    <FacebookIcon to="/dashboard">
                        <GrFacebook />
                    </FacebookIcon>
                    <SearchField>
                        <input placeholder="Pesquisar" />
                        <Link>
                            <GoSearch />
                        </Link>
                    </SearchField>
                </SearchFieldGroup>
                <Buttons>
                    <TextButton>
                        <img src={profile} />
                        <span>{name}</span>
                    </TextButton>
                    <TextButton>
                        <span>Página inicial</span>
                    </TextButton>
                    <TextButton>
                        <span>Encontrar amigos</span>
                    </TextButton>
                    <TextButton>
                        <span>Criar</span>
                        {/* <CreatePopup>
                            <h4>Criar</h4>
                            <CreatePoputItem>
                                <span>
                                    <GrFlagFill />
                                    <section>
                                        <strong>Página</strong>
                                        <p>Entra em contato e partilha com clientes ou fãs</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <FaBullhorn />
                                    <section>
                                        <strong>Anúncio</strong>
                                        <p>Faz publicidade ao teu negócio, à tua marca ou à tua organização</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <FaUsers />
                                    <section>
                                        <strong>Grupo</strong>
                                        <p>Encontra pessoas que partilhem os mesmos interesses</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <FaCalendarAlt />
                                    <section>
                                        <strong>Evento</strong>
                                        <p>Junta as pessoas num evento público ou privado</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                            <CreatePoputItem>
                                <span>
                                    <FaStore />
                                    <section>
                                        <strong>Anúncio do Marketplace</strong>
                                        <p>Vende artigos às pessoas da tua comunidade</p>
                                    </section>
                                </span>
                            </CreatePoputItem>
                        </CreatePopup> */}
                    </TextButton>
                    <NotificationButtons>
                        <IconButton>
                            <FaUserFriends />
                        </IconButton>
                        <IconButton>
                            <FaFacebookMessenger />
                        </IconButton>
                        <IconButton>
                            <FaBell />
                        </IconButton>
                    </NotificationButtons>
                    <IconButton>
                        <FaQuestionCircle />
                    </IconButton>
                    <IconButton>
                        <FaCaretDown />
                        {/* <OtherOptionsPopup>
                            <section>
                                <li>Seus grupos</li>
                            </section>
                            <section>
                                <li>Publicidade no Facebook</li>
                            </section>
                            <section>
                                <li>Registro de atividades</li>
                                <li>Preferências do Feed de Notic...</li>
                                <li>Configurações</li>
                            </section>
                            <section>
                                <li>Sair</li>
                            </section>
                        </OtherOptionsPopup> */}
                    </IconButton>
                </Buttons>
            </Content>
        </Container>
    )
}