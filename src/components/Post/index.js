import React from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import {
    Container,
    Header,
    Content,
    Counts,
    LikesCount,
    ActionButtons,
    ActionButton,
    ActionLikeIcon,
    ActionCommentIcon,
    Comments,
    Comment,
    LikeIcon,
    CommentsCount,
    NewComment

} from './styles';

import profile from '../../assets/profile.jpg';
import { FaEllipsisH, FaGlobeAmericas } from 'react-icons/fa'

export default function ({ post }) {

    function handleCommentsCountClick(post) {

        post.showComments = !post.showComments;
    }

    function handleCommentButtonClick(post) {

        post.showComments = true;
    }

    return (
        <Container>

            <Header>
                <section>
                    <img src={profile} />
                    <span>
                        <h5>{post.user.name}</h5>
                        <time>{post.postedAt} .  <FaGlobeAmericas /></time>
                    </span>
                </section>

                <FaEllipsisH />
            </Header>

            <Content>
                {post.content}
            </Content>

            <Counts>
                <LikesCount hasLikes={post.hasLikes}>
                    <LikeIcon />
                    <p> {post.likesCount} </p>
                </LikesCount>
                <CommentsCount hasComments={post.hasComments}>
                    <Link onClick={() => handleCommentsCountClick(post)}>{post.commentsCount} comentários</Link>
                </CommentsCount>
            </Counts>
            <ActionButtons>
                <ActionButton hasOwnLike={post.hasOwnLike}>
                    <ActionLikeIcon hasOwnLike={post.hasOwnLike} />
                    Like
                                </ActionButton>
                <ActionButton onClick={() => handleCommentsCountClick(post)}>
                    <ActionCommentIcon />
                    Comment
                                </ActionButton>
            </ActionButtons>
            <Comments showComments={post.showComments}>
                {
                    post.comments.map(comment => (

                        <Comment key={comment.id}>
                            <img src={profile} />
                            <span>
                                <p>
                                    <Link>{comment.user.name}</Link> {comment.comment}
                                </p>
                                <Link>Like</Link>
                            </span>
                        </Comment>
                    ))
                }

                <NewComment >
                    <img src={profile} />
                    <input placeholder="Write a comment..." />
                </NewComment>

            </Comments>
        </Container>
    )
}
