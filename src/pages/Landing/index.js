import './index.css';
import reactLogo from '../../react-logo.svg';
import netlifyCMSLogo from '../../netlify-cms-logo.svg';
import netlifyCMSLogoDark from '../../netlify-cms-logo-dark.svg';
import { useColorMode } from '@chakra-ui/color-mode';
import { Stack } from '@chakra-ui/react';

function Landing() {
    const { colorMode } = useColorMode();
    return <div className="landing-container">
        <Stack className='logo-container' p={[2, 8, 16]} style={{marginTop: '32px'}} spacing={2}>
            <span><img src={reactLogo} className="React-logo" alt="react logo" /></span>
            <span> + </span>
            <span><img src={colorMode==='dark' ? netlifyCMSLogoDark : netlifyCMSLogo} className="Netlify-CMS-logo" alt="netlify logo" /></span>
        </Stack>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
    </div>;
}

export default Landing;
