'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { Box, useTheme, useMediaQuery, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

import { Post } from './Blog';
import { Post as PostData } from '@/interfaces';
import { Pagination, getMorePosts, selectIsPostLoading, selectPagination, selectPosts } from '@/redux/features/postsSlice';
import { AppDispatch } from '@/redux/store';

const useStyles = makeStyles()(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: theme.spacing(5),

        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: '1fr',
        }
    }
}));

const Posts = () => {
    const { classes } = useStyles();
    const dispatch: AppDispatch = useDispatch();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const router = useRouter();

    const pagination: Pagination = useSelector(selectPagination);
    const posts = useSelector(selectPosts);

    const observerTarget = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const getMore = () => {
            console.log('getting more posts');
            if (pagination.next) {
                dispatch(getMorePosts({
                    page: pagination.next.page,
                    limit: pagination.next.limit
                }));
            }
        };

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                getMore();
            }
        }, { threshold: 1 });

        if (observerTarget.current) {
            observer.observe(observerTarget.current);
        }

        return () => {
            if (observerTarget.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(observerTarget.current);
            }
        };
    }, [dispatch, pagination.next, observerTarget]);

    const setPost = (post: PostData) => {
        // e.preventDefault();
        // dispatch({
        //     type: SET_POST,
        //     payload: post
        // });

        router.push(`blog/${post.slug}`);
    };

    return (
        <Box component="section" className={classes.root}>
            {matches ?
                posts && posts.map((post: PostData) => {
                    return (
                        <Post
                            key={post._id}
                            post={post}
                            onClick={() => setPost(post)}
                        />
                    );
                })
                :
                posts && posts.map((post: PostData, index: number) => {
                    if (index > 0) {
                        return (
                            <Post
                                key={post._id}
                                onClick={() => setPost(post)}
                                post={post}
                                // title={post.title}
                                // slug={post.slug}
                                // body={post.body}
                                // avatar={post.author.avatar}
                                // image={post.imageUrl}
                                // url={`${BLOG}/${post.slug}`}
                                // likes={post.likes}
                                // id={post._id}
                            />
                        );
                    }
                    return null;
                })
            }
            <div ref={observerTarget}></div>
        </Box>  
    );
};

export default Posts;