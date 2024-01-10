'use client';

import * as React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useDispatch, useSelector } from 'react-redux';
import { 
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Stack,
    Typography
} from '@mui/material';
import moment from 'moment';
import { makeStyles } from 'tss-react/mui';
import parse from 'html-react-parser';
import _ from 'lodash';

import Posts from './Posts';

import { Post as PostData } from '@/interfaces';
import { AppDispatch } from '@/redux/store';
import { LIGHT_GREY, OFF_WHITE } from '../theme';
import { Pagination, getMorePosts, selectIsPostLoading, selectPagination, setPagination, setPosts } from '@/redux/features/postsSlice';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(15),

        '& h4': {
            fontWeight: 600,
            [theme.breakpoints.down('sm')]: {
                fontWeight: 500,
                marginBottom: theme.spacing(4)
            }
        },

        [theme.breakpoints.down('md')]: {
            marginTop: theme.spacing(10)
        },

        [theme.breakpoints.down('sm')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },

    posts: {
        marginBottom: '100px',
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: theme.spacing(4),
        marginTop: theme.spacing(5),
        paddingLeft: theme.spacing(10),
        paddingRight: theme.spacing(10),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
        }
    },

    featuredPost: {
        color: 'initial',
        cursor: 'pointer',
        display: 'grid',
        gridTemplateColumns: '2fr 1.3fr',
        columnGap: theme.spacing(3),
        height: theme.spacing(50),
        overflow: 'hidden',
        marginBottom: theme.spacing(5),
        padding: theme.spacing(5),
        textDecoration: 'none',

        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },

    featuredPostImage: {
        objectPosition: 'center',
        objectFit: 'cover',
        borderRadius: theme.shape.borderRadius,
        height: theme.spacing(40),
        width: '100%'
    },

    featuredPostTitle: {
        '&:hover': {
            color: theme.palette.info.main,
            textDecoration: 'underline'
        }
    },

    postImage: {
        width: '100%',
        height: '100%'
    },

    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        color: OFF_WHITE,
        position: 'absolute',
        top: 0,
        height: 'initial',
        width: '100%',
        transition: '0.3s linear all',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    },

    title: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'inline-block',
        borderRadius: theme.shape.borderRadius,
        padding: '1px 5px',
        position: 'absolute',
        top: '200%',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        textTransform: 'uppercase',
        width: 'initial !important'
    },

    container: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: theme.spacing(5),
        paddingLeft: theme.spacing(5),
        paddingRight: theme.spacing(5),
        [theme.breakpoints.down('md')]: {
            gridTemplateColumns: 'repeat(2, 1fr)'
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),    
        }
    },

    aside: {
        display: 'flex',
        flexDirection: 'column',

        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },

    sidePost: {
        marginBottom: theme.spacing(2),
        textDecoration: 'none !important'
    },

    sidePostImage: {
        width: theme.spacing(15),
        height: theme.spacing(10),
        objectFit: 'contain',
        objectPosition: 'center'
    },

    sidePostTitle: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        margin: 0
    },

    sidePostTimestamp: {
        color: LIGHT_GREY,
        fontSize: theme.spacing(1.5)
    },

    postsContainer: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: theme.spacing(3)
    },

    post: {
        border: '1px solid #f8f8f8',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gap: theme.spacing(2),
        marginBottom: theme.spacing(5),

        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        },

        '& img': {
            height: '100%',
            width: theme.spacing(40),

            [theme.breakpoints.down('sm')]: {
                height: 'auto',
                width: '100%',
            }
        }
    },

    postTitle: {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 2,
        fontWeight: 500,
        fontFamily: 'inherit !important',
        margin: 0,

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.5),
            marginBottom: theme.spacing(2)
        }
    },

    text: {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
        fontWeight: 300,
        fontFamily: 'inherit !important',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.3)
        }
    },

    shareContainer: {
        '& small': {
            color: LIGHT_GREY,

            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(1.2)
            }
        }
    },

    date: {
        color: LIGHT_GREY,
        fontWeight: 300
    },

    icon: {
        color: LIGHT_GREY,
        '& hover': {
            color: `${theme.palette.primary.main} !important`
        }
    },

    menu: {
        '&:hover': {
            icon: {
                color: 'red'
            }
        }
    },

    button: {
        [theme.breakpoints.down('sm')]: {
        }
    }

}));

