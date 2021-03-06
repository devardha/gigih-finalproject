import React from 'react';
import { Box, Button, Flex, Text, Heading } from '@chakra-ui/react';
import handleAuth from '../utils/auth';
import RenderLottie from '../Lottie';
import data from '../data/lottie/spotify-logo.json';

function Login() {
	return (
		<Box>
			<Flex
				justifyContent="center"
				alignItems="center"
				flexDirection="column"
				height="100vh"
			>
				<Box marginBottom={10} maxW="lg">
					<Flex justifyContent="center">
						<RenderLottie data={data} w={300} />
					</Flex>
					<Heading
						as="h1"
						fontSize={52}
						color="white"
						textAlign="center"
						marginBottom={5}
					>
						Create your perfect playlist easily
					</Heading>
					<Text
						textAlign="center"
						color="whiteAlpha.500"
						fontSize={18}
					>
						Please login to access the app
					</Text>
				</Box>
				<Button
					type="button"
					onClick={() => handleAuth()}
					background="#1DB954"
					color="white"
					_hover={{ background: '#1CAF50' }}
					_active={{ background: '#1CAF50' }}
				>
					Login with Spotify
				</Button>
			</Flex>
		</Box>
	);
}

export default Login;
