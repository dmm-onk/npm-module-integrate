import * as React from 'react';
import { Link } from 'react-router-dom';
import {Domain1} from '@dmm-onk/npm-module-domain';

const Sample2:React.FC = () => {
    return(
        <>
            <div>コンポーネント２</div>
            <Domain1 />
            <Link to="/">トップに戻るよ</Link>
        </>
    )
}

export {Sample2}