import { useRef } from 'react';

import DislikeIcon from './DislikeIcon';

export default function DislikeButton(): JSX.Element {
    const count = useRef(0);
    count.current++;

    return (
        <button>
            <DislikeIcon />
            {count.current}
        </button>
    );
}
