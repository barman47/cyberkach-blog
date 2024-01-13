'use client';

import * as React from 'react';
import Image from 'next/image';
import { 
    IconButton,
    Slider,
    Stack, 
    Tooltip, 
    Typography,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { Pause, Play, Share } from 'mdi-material-ui';
import moment from 'moment';

import { Podcast as PodcastData } from '@/interfaces';

const useStyles = makeStyles()((theme) => ({
    root: {
        borderRadius: theme.shape.borderRadius,

        '&:hover': {
            backgroundColor: '#F2F2F2'
        }
    },

    image: {
        alignSelf: 'stretch',
        width: theme.spacing(20),
        height: theme.spacing(20),

        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(8),
            height: theme.spacing(8),
        }
    },

    title: {
        fontWeight: 600,
        margin: '0 !important',

        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.7)
        }
    },

    description: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.6)
        }
    },

    slider: {
        width: '30%'
    },

    label: {
        [theme.breakpoints.down('sm')]: {
            fontSize: theme.spacing(1.5)
        }
    }
}));

interface Props {
    podcast: PodcastData;
}

const Podcast: React.FC<Props> = ({ podcast }) => {
    const { classes } = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [position, setPosition] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [timeLeft, setTimeLeft] = React.useState(0);

    const audioRef = React.useRef<HTMLAudioElement>(null);

    // update timeLeft when position changes
    React.useEffect(() => {
        if (audioRef) {
            setTimeLeft(duration - position);
        }
    }, [duration, position]);

    // updare the slider while the audio plays and Reset audio player when audio plays to the end
    React.useEffect(() => {
        const updateSlider = () => {
            if (audioRef.current) {
                setPosition(audioRef.current.currentTime);
            }
        };

        const handleResetAudioPlayer = () => {
            if (audioRef.current) {
                pause();
                audioRef.current.currentTime = 0;
            }
        }

        if (audioRef.current) {
            audioRef.current.addEventListener('timeupdate', updateSlider);
            audioRef.current.addEventListener('ended', handleResetAudioPlayer);
        }

        return () => {
            if (audioRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('timeupdate', updateSlider);
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('ended', handleResetAudioPlayer);
            }
        };
    }, [audioRef]);

    // set the initial duration of the audio
    React.useEffect(() => {
        const handleLoadedMetadata = () => {
            if (audioRef.current && audioRef.current.readyState >= 2) {
                setDuration(audioRef.current.duration);
                setTimeLeft(audioRef.current.duration);
            }
        };
      
        if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }
      
        return () => {
            if (audioRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                audioRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, [audioRef.current?.duration]);

    const pause = (): void => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    const play = (): void => {
        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    const formatDuration = (value: number): string => {
        const minutes = Math.floor(value / 60);
        const seconds = parseInt((value - minutes * 60).toFixed(0));
        return `${minutes} ${minutes > 1 ? 'mins' : 'min'} ${seconds < 10 ? `0${seconds}` : seconds} ${seconds === 1 ? 'sec' : 'secs'}`;
    }

    const formatDurationForLabel = (value: number): { minutes: number; seconds: number; } => {
        const minutes = Math.floor(value / 60);
        const seconds = parseInt((value - minutes * 60).toFixed(0));
        return {
            minutes,
            seconds
        };
    }

    const formatLabel = (value: number): string => {
        const { minutes, seconds } = formatDurationForLabel(value);
        return `${minutes}: ${seconds < 10 ? `0${seconds}` : seconds}`;
    };

    return (
        <>
            <audio style={{ display: 'none' }} src={podcast.url} ref={audioRef}></audio>
            {!matches ? 
                <Stack className={classes.root} direction="row" alignItems="center" justifyContent="space-between" component="section">
                    <Stack direction="row" alignItems="center" spacing={3}>
                        <Image 
                            src="/assets/img/podcast.png"
                            width={100}
                            height={100}
                            alt="CyberKach Icon"
                            className={classes.image}
                        />
                        <Stack direction="column">
                            <Typography variant="h6" className={classes.title}>{podcast.title}</Typography>
                            <Typography variant="body1">{podcast.description}</Typography>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                {isPlaying ?
                                    <IconButton onClick={pause}>
                                        <Tooltip title="Pause" arrow placement="top">
                                            <Pause />
                                        </Tooltip>
                                    </IconButton>
                                    :
                                    <IconButton onClick={play}>
                                        <Tooltip title="Play" arrow placement="top">
                                            <Play />
                                        </Tooltip>
                                    </IconButton>
                                }
                                <Typography variant="body1">{moment(podcast.createdAt).format('MMM YYYY')}</Typography>
                                {isPlaying ?
                                    <>
                                        <Slider
                                            size="small"
                                            defaultValue={0}
                                            min={0}
                                            max={duration}
                                            value={position}
                                            aria-label="Small"
                                            valueLabelDisplay="auto"
                                            onChange={(_, value) => {
                                                setPosition(value as number);
                                                if (audioRef.current) {
                                                    audioRef.current.currentTime = value as number;
                                                }
                                            }}
                                            valueLabelFormat={formatLabel}
                                            className={classes.slider}
                                        />
                                        <Typography variant="body1" className={classes.label}>{formatDuration(timeLeft)} left</Typography>
                                    </>
                                    : 
                                    <>
                                        {duration && <Typography variant="body1" className={classes.label}>{formatDuration(duration)}</Typography>}
                                    </>
                                }
                            </Stack>
                        </Stack>
                    </Stack>
                    <IconButton>
                        <Share />
                    </IconButton>
                </Stack>
                :
                <Stack className={classes.root} direction="column" justifyContent="space-between" component="section">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Image 
                            src="/assets/img/icon.png"
                            width={100}
                            height={100}
                            alt="CyberKach Icon"
                            className={classes.image}
                        />
                        <Typography variant="h6" className={classes.title}>{podcast.title}</Typography>
                    </Stack>
                    <Typography variant="body1" className={classes.description}>{podcast.description}</Typography>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
                        {isPlaying ?
                            <IconButton size="small" onClick={pause}>
                                <Tooltip title="Pause" arrow placement="top">
                                    <Pause />
                                </Tooltip>
                            </IconButton>
                            :
                            <IconButton size="small" onClick={play}>
                                <Tooltip title="Play" arrow placement="top">
                                    <Play />
                                </Tooltip>
                            </IconButton>
                        }
                        <Typography variant="body1" className={classes.label}>{moment(podcast.createdAt).format('MMM YYYY')}</Typography>
                        {isPlaying ?
                            <>
                                <Slider
                                    size="small"
                                    defaultValue={0}
                                    min={0}
                                    max={duration}
                                    value={position}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    onChange={(_, value) => {
                                        setPosition(value as number);
                                        if (audioRef.current) {
                                            audioRef.current.currentTime = value as number;
                                        }
                                    }}
                                    valueLabelFormat={formatLabel}
                                    className={classes.slider}
                                />
                                <Typography variant="body1" className={classes.label}>{formatDuration(timeLeft)} left</Typography>
                            </>
                            : 
                            <>
                                {duration && <Typography variant="body1" className={classes.label}>{formatDuration(duration)}</Typography>}
                                <IconButton size="small">
                                    <Share />
                                </IconButton>
                            </>
                        }
                    </Stack>
                </Stack>
            }
        </>
    );
};

export default Podcast;