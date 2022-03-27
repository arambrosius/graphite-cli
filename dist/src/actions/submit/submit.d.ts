import graphiteCLIRoutes from '@withgraphite/graphite-cli-routes';
import * as t from '@withgraphite/retype';
import { TContext } from '../../lib/context/context';
import { Unpacked } from '../../lib/utils/ts_helpers';
import { Branch } from '../../wrapper-classes/branch';
import { TScope } from '../scope';
export declare type TSubmitScope = TScope | 'BRANCH';
declare type TSubmittedPRRequest = Unpacked<t.UnwrapSchemaMap<typeof graphiteCLIRoutes.submitPullRequests.params>['prs']>;
declare type TSubmittedPRResponse = Unpacked<t.UnwrapSchemaMap<typeof graphiteCLIRoutes.submitPullRequests.response>['prs']>;
declare type TSubmittedPR = {
    request: TSubmittedPRRequest;
    response: TSubmittedPRResponse;
};
export declare function submitAction(args: {
    scope: TSubmitScope;
    editPRFieldsInline: boolean;
    draftToggle: boolean | undefined;
    dryRun: boolean;
    updateOnly: boolean;
    branchesToSubmit?: Branch[];
    reviewers: boolean;
}, context: TContext): Promise<void>;
export declare function saveBranchPRInfo(prs: TSubmittedPR[], context: TContext): void;
export {};