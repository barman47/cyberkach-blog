'use client';

import * as React from 'react';

import Link from 'next/link';
import { makeStyles } from 'tss-react/mui';
import clsx from 'clsx';
import { 
    Button, 
    Typography,
    Tooltip,
    Zoom,
    IconButton,
    Card, 
    CardActions, 
    CardContent, 
    CardMedia,
    Menu,
    MenuItem,
    Stack,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import { ArrowRight, ShareVariant as ShareIcon, CalendarMonthOutline as CalendarIcon, ArrowLeft } from 'mdi-material-ui';
import moment from 'moment';
import { LinkedinShareButton, TwitterShareButton } from 'react-share';
import toast, { Toaster } from 'react-hot-toast';
import { Link as LinkIcon, Linkedin, Twitter } from 'mdi-material-ui';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// @ts-ignore
import TextClamp from 'react-string-clamp';

import { Post } from '@/interfaces';
import { LIGHT_GREY, OFF_BLACK, OFF_WHITE } from '../theme';

const useStyles = makeStyles()(theme => ({
    root: {
        backgroundColor: OFF_WHITE,
        display: 'flex',
        flexDirection: 'column',
        width: '100vw'
    },

    header: {
        color: '#252525',
        fontWeight: 500,
        marginTop: theme.spacing(1),
        textAlign: 'center'
    },

    subtitle: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2)
        }
    },

    slider: {
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1)
    },

    card: {
        marginLeft: theme.spacing(5),
        marginRight: theme.spacing(5)
    },

    media: {
        height: 200
    },

    postTitle: {
        color: OFF_BLACK,
        fontWeight: 500,
        textDecoration: 'none'
    },

    button: {
        marginTop: theme.spacing(2)
    },

    footer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    date: {
        color: LIGHT_GREY,
        fontWeight: 300
    },

    iconButton: {
        '&:hover': {
            color: OFF_WHITE,
            backgroundColor: theme.palette.primary.main
        }
    },

    icon: {
        color: LIGHT_GREY
    },

    menu: {
        '&:hover': {
            icon: {
                color: 'red'
            }
        }
    },

    buttonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
}));

interface BlogProps {
    posts: Post[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
    const { classes } = useStyles();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1920 },
            items: 4,
            slidesToSlide: 4
        },

        desktop: {
            breakpoint: { max: 1920, min: 1024 },
            items: 3,
            slidesToSlide: 3
        },

        tablet: {
            breakpoint: { max: 1024, min: 768 },
            items: 2,
            slidesToSlide: 2
        },

        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <section className={clsx('animate__animated animate__animate__fadeIn', classes.root)}>
            <Typography variant="h4" className={classes.header}>The CyberKach Blog</Typography>
            <Typography variant="body2" className={classes.subtitle}>Visit our Blog to understand key cybersecurity concepts...</Typography>
            <Carousel 
                responsive={responsive}
                containerClass={classes.slider}
                // autoPlay
                transitionDuration={3000}
                infinite
                ssr={true}
            >
                {posts.length > 0 && posts.map(post => (
                    <Post 
                        key={post._id}
                        post={post}
                    />
                ))}
            </Carousel>
            <div className={classes.buttonContainer}>
                <Button 
                    className={classes.button} 
                    component={Link} 
                    href="/blog" 
                    variant="outlined" 
                    color="primary"
                    endIcon={<ArrowRight />}
                >
                    Read More
                </Button>
            </div>
        </section>
    );
}

interface PostProps {
    post: Post;
}

const Post: React.FC<PostProps> = ({ post }) => {
    const { classes } = useStyles();

    const { imageUrl, title, slug, createdAt } = post;

    const URL = `${window.location.origin}/blog/${slug}`;

    const [anchorElement, setAnchorElement] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        setAnchorElement(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorElement(null);
    };

    const clickToCopy = async () => {
        await navigator.clipboard.writeText(URL);
        toast.success('Link copied!');
    };

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={imageUrl!}
            />
            <CardContent>
                <Tooltip title={title} placement="top-start" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }} arrow>
                    <Typography variant="h6">
                        <Link href="" className={classes.postTitle}>
                            <TextClamp text={title} lines={2} />
                        </Link>
                    </Typography>
                </Tooltip>
                <Button className={classes.button} variant="outlined" component={Link} href="" color="primary">View Post</Button>
            </CardContent>
            <CardActions disableSpacing className={classes.footer}>
                <Typography variant="subtitle2" className={classes.date}>
                    <CalendarIcon />
                    <span style={{ position: 'relative', top: -5, left: 10 }}>{moment(createdAt).format('MMM Do, YYYY')}</span>
                </Typography>
                <Tooltip title="Share Post" placement="top" TransitionComponent={Zoom} TransitionProps={{ timeout: 300 }} arrow>
                    <IconButton 
                        aria-controls="share-menu" 
                        aria-haspopup="true" 
                        className={classes.iconButton}
                        onClick={handleClick}
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
                    <MenuItem className={classes.menu} onClick={clickToCopy}>
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
                            title={title}
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
                            title={title}
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
            </CardActions>
        </Card>
    );
};

export default Blog;