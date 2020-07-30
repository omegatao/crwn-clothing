import { createSelector } from "reselect";

const selecDirectory = (state) => state.directory;

export const selectDirecotorySections = createSelector(
    [selecDirectory],
    (directory) => directory.sections
);
