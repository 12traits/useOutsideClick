import { renderHook } from '@testing-library/react-hooks';
import useOutsideClick from './useOutsideClick';

describe('Test useOutsideClick hook', () => {
  it('useOutsideClick handler should be called one time after mousedown on document', () => {
    const element = document.createElement('div');
    const handler = jest.fn();
    renderHook(() => useOutsideClick({ current: element }, [], handler));
    expect(handler).not.toHaveBeenCalled();
    document.dispatchEvent(new Event('mousedown'));
    expect(handler).toHaveBeenCalled();
  });

  it('useOutsideClick handler should not be called for mousedown on not include elements', () => {
    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const handler = jest.fn();
    renderHook(() =>
      useOutsideClick({ current: element }, [{ current: element1 }, { current: null }], handler)
    );
    expect(handler).not.toHaveBeenCalled();
    element1.dispatchEvent(new Event('mousedown'));
    expect(handler).not.toHaveBeenCalled();
    element.dispatchEvent(new Event('mousedown'));
    expect(handler).not.toHaveBeenCalled();
    document.dispatchEvent(new Event('mousedown'));
    expect(handler).toHaveBeenCalled();
  });
});
