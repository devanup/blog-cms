import Link from 'next/link';
import React from 'react';

interface Props {
	title: string;
	tags?: boolean;
}

const Header = ({ title = '', tags = false }: Props) => {
	return (
		<header className='py-14 px-4 mb-12 text-center border-b dark:border-purple-900'>
			<h2 className='uppercase text-2xl mx-auto max-w-2xl font-bold'>
				{title}
			</h2>
			{tags && (
				<div className='mt-5'>
					<Link href='/tag'>
						<span
							className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900 hover:text-purple-500
						transition-colors
						'
						>
							#tags
						</span>
					</Link>
				</div>
			)}
		</header>
	);
};

export default Header;
