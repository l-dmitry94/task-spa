import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';
import { ThemeProvider } from '@emotion/react';
import theme from 'constants/theme';

const title = 'Test Title';
const text = 'Test Text';

describe('Banner', () => {
    it('Renders title and text correctly', () => {
        render(
            <ThemeProvider theme={theme}>
                <Banner title={title} text={text} />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Text')).toBeInTheDocument();
    });

    it('Renders only title when text is not provided', () => {
        render(
            <ThemeProvider theme={theme}>
                <Banner title={title} />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.queryByText('Test Text')).toBeNull();
    });

    it('Renders only text when title is not provided', () => {
        render(
            <ThemeProvider theme={theme}>
                <Banner text={text} />
            </ThemeProvider>
        );

        expect(screen.getByText('Test Text')).toBeInTheDocument();
        expect(screen.queryByText('Test Title')).toBeNull();
    });

    it('Renders without title and text', () => {
        render(
            <ThemeProvider theme={theme}>
                <Banner />
            </ThemeProvider>
        );

        expect(screen.queryByText('Test Text')).toBeNull();
        expect(screen.queryByText('Test Title')).toBeNull();
    });
});
