import { TContext } from '../lib/context';
export declare function trackBranchInteractive(context: TContext): Promise<boolean>;
export declare function trackBranch(args: {
    branchName: string | undefined;
    parentBranchName: string | undefined;
    force: boolean;
}, context: TContext): Promise<void>;