'use client';

import * as React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { makeStyles } from 'tss-react/mui';
import _ from 'lodash';
import parse from 'html-react-parser';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import {
    Box,
    Divider,
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    Menu,
    MenuItem,
    Stack,
    Tooltip,
    Typography,
    Zoom
} from '@mui/material';
import moment from 'moment';
import { 
    Link as LinkIcon, 
    Linkedin, 
    Twitter, 
    CalendarMonthOutline as CalendarIcon, 
    ShareVariant as ShareIcon, 
    HeartOutline
} from 'mdi-material-ui';
import { Post as PostData } from '@/interfaces';
import { selectPosts } from '@/redux/features/postsSlice';
import toast from 'react-hot-toast';

const useStyles = makeStyles()(theme => ({
    root: {
        marginTop: theme.spacing(9),
        width: '100vw'
    },

    image: {
        height: '60vh',
        width: '100%',
        objectPosition: 'center',
        objectFit: 'cover',

        [theme.breakpoints.down('sm')]: {
            objectFit: 'contain'
        },

        [theme.breakpoints.down('md')]: {
            height: '40vh'
        }
    },

    content: {
        display: 'grid',
        gridTemplateColumns: '3fr 1fr',
        gap: theme.spacing(4),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            gap: theme.spacing(2),
            gridTemplateColumns: '2fr 1fr',
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
        }
    },

    main: {
        '& h6': {
            fontWeight: 600,
            marginTop: theme.spacing(2)
        }
    },

    aside: {
        borderLeft: '1px solid #f8f8f8',
        paddingLeft: theme.spacing(4)
    },

    footer: {
        marginBottom: theme.spacing(2)
    },

    iconButton: {
        color: '#757575',
        padding: '0'
    },

    icon: {
        color: '#757575'
    },

    footerItem: {
        color: '#757575',
        margin: '0 !important'
    }
}));

interface Props {
    post: PostData;
    posts: PostData[];
}

const Post: React.FC<Props> = ({ post, posts }) => {
    const { classes } = useStyles();
    const pathname = usePathname();

    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

    
    const URL = `${window.location.origin}/blog/${post.slug}`;

    React.useEffect(() => {
        
        // if (_.isEmpty(post)) {
        //     const params = pathname.split('/');
        //     let slug;
        //     if (params.length > 3) {
        //         // /2021/5/20 format here: old post
        //         const year = params[1].toString();
        //         const month = params[2].toString();
        //         const day = params[3].toString();
        //         slug = params[4].toString();
        //         getOldPostBySlug({ year, month, day, slug });
        //     } else {
        //         // /blog/slug format here: New Post
        //         slug = pathname.split('/')[2];
        //         getPostBySlug(slug);
        //     }
        // }


        // eslint-disable-next-line
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorElement(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

    const clickToCopy = async () => {
        await navigator.clipboard.writeText(URL);
        toast.success('Link copied!');
        setAnchorElement(null);
    };

    return (
        <Box component="main" className={classes.root}>
            <Image 
                width={100}
                height={400}
                className={classes.image} 
                src={post.imageUrl} 
                alt={post.title} 
            />
            <Box component="section" className={classes.content}>
                <Box component="div" className={classes.main}>
                    <Typography variant="h6">{post.title}</Typography>
                    {parse(post.body)}
                    <Stack direction="row" spacing={2} alignItems="center" className={classes.footer}>
                        <Tooltip 
                            title="Share Post" 
                            placement="top" 
                            TransitionComponent={Zoom} 
                            TransitionProps={{ timeout: 300 }} 
                            arrow
                        >
                            <IconButton 
                                aria-controls="share-menu" 
                                aria-haspopup="true" 
                                onClick={handleClick} 
                                className={classes.iconButton} 
                                classes={{
                                    root: classes.iconButton
                                }}
                            >
                                <ShareIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="share-menu"
                            keepMounted
                            anchorEl={anchorElement}
                            open={Boolean(anchorElement)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={clickToCopy}>
                                <Stack direction="row" alignItems="center">
                                    <ListItemIcon>
                                        <LinkIcon className={classes.icon} />
                                    </ListItemIcon>
                                    <ListItemText>Copy Link</ListItemText>
                                </Stack>
                            </MenuItem>
                            <MenuItem onClick={() => setAnchorElement(null)}>
                                <LinkedinShareButton
                                    url={URL}
                                    title={post.title}
                                    summary="Page Summary Here"
                                    source="CyberKach.com"
                                    placeholder=""
                                >
                                    <Stack direction="row" alignItems="center">
                                        <ListItemIcon>
                                            <Linkedin className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText>LinkedIn</ListItemText>
                                    </Stack>
                                </LinkedinShareButton>
                            </MenuItem>
                            <MenuItem onClick={() => setAnchorElement(null)}>
                                <TwitterShareButton
                                    url={URL}
                                    title={post.title}
                                    via="Via content here"
                                    hashtags={['hashtag1', 'hashtag2']}
                                    related={[]}
                                    placeholder=""
                                >
                                    <Stack direction="row" alignItems="center">
                                        <ListItemIcon>
                                            <Twitter className={classes.icon} />
                                        </ListItemIcon>
                                        <ListItemText>Twitter</ListItemText>
                                    </Stack>   
                                </TwitterShareButton>
                            </MenuItem>
                        </Menu>
                        
                        {/* <Tooltip 
                            title="Like Post" 
                            placement="top" 
                            TransitionComponent={Zoom} 
                            TransitionProps={{ timeout: 300 }} 
                            arrow
                        >
                            <Typography variant="subtitle2" style={{ cursor: 'pointer' }} className={classes.footerItem}>
                                <HeartOutline />
                            </Typography>
                        </Tooltip> */}
                        <CalendarIcon className={classes.icon} />
                        <Typography variant="subtitle2" className={classes.footerItem}>{moment(post.createdAt).format('MMM Do, YYYY')}</Typography>
                    </Stack>
                </Box>
                {posts && 
                    <div className={classes.aside}>
                        <h2>Recent Articles</h2>
                        {posts.map((post: PostData, index: number) => {
                            if (index <= 4) {
                                return (
                                    <Link key={post._id} href={`blog/${post.slug}`} component={NextLink}>
                                        <Typography variant="body1" style={{ marginBottom: '10px' }}>
                                                {post.title}
                                        </Typography>
                                        <Divider />
                                    </Link>
                                )
                            }
                            return null
                        })}
                    </div>
                }
            </Box>
        </Box>
    );
};

export default Post;