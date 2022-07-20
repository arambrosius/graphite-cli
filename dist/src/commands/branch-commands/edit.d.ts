import yargs from 'yargs';
declare const args: {};
declare type argsT = yargs.Arguments<yargs.InferredOptionTypes<typeof args>>;
export declare const aliases: string[];
export declare const command = "edit";
export declare const canonical = "branch edit";
export declare const description = "Run an interactive rebase on the current branch's commits and restack upstack branches.";
export declare const builder: {};
export declare const handler: (argv: argsT) => Promise<void>;
export {};
