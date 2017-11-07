import { setTab } from './../../../files/components/navbar/actionNavbar';

describe('Testing the navbar keys', () => {
    test('should set the tab to home', () => {
        const action = setTab();
        expect(action).toEqual({
            type: 'SET_TAB',
            current: 'home'
        });
    });
    test('should set the tab to home', () => {
        const action = setTab('home');
        expect(action).toEqual({
            type: 'SET_TAB',
            current: 'home'
        });
    });
    test('should set the tab to about', () => {
        const action = setTab('about');
        expect(action).toEqual({
            type: 'SET_TAB',
            current: 'about'
        });
    });
});