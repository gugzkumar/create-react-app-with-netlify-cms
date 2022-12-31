import {
    Box, Button, Flex, IconButton, Menu, MenuButton,
    MenuItem, MenuList, Show, Spacer, Text,
    useColorMode, useColorModeValue
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import STYLE_CONSTS from '../../styles/consts';
import { StyledHeader } from './index.styled.js';

const NAV_ITEMS = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Blogs',
        href: '/blogs',
    }
];

function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return <StyledHeader
        className="header"
        bg={
            useColorModeValue(
                STYLE_CONSTS.light.PRIMARY_COLOR,
                STYLE_CONSTS.dark.PRIMARY_COLOR
            )
        }
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={
            useColorModeValue(
                STYLE_CONSTS.light.PRIMARY_COLOR_BORDER,
                STYLE_CONSTS.dark.PRIMARY_COLOR_BORDER
            )
        }>
        <Flex alignItems={'center'} width="100%" gap="2">
            <Flex className='logo'>
                <Text
                    as={"b"}
                    fontSize={["sm", "md", "xl"]}>
                    React App With Netlify CMS
                </Text>
            </Flex>
            <Spacer flex='1' />
            <Show above='sm'>
                {
                    NAV_ITEMS.map((navItem) =>
                        <Box key={navItem.label}>
                            <Link
                                to={navItem.href ?? '#'}
                            >
                                <Button colorScheme="blue">
                                    {navItem.label}
                                </Button>
                            </Link>
                        </Box>

                    )
                }
            </Show>
            <Button variant='ghost' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Show below='sm'>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='ghost'
                    />
                    <MenuList>
                        {
                            NAV_ITEMS.map((navItem) =>
                                <Link
                                    key={navItem.label}
                                    to={navItem.href ?? '#'}
                                >
                                    <MenuItem key={navItem.label}>
                                        {navItem.label}
                                    </MenuItem>
                                </Link>

                            )
                        }
                    </MenuList>
                </Menu>
            </Show>
        </Flex>
    </StyledHeader>;
}

export default Header;