interface Props {
    posts: PostData[];
    pagination: Pagination;
}

const Blog: React.FC<Props> = ({ pagination, posts }) => {
    const { classes } = useStyles();
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();
    
    
    const loading = useSelector(selectIsPostLoading);
    const postsPagination: Pagination = useSelector(selectPagination);

    React.useEffect(() => {
      dispatch(setPosts(posts));
      dispatch(setPagination(pagination));
      // eslint-disable-next-line
    }, []);

    const setPost = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement, MouseEvent>, post: PostData, url: string) => {
        e.preventDefault();
        // dispatch({
        //     type: SET_POST,
        //     payload: post
        // });
        // history.push(url);
    };

    return (
        <Box component="main" className={classes.root}>
            <Typography variant="h4" align="center">
                The CyberKach Blog
            </Typography>
            {loading ? <h4>One Moment . . .</h4>
                :
                <>
                    {posts.length &&
                        <Link className={classes.featuredPost} href={`blog/${posts[0].slug}`}>
                            <Image 
                                src={posts[0].imageUrl} 
                                alt={posts[0].slug}
                                width={300}
                                height={100}
                                className={classes.featuredPostImage}
                            />
                            <Box component="div">
                                <Typography variant="body1" component="span">{moment(posts[0].createdAt).format('MMM Do, YYYY')}</Typography>
                                <Typography variant="h4" className={classes.featuredPostTitle}>{posts[0].title}</Typography>
                                {parse(`${posts[0].body.substring(0, 140)}...`)}
                            </Box>
                        </Link>
                    }
                </>
            }
            <Box component="div" className={classes.container}>
                <Posts />
                <Box component="aside" className={classes.aside}>
                    {posts.map((post, index) => {
                        if (index <= 4) {
                            return (
                                <Link 
                                    key={post._id} 
                                    href={`blog/${post.slug}`} 
                                    className={classes.sidePost} 
                                >
                                    <Stack direction="row" spacing={2}>
                                        <Image 
                                            src={post.imageUrl} 
                                            alt={post.title} 
                                            className={classes.sidePostImage} 
                                            width={200}
                                            height={100}
                                        />
                                        <Box component="div">
                                            <Typography variant="body1" component="p" className={classes.sidePostTitle}>{post.title}</Typography> 
                                            <Typography variant="subtitle2" component="small" className={classes.sidePostTimestamp}>{moment(post.createdAt).format('MMM Do, YYYY')}</Typography>&nbsp;
                                        </Box>
                                    </Stack>
                                </Link>
                            );
                        }
                        return null;
                    })}
                </Box>
            </Box>
            <Box component="div" sx={{ my: 5 }}>
                {loading && <Typography variant="h6" align="center">Fetching Posts . . .</Typography>}
                {!postsPagination.next && <Typography variant="h6" align="center">No More Posts</Typography>}
            </Box>
        </Box>
    );
}

interface PostProps {
    post: PostData;
    onClick?: (post: PostData) => void;
}

export const Post: React.FC<PostProps> = ({ post }) => {
    const { classes } = useStyles();
    const router = useRouter();
    const dispatch: AppDispatch = useDispatch();

    const { title, slug, body, imageUrl, createdAt } = post;


    const handleSetPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, url: string) => {
        e.preventDefault();
        // dispatch({
        //     type: SET_POST,
        //     payload: {}
        // });
        router.push(url);
    };

    return (
        <Card variant="outlined" raised>
            <CardActionArea
                onClick={(e) => handleSetPost(e, `blog/${slug}`)}
            >
                <CardMedia
                    component="img"
                    alt={slug}
                    height="140"
                    image={imageUrl}
                />
                <CardContent>
                    <Typography variant="subtitle2" component="small">{moment(createdAt).format('MMM Do, YYYY')}</Typography>
                    <Typography variant="h5" className={classes.postTitle}>{title}</Typography>
                    <Typography variant="subtitle2" component="p" className={classes.text}>
                        {parse(body)}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Blog;