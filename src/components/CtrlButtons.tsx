import { useState } from 'react';

import '../App.css';

import DislikeButton from './DislikeButton';
import LikeButton from './LikeButton';

export default function CtrlButtons(): JSX.Element {
    const [likeCount, setLikeCount] = useState(5);

    return (
        <div className="ctrl-buttons">
            <LikeButton likeCount={likeCount} setLikeCount={setLikeCount} />
            <DislikeButton />
        </div>
    );
}
