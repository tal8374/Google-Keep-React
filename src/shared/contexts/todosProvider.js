import React, { useState, useReducer, createContext, useContext } from 'react';

const reducer = (state = [], action = {}) => {
    const mutatedItem = action.payload;
    if (!mutatedItem) { return }
    const mutatedIndex = state.findIndex((item) => item.id === mutatedItem.id);
    switch (action.type) {
        case "CREATED":
            if (mutatedIndex < 0) {
                state.push(mutatedItem);
            }
            break;
        case "DELETED":
            if (mutatedIndex >= 0) {
                state.splice(mutatedIndex, 1);
            }
            break;
        case "UPDATED":
            state[mutatedIndex] = mutatedItem;
            break;
        default:
    }
    return [...state];
}

const LabelsContext = createContext([]);
const TodosContext = createContext([]);
const SelectedLabelContext = createContext(null);

export function TodosProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);
    return <TodosContext.Provider value={[state, dispatch]}>{children}</TodosContext.Provider>;
}

export function LabelsProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, [{ id: 1, name: 'aaa' }]);
    return <LabelsContext.Provider value={[state, dispatch]}>{children}</LabelsContext.Provider>;
}

export function SelectedLabelProvider({ children }) {
    const [selectedLabel, setSelectedLabel] = useState(null)
    return <SelectedLabelContext.Provider value={{ selectedLabel, setSelectedLabel }}>{children}</SelectedLabelContext.Provider>;
}

export const useLabelsStore = () => useContext(LabelsContext);
export const useTodosStore = () => useContext(TodosContext);
export const useSelectedLabelStore = () => useContext(SelectedLabelContext);