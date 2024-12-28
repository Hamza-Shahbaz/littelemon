import { Box, Flex, IconButton, Stack, useDisclosure, Image } from '@chakra-ui/react';
import { Link as ChakraLink } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Logo from "../../assets/Logo.svg";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="highlight.100" px={{ base:'2', md:'12' }} >
      <Flex h={16} alignItems="center" justifyContent="space-between" gap={{ base:'5', md:'0' }}>
        {/* Mobile Menu (Hamburger Icon) */}
        <IconButton
          size="md"
          icon={isOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {/* Left: Logo */}
        <Box fontWeight="bold" fontSize="lg">
          <Image loading="lazy" src={Logo} alt="Little Lemon logo" boxSize="140px" />
        </Box>

        {/* Middle: Navigation Links */}
        <Flex alignItems="center" display={{ base: 'none', md: 'flex' }}>
          <Stack direction="row" spacing={4}>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/"
              fontFamily="heading"
              aria-current={window.location.pathname === "/" ? "page" : undefined}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/about"
              fontFamily="heading"
              aria-current={window.location.pathname === "/about" ? "page" : undefined}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/menu"
              fontFamily="heading"
              aria-current={window.location.pathname === "/menu" ? "page" : undefined}
            >
              Menu
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/reservation"
              fontFamily="heading"
              aria-current={window.location.pathname === "/reservation" ? "page" : undefined}
            >
              Reservation
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/order-online"
              fontFamily="heading"
              aria-current={window.location.pathname === "/order-online" ? "page" : undefined}
            >
              Order Online
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/login"
              fontFamily="heading"
              aria-current={window.location.pathname === "/login" ? "page" : undefined}
            >
              Login
            </ChakraLink>
          </Stack>
        </Flex>

        {/* Right: Cart Icon */}
        <Box
          _hover={{
            cursor: 'pointer',
            color: 'secondary.100',
            transform: 'scale(1.05)',
          }}
          aria-label="Shopping Cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        </Box>
      </Flex>

      {/* Mobile Menu Links */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/"
              fontFamily="heading"
              aria-current={window.location.pathname === "/" ? "page" : undefined}
            >
              Home
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/about"
              fontFamily="heading"
              aria-current={window.location.pathname === "/about" ? "page" : undefined}
            >
              About
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/menu"
              fontFamily="heading"
              aria-current={window.location.pathname === "/menu" ? "page" : undefined}
            >
              Menu
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/reservation"
              fontFamily="heading"
              aria-current={window.location.pathname === "/reservation" ? "page" : undefined}
            >
              Reservation
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/order-online"
              fontFamily="heading"
              aria-current={window.location.pathname === "/order-online" ? "page" : undefined}
            >
              Order Online
            </ChakraLink>
            <ChakraLink
              as={RouterLink}
              px={2} py={1} rounded="md"
              _hover={{
                textDecoration: 'none',
                bg: 'secondary.100',
              }}
              to="/login"
              fontFamily="heading"
              aria-current={window.location.pathname === "/login" ? "page" : undefined}
            >
              Login
            </ChakraLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Header;