'use client';
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes'; // useTheme runs on the server, but ThemeSwitch is rendered on the client
import { SunIcon, MoonIcon } from './Icons';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []); // useEffect only runs in the client side

	if (!mounted) {
		// If the component is not mounted, return null
		return null;
	}

	return (
		<button
			className='border border-purple-500 rounded-2xl p-1 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
		</button>
	); // If the component is mounted, return a theme switch
};

export default ThemeSwitch;
