import Link from 'next/link';
import { Lilita_One } from 'next/font/google';
import React from 'react';
import { BackArrowIcon } from './Icons';

const font = Lilita_One({ weight: '400', subsets: ['latin'] });

export const CMSNavbar = () => {
	return (
		<div className='flex justify-between items-center py-1 px-5 bg-amber-50 dark:bg-slate-950'>
			<Link href='/'>
				<BackArrowIcon />
			</Link>
			<div className={`${font.className} text-3xl dark:text-amber-50`}>
				Dev
				<span className='text-purple-500'>Space</span>
				<sup className='text-sm'> CMS</sup>
			</div>
		</div>
	);
};

export default CMSNavbar;
