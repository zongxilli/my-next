import Image from 'next/image';

import logo from '@/../public/logo.svg';

import LogInForm from './components/loginForm';

const LoginPage = () => {
	return (
		<div className='flex h-svh items-center'>
			<div className='fixed top-10 left-10 flex items-center gap-2 text-lg font-medium'>
				<Image
					src={logo}
					alt='logo'
					width='20'
					height='20'
					className='w-10 h-10'
				/>
			</div>
			<LogInForm />
		</div>
	);
};

export default LoginPage;
