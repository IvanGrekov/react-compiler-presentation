import { Dispatch, SetStateAction } from 'react';

import LikeIcon from './LikeIcon';

interface ILikeButtonProps {
    likeCount: number;
    setLikeCount: Dispatch<SetStateAction<number>>;
}

export default function LikeButton({ likeCount, setLikeCount }: ILikeButtonProps): JSX.Element {
    const handleClick = (): void => {
        setLikeCount((prevCount) => prevCount + 1);
    };

    return (
        <button onClick={handleClick}>
            <LikeIcon />
            {likeCount}
        </button>
    );
}
