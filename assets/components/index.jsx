import React from 'react';
import { render } from 'react-dom';
import Cv from './Cv';

const rootReactElement = (
    <Cv />
);

if (document.getElementById('cv')) {
    const target = document.getElementById('cv');
        render(rootReactElement, target);
}


