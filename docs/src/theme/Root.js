import React from 'react';
import { MantineProvider } from '@mantine/core';
import { useColorMode } from '@docusaurus/theme-common';

export default function Root({ children }) {
    // const { colorMode } = useColorMode();
    const theme = {
        // colorScheme: colorMode,
    };

    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
}
