import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from './styles';

import Header from '../../components/Header';
import Post from '../../components/Post';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import {
    Scroll,
    Posts
   
} from './styles';


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
            <Header profilePicture={user?.profilePhotoUrl}/>
            <Scroll>
                <Posts>
                { posts.map(post => <Post key={post.id} post={post} /> ) }
                </Posts>
            </Scroll>
        </>
    )
}

