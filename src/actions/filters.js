export const FILTER_DONE='FILTER_DONE';
export const FILTER_UN_DONE='FILTER_UN_DONE';
export const FILTER_ALL='FILTER_ALL';

export const filterDone= () => ({
    type:FILTER_DONE
});

export const filterUnDone= () => ({
    type:FILTER_UN_DONE
});

export const filterAll= () => ({
    type:FILTER_ALL
});