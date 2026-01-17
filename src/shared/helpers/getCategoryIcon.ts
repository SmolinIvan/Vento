import { CategoryIcons } from '../dishSVG';

export const getCategoryIcon = (type: string): JSX.Element => {
    return CategoryIcons[type as keyof typeof CategoryIcons] || CategoryIcons.all;
};
