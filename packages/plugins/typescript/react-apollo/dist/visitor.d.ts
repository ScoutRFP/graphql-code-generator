import { ClientSideBaseVisitor, ClientSideBasePluginConfig, LoadedFragment } from '@graphql-codegen/visitor-plugin-common';
import { ReactApolloRawPluginConfig } from './config';
import { OperationDefinitionNode } from 'graphql';
import { Types } from '@graphql-codegen/plugin-helpers';
import { GraphQLSchema } from 'graphql';
export interface ReactApolloPluginConfig extends ClientSideBasePluginConfig {
    withComponent: boolean;
    withHOC: boolean;
    withHooks: boolean;
    withMutationFn: boolean;
    apolloReactCommonImportFrom: string;
    apolloReactComponentsImportFrom: string;
    apolloReactHocImportFrom: string;
    apolloReactHooksImportFrom: string;
    componentSuffix: string;
    reactApolloVersion: 2 | 3;
    withResultType: boolean;
    withMutationOptionsType: boolean;
    addDocBlocks: boolean;
}
export declare class ReactApolloVisitor extends ClientSideBaseVisitor<ReactApolloRawPluginConfig, ReactApolloPluginConfig> {
    private _externalImportPrefix;
    private imports;
    constructor(schema: GraphQLSchema, fragments: LoadedFragment[], rawConfig: ReactApolloRawPluginConfig, documents: Types.DocumentFile[]);
    private getReactImport;
    private getApolloReactCommonImport;
    private getApolloReactComponentsImport;
    private getApolloReactHocImport;
    private getApolloReactHooksImport;
    private getOmitDeclaration;
    private getDocumentNodeVariable;
    getImports(): string[];
    private _buildHocProps;
    private _buildMutationFn;
    private _buildOperationHoc;
    private _buildComponent;
    private _buildHooksJSDoc;
    private _buildHooks;
    private _getHookSuffix;
    private _buildResultType;
    private _buildWithMutationOptionsType;
    protected buildOperation(node: OperationDefinitionNode, documentVariableName: string, operationType: string, operationResultType: string, operationVariablesTypes: string): string;
}
