
import { FC, ReactNode } from "react";
import AppBar from "./appbar";

interface IProps {
    children: ReactNode
}

export const Template: FC<IProps> = ({ children }) => {

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-100 transition-all ease-in-out dark:bg-neutral-900 dark:text-slate-100">
            <AppBar />
            <div>
                {children}
            </div>
            <div className="fixed bottom-2 -left-20 z-50 bg-indigo-800 py-2 text-xs rotate-45 w-52 text-center">
                DEV
            </div>
        </div>
    );
}
