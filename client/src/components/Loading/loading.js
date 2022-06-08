import React from 'react';
import s from './Loading.module.css'

export default function Loading () {

    return (
        <div className={s.center}>
            <div className={s.ring}>
                <span>
                    Loading ...
                </span>
            </div>
        </div>
    )

}