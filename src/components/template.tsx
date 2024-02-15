
import { FC, ReactNode } from "react";
import AppBar from "./appbar";
import { DevBanner } from "./dev_banner";

interface IProps {
    children: ReactNode
}

export const Template: FC<IProps> = ({ children }) => {

    return (
        <div className="relative min-h-screen bg-slate-900 text-slate-100 transition-all ease-in-out dark:bg-neutral-900 dark:text-slate-100 overflow-x-hidden">
            <AppBar />
            <div>
                {children}
            </div>
            <DevBanner/>
        </div>
    );
}
