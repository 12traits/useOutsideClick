import { MutableRefObject, useEffect } from 'react';

const useOutsideClick = (
    ref: MutableRefObject<any>,
    include: MutableRefObject<any>[],
    onClickOutside: () => void
): void => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
            if (
                ref.current &&
                !ref.current.contains(event.target) &&
                !include.some(includeRef => includeRef.current?.contains(event.target))
            ) {
                onClickOutside();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return (): void => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside, include]);
};

export default useOutsideClick;
