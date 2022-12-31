import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";


// Set color theme to system default
let initialColorMode = 'light';
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    initialColorMode = 'dark';
}
localStorage.setItem('chakra-ui-color-mode', initialColorMode);

const theme = extendTheme({
    components: {
        Button,
    },
    config: {
        initialColorMode: initialColorMode,
        useSystemColorMode: true,
    },
})

export default theme;