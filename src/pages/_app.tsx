/**
 * @brief Defines global layout that will be applied across all pages of the application.
 * @note A required file for Next.js.
 * @refer https://nextjs.org/docs/pages/building-your-application/routing/custom-app
 */
import type { AppProps } from 'next/app';

// import '@/assets/css/custom_css.css';
import '@/styles/globals-desktop.css';
import '@/styles/globals-mobile.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} /> {/* Currently active page */}
        </div>
    );
}
