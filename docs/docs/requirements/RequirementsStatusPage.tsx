import { createTheme, MantineProvider } from '@mantine/core';
import { TableSort } from './Table';
import useThemeContext from '@docusaurus/useDocusaurusContext';
import { useEffect, useState } from 'react';

const theme = createTheme({
    /** Your theme override here */
});


export default function RequirementsStatusPage() {

    // const { isDarkTheme } = useThemeContext();

    // // ugly workaround mantine SSR issue
    // const [forceLightTheme, setForceLightTheme] = useState(false)
    // useEffect(() => {
    //     setForceLightTheme(false)
    // }, [])

    return (
        <TableSort />
    );
}