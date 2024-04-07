import { Char } from "./types";

export interface IState {
    selectedChars: Char[];
    filter: string | undefined;
}
const initalState: IState ={
    selectedChars: [],
    filter:undefined ,
}
export const Reducer = (state = initalState, action: any): IState => {

    const checkAndImportToSelected = (char: Char) => {
        if (state.selectedChars.includes(char))
            return state.selectedChars;
        else
            return state.selectedChars.concat([ action.payload ]);
    }
    switch (action.type) {
        case 'setFilter':
            return { ...state, filter: action.payload };
        case 'selectChar':
            return { ...state, selectedChars: checkAndImportToSelected(action.payload) };
        case 'unSelectChar': 
            return { ...state, selectedChars: state.selectedChars.filter( char => char.id !== action.payload )};
        case 'unSelectLast': 
            return { ...state, selectedChars: state.selectedChars.splice(0, state.selectedChars.length - 1) };
        default:
            return state;
    }
};