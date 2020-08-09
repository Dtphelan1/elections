import React, { useRef, useState } from 'react';
import Slide from 'react-reveal/Fade';

let i = 0;

const formatContent = (i, desc) => `[${i}]: ${desc}`


function onClick(ref, i, desc) {
    const curContent = ref.current.textContent;
    const curOpacity = ref.current.style.opacity;
    const newContent = formatContent(i, desc)
    if (curContent !== newContent || curOpacity !== 1) {
        ref.current.childNodes[0].childNodes[0].textContent = newContent;
        ref.current.style.opacity = 1;
        ref.current.style.visibility = "visible";
    }
}

const closeFootnote = (ref) => {
    ref.current.style.opacity = 0;
    ref.current.style.visibility = "hidden";
}

const FootnoteGenerator = React.forwardRef((props, ref) => {
    i += 1;
    const localI = i;
    const { desc } = props;
    (desc === undefined) && console.warn("Trying to create a footnote without a description");
    return (
        <sup onClick={() => onClick(ref, localI, desc)}>
            [{i}]
        </sup >
    );
});

const Footnote = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="shadow footnote-text">
            <div className="container d-flex justify-content-between align-items-start">
                <div className="text">

                </div>
                <button type="button" class="close" onClick={() => closeFootnote(ref)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
});

export {
    FootnoteGenerator, Footnote
}