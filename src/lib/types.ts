export enum NodeTypes {
    METRIC = 'METRIC', 
    ALEX = 'ALEX', 
    SUBMETRIC = 'SUBMETRIC', 
    FEATURE = 'FEATURE',
    COMPUTATIONAL_TEMP = 'COMPUTATIONAL_TEMP'
};

export interface INodeAttributes {
    name: string;
    varId: string;
    type: NodeTypes;
    labels: Array<string>;
    domains: Array<string>;
    description: string;
    value: number;
}

export interface ICrNode {
    id: string;
    attributes: INodeAttributes;
}

export interface IModelMetadata {
    labels: Array<string>;
    domains: Array<string>;
}