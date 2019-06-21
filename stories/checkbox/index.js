import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import CheckBox from '../../src/checkbox';

storiesOf('CheckBox', module)
    .add('normal', () => (
        <CheckBox/>
    ));