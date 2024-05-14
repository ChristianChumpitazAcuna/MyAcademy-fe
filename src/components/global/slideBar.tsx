import { NavLink } from "react-router-dom";
import { IArrowDown, IDashboard, INotes, ISignOut, ISignup, IUser } from "../../ui/svgs";
import { useState } from "react";
import DarkmodeSwitch from "./darkMode";

export default function SlideBar() {
    const [showSubMenu, setShowSubMenu] = useState(false);

    return (
        <aside className="top-0 left-0 z-40 w-1/6 h-screen">
            <div className="h-full px-3 py-4 overflow-y-auto rounded-r-3xl bg-white dark:bg-gray-800 ">
                <ul className="space-y-2 font-medium">
                    <li>
                        <NavLink to={"*"}
                            className="flex items-center p-2 rounded-lg text-slate-500 dark:text-white hover:bg-slate-100 
                            dark:hover:bg-gray-700 focus:bg-slate-100 dark:focus:bg-gray-900 group">
                            <IDashboard />
                            <span className="ms-3">Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={() => setShowSubMenu(!showSubMenu)} type="button"
                            className="flex items-center w-full p-2 rounded-lg text-slate-500 dark:text-white hover:bg-slate-100
                            dark:hover:bg-gray-700 focus:bg-slate-100 dark:focus:bg-gray-900 group">
                            <IUser />
                            <span className="flex-1 ms-3 text-left">Users</span>
                            <IArrowDown />
                        </button>
                        <ul className={showSubMenu ? "py-2 text-sm" : "hidden"}>
                            <li>
                                <NavLink to="/student"
                                    className="flex items-center w-full p-2 text-slate-500 dark:text-zinc-200 pl-10 group
                                    bg-slate-100/70 dark:bg-gray-900/40 hover:bg-slate-200 dark:hover:bg-gray-700">Students</NavLink>
                            </li>
                            <li>
                                <NavLink to="*"
                                    className="flex items-center w-full p-2 text-slate-500 dark:text-zinc-200 pl-10 group
                                    bg-slate-100/70 dark:bg-gray-900/40 hover:bg-slate-200 dark:hover:bg-gray-700">Teachers</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={"/notes"}
                            className="flex items-center p-2 rounded-lg text-slate-500 dark:text-white hover:bg-slate-100
                            dark:hover:bg-gray-700 focus:bg-slate-100 dark:focus:bg-gray-900 group">
                            <INotes />
                            <span className="flex-1 ms-3">Notes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"*"}
                            className="flex items-center p-2 rounded-lg text-slate-500 dark:text-white hover:bg-slate-100
                            dark:hover:bg-gray-700 focus:bg-slate-100 dark:focus:bg-gray-900 group">
                            <ISignup />
                            <span className="flex-1 ms-3">Sign In</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"*"}
                            className="flex items-center p-2 rounded-lg text-slate-500 dark:text-white hover:bg-slate-100
                            dark:hover:bg-gray-700 focus:bg-slate-100 dark:focus:bg-gray-900 group">
                            <ISignOut />
                            <span className="flex-1 ms-3">Sign Up</span>
                        </NavLink>
                    </li>

                    <li>
                        <DarkmodeSwitch />
                    </li>

                </ul>
            </div>
        </aside>
    );
}