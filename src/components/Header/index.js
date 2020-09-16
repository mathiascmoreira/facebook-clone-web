import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Container,
    Content,
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


import { 
    FriendRequests, 
    Messages, 
    Notifications, 
    QuickHelp, 
    ArrowDown, 
    FacebookIcon, 
    Search 
} from '../Icons';

export default function Header({profilePicture}) {

    const name = useSelector(state => state.user.profile.name);
    return (
        <Container>
            <Content>
                <SearchFieldGroup>
                    <Link to="/dashboard">
                        <FacebookIcon />
                    </Link>
                    <SearchField>
                        <input placeholder="Search" />
                        <Link>
                            <Search />
                        </Link>
                    </SearchField>
                </SearchFieldGroup>
                <Buttons>
                    <TextButton>
                        <img src={profilePicture} />
                        <span>{name}</span>
                    </TextButton>
                    <TextButton>
                        <span>Home</span>
                    </TextButton>
                    <TextButton>
                        <span>Find Friends</span>
                    </TextButton>
                    <TextButton>
                        <span>Create</span>
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
                            <FriendRequests />
                        </IconButton>
                        <IconButton>
                            <Messages />
                        </IconButton>
                        <IconButton>
                            <Notifications />
                        </IconButton>
                    </NotificationButtons>
                    <IconButton>
                        <QuickHelp />
                    </IconButton>
                    <IconButton>
                        <ArrowDown />
                        {/*  <OtherOptionsPopup>
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