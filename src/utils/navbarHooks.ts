import { useLocation } from "react-router-dom";


/**
 * This hook compares given path to current path and returns classes for tabs.
 * @param path is a path to compare to.
 * @returns *'bg-main color-dark'* if **match** and *'bg-black color-light'* if **not**;
 */
export function useTabsLayout(path: string): string {
    if (useLocation().pathname === path)
        return 'bg-main color-dark';

    return 'bg-black color-light';
}


/**
 * This hook returns correct placeholder for searchfield depending on a current route.
 * @returns 'Поиск по заказам' or 'Поиск по сообщениям'
 */
export function useSearchLayout():string {
    const path = useLocation().pathname;
    if (path === '/orders')
        return 'Поиск по заказам';
    else if (path === '/messages')
        return 'Поиск по сообщениям';
    throw new Error('The value given does not math any routes ("/orders", "/messages"');
}