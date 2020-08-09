import React, { useEffect, useState } from 'react';

let num = 0;

const formatContent = (i, desc) => `[${i}]: ${desc} `

function onClick(ref, num, link, desc, setFootnote) {
    if (ref.current && ref.current.style.opacity !== 1) {
        ref.current.style.opacity = 1;
        ref.current.style.visibility = "visible";
        setFootnote(num, link, desc);
    }
}

const closeFootnote = (ref) => {
    ref.current && (ref.current.style.opacity = 0);
    ref.current && (ref.current.style.visibility = "hidden");
}

const FootnoteGenerator = React.forwardRef((props, ref) => {

    const [localNum, updateLocalNum] = useState()

    useEffect(() => {
        // Incremenet global counter
        num += 1;
        updateLocalNum(num)
    }, [])

    const { desc, link, setFootnote } = props;
    (desc === undefined) && console.warn("Trying to create a footnote without a description");
    return (
        <>
            <sup onClick={() => onClick(ref, localNum, link, desc, setFootnote)}>
                [{localNum}]
            </sup >
            <span> </span>
        </>
    );
});

const Footnote = React.forwardRef((props, ref) => {
    const { footnoteNum, footnoteLink, footnoteDesc } = props;
    return (
        <div ref={ref} className="shadow footnote-container">
            <div className="container d-flex justify-content-between align-items-start">
                <div className="footnote-text">
                    {formatContent(footnoteNum, footnoteDesc)}
                    {footnoteLink && (
                        <div className="d-block">
                            Link: <a href={footnoteLink} target="_blank" rel="noopener noreferrer">{footnoteLink}</a>
                        </div>
                    )}
                </div>
                <button type="button" className="close" onClick={() => closeFootnote(ref)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    );
});

export {
    FootnoteGenerator, Footnote
}