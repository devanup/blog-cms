'use client';
import React, { createContext, useContext, useReducer } from 'react';
import { ThemeProvider } from 'next-themes';

interface Props {
	children: React.ReactNode;
}

export const Provider = ({ children }: Props) => {
	return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
}; // This serves as a custom provider that runs on the client side.
