import{
    INVESTIGATIVE_PROJECTS_1_GET,
    INVESTIGATIVE_PROJECTS_2_GET,
    INVESTIGATIVE_PROJECTS_3_GET
}from './../../utils/typeOfActions';

export const investigativeProjects1Get = payload => ({
    type: INVESTIGATIVE_PROJECTS_1_GET,
    payload
});

export const investigativeProjects2Get = payload => ({
    type: INVESTIGATIVE_PROJECTS_2_GET,
    payload
});

export const investigativeProjects3Get = payload => ({
    type: INVESTIGATIVE_PROJECTS_3_GET,
    payload
});