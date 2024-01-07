import { ReactNode } from 'react';
import Link from 'next/link';
import ListItemButton from '@mui/material/ListItemButton';

interface Props {
    children: ReactNode;
    href: string;
    onClick: () => void;
}

const ListItemLink: React.FC<Props> = ({ href, ...rest }) => {
    return <ListItemButton divider component={Link} href={href} {...rest} />;
};

export default ListItemLink;