import { format } from 'date-fns';

export function formatWorkToDisplay(work) {
    return work.currentlyWorking ?
        `${work.position ? work.position : 'Works'} ${work.company ? ' at ': ''}` :
        `${work.position ? 'Former ' + work.position : 'Worked'} ${work.company ? ' at ': ''}`;
}

export function formatEducationToDisplay(education) {
    const HIGH_SCHOOL = 1;
    const COLLEGE = 2;

    switch (education.type) {
        case HIGH_SCHOOL:
            return `${education.currentlyStudying ? 'Goes to ' : 'Went to '}`;
        case COLLEGE:
            return `${education.currentlyStudying ? 'Studies ' : 'Studied '}${education.courseName ? education.courseName + ' ' : ''}${education.schoolName ? 'at ' : ''}`;
        default:
            return '';
    }
}

export function formatRelationshipToDisplay(relationship) {
    const SINGLE = 1;
    
    switch (relationship.type) {
        case SINGLE:
            return `Single`;
        default:
            return '';
    }
}

export function formatJoinedAtToDisplay(joinedAt) {
    return format(new Date(joinedAt), "'Joined' MMMM yyyy");
}

export function formatPostDate(postedAt) {
    return format(new Date(postedAt), "d MMMM, yyyy");
}


