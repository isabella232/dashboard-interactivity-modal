import React from 'react';

import layout from '@splunk/react-page';
import Modalcomponent from '@splunk/modalcomponent';
import { SplunkThemeProvider } from '@splunk/themes';

import { defaultTheme, getThemeOptions } from '@splunk/splunk-utils/themes';

import { StyledContainer, StyledGreeting } from './StartStyles';

const themeProviderSettings = getThemeOptions(defaultTheme() || 'enterprise');

layout(
    <SplunkThemeProvider {...themeProviderSettings}>
        <StyledContainer>
            <StyledGreeting>Hello, from inside ModalDashboard!</StyledGreeting>
            <div>Your component will appear below.</div>
            <Modalcomponent name="from inside Modalcomponent" />
        </StyledContainer>
    </SplunkThemeProvider>
);
