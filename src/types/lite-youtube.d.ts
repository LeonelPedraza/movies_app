import type React from 'react';

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'lite-youtube': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            > & {
                videoid: string;          // requerido por el WC
                videotitle?: string;
                autoload?: boolean;
                params?: string;          // p.ej. "rel=0&modestbranding=1"
            };
        }
    }
}
export { };
