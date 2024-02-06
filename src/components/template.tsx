
import { FC, ReactNode } from "react";
import AppBar from "./appbar";

interface IProps {
    children: ReactNode
}

export const Template: FC<IProps> = ({ children }) => {

    return (
        <div className="relative w-full h-full bg-slate-900 text-slate-100 transition-all ease-in-out dark:bg-neutral-900 dark:text-slate-100">
            <AppBar />
            <div>
                {children}
            </div>
        </div>
    );
}
