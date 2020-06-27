import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format } from 'date-fns';

import pt from 'date-fns/locale/pt';

import Header from '../../components/Header';

import api from '../../services/api';

import {AddFriend, MessageUser, Follow, ProfileEllipsis} from '../../components/Icons';

import {
    Scroll,
    Content,
    CoverPhotoContainer,
    ProfileMenu,
    ProfileMenuButtons,
    ActionButtons,
    ProfilePicture,
    TimeLine,
    TimeLineAside,
    TimeLineIntro,
    TimeLinePhotos,
    TimeLineFriends,
    Posts,
} from './styles';

import Post from '../../components/Post';


import coverPhoto from '../../assets/coverPhoto.jpg';
import profile2 from '../../assets/profile2.jpg';

export default function Profile() {

    const user = useSelector(state => state.user.profile);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get(`posts/${user.id}`);    

            const posts = response.data.map(post => {
                post.postedAt = format(new Date(post.createdAt), "d 'de' MMMM", { locale: pt });
                post.hasLikes = post.likesCount > 0;
                post.hasComments = post.commentsCount > 0;
                post.showComments = true;

                return post;
            })

            setPosts(posts);
        }

        loadPosts();
    }, [user.id])


    return (
        <>
            <Header />

            <Scroll>
                <Content>
                    <CoverPhotoContainer coverPhoto={coverPhoto}>
                        <ProfilePicture>
                            <span>
                                <img src={profile2} />
                            </span>

                            <p>Shakeeb Aftab</p>
                        </ProfilePicture>

                        <ActionButtons>
                            <span>
                                <button>
                                    <AddFriend />
                                    <p>Add Friend</p>
                                </button>
                            </span>
                            <span>
                                <button>
                                    <Follow />
                                    <p>Follow</p>
                                    
                                    </button>
                                <button>
                                    <MessageUser />
                                    <p>Message</p>
                                    </button>
                                <button>
                                    <ProfileEllipsis />
                                </button>
                            </span>
                        </ActionButtons>
                    </CoverPhotoContainer>
                    <ProfileMenu>
                        <ProfileMenuButtons>
                            <button>Timeline</button>
                            <button>About</button>
                            <button>Friends</button>
                            <button>Photos</button>
                        </ProfileMenuButtons>
                    </ProfileMenu>

                    <TimeLine>
                        <TimeLineAside>
                            <TimeLineIntro>
                                <h1>Intro</h1>
                                <ul>
                                    <li>Not Yet Working</li>
                                    <li>Lives in United States</li>
                                    <li>From Brazil</li>
                                    <li>Single</li>
                                </ul>
                            </TimeLineIntro>
                            <TimeLinePhotos>
                                <h1>Photos</h1>
                            </TimeLinePhotos>
                            <TimeLineFriends>
                                <h1>Friends</h1>
                            </TimeLineFriends>
                        </TimeLineAside>
                        <Posts>
                        { posts.map(post => <Post key={post.id} post={post} /> ) }
                        </Posts>
                    </TimeLine>
                </Content>
            </Scroll>
        </>
    )
}