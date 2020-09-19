import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Post from '../../components/Post';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Scroll,
    Posts,
    Container,
    SideMenu,
    SideMenuItem,
    NewPost,
    NewPostInput,
    NewPostOptions,
    Chat,
    ChatContacts,
    ChatFooter,
    ChatOnlineIndicator,
    ChatFooterSearchField,
    ChatFooterOptions

} from './styles';


import {
    Events,
    Groups,
    MarketPlace,
    Messenger,
    NewsFeed,
    Pages,
    Watch,
    PhotoVideo,
    TagFriends,
    FeelingActivity,
    ChatCreatNewGroup,
    ChatCreatNewRoom,
    ChatNewMessage,
    ChatOptions,
    ChatSearch   
} from '../../components/Icons';





import api from '../../services/api';

export default function Dashboard() {

    const user = useSelector(state => state.user.profile);

    const [posts, setPosts] = useState([]);


    useEffect(() => {


        async function loadPosts() {
            const response = await api.get('newsfeed');

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
    }, [user])

    return (
        <>
            <Header profilePicture={user?.profilePhotoUrl} />
            <Container>
                <SideMenu>
                    <SideMenuItem selected="true"><NewsFeed />News Feed</SideMenuItem>
                    <SideMenuItem><Messenger />Messenger</SideMenuItem>
                    <SideMenuItem><Watch />Watch</SideMenuItem>
                    <SideMenuItem><MarketPlace />Marketplace</SideMenuItem>

                    <h4>Explore</h4>

                    <SideMenuItem><Groups />Groups</SideMenuItem>
                    <SideMenuItem><Pages />Pages</SideMenuItem>
                    <SideMenuItem><Events />Events</SideMenuItem>
                </SideMenu>

                <Chat>
                    <ChatContacts>
                        <li>
                            <span>
                                <img src={user?.profilePhotoUrl} />
                                <p>Person 1</p>
                            </span>
                            <ChatOnlineIndicator />
                        </li>
                        <li>
                            <span>
                                <img src={user?.profilePhotoUrl} />
                                <p>Person 2</p>
                            </span>
                            <time>50m</time>
                        </li>
                        <li>
                            <span>
                                <img src={user?.profilePhotoUrl} />
                                <p>Person 3</p>
                            </span>
                            <time>50m</time>
                        </li>
                    </ChatContacts>
                    <ChatFooter>
                        <ChatFooterSearchField>
                            <ChatSearch />
                            <input placeholder="Search" />
                        </ChatFooterSearchField>
                        <ChatFooterOptions>
                            <ChatNewMessage /> 
                            <ChatCreatNewGroup />
                            <ChatCreatNewRoom />
                            <ChatOptions />
                        </ChatFooterOptions>
                    </ChatFooter>
                </Chat>
                <Posts>
                    <NewPost>
                        <h1>Create Post</h1>
                        <NewPostInput>
                            <img src={user?.profilePhotoUrl} />
                            <input placeholder={`What's on your mind, ${user?.name}?`} />
                        </NewPostInput>
                        <NewPostOptions>
                            <button>
                                <PhotoVideo />
                                <p>Photo/Video</p>
                            </button>
                            <button>
                                <TagFriends />
                                <p>Tag Friends</p>
                            </button>
                            <button>
                                <FeelingActivity />
                                <p>Feeling/Activity </p>
                            </button>
                        </NewPostOptions>
                    </NewPost>
                    {posts.map(post => <Post key={post.id} post={post} />)}
                </Posts>
                
            </Container>
        </>
    )
}