export interface skillsType {
    id: string, 
    skillSetName: string,
    skills: Array<string>,
    _id: string
}

export interface otherProjectsType  {
    description: string,
    github: string,
    id: string,
    link: string,
    name: string,
    _id: string
}

export interface projectsType  {
    explanationBulletPoints: string,
    github: string,
    id: string,
    link: string,
    name: string,
    techStack: string,
    timestamp: string,
    _id: string
}

export interface singleFieldsType  {
    id: string,
    text: string,
    _id: string
}

export interface fields  {
    otherProjects: Array<otherProjectsType>, 
    projects: Array<projectsType>, 
    singleFields: Array<singleFieldsType>,
    skills: Array<skillsType> 
}