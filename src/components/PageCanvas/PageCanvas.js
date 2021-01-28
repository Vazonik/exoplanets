import React from 'react';

import { pageCanvasStyle } from './style';

function PageCanvas(props) {
    const classes = pageCanvasStyle();

    return (
        <div className={classes.root}>
            {props.children}
        </div>
    );
}

export default PageCanvas;