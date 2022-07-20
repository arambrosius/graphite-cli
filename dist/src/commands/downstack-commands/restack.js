"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.description = exports.canonical = exports.command = exports.aliases = void 0;
const restack_1 = require("../../actions/restack");
const scope_spec_1 = require("../../lib/engine/scope_spec");
const runner_1 = require("../../lib/runner");
const args = {};
exports.aliases = ['r'];
exports.command = 'restack';
exports.canonical = 'downstack restack';
exports.description = 'From trunk to the current branch, ensure each is based on its parent, rebasing if necessary.';
exports.builder = args;
const handler = async (argv) => (0, runner_1.graphite)(argv, exports.canonical, async (context) => {
    context.splog.tip([
        `You are restacking with downstack scope.`,
        `In common cases, we recommend you use:`,
        `▸ gt stack restack`,
        `▸ gt upstack restack`,
        `because these will ensure any upstack branches will be restacked on their restacked parents.`,
        `If the current branch has any descendants, they will likely need a restack after this command.`,
    ].join('\n'));
    (0, restack_1.restackBranches)(context.metaCache.getRelativeStack(context.metaCache.currentBranchPrecondition, scope_spec_1.SCOPE.DOWNSTACK), context);
});
exports.handler = handler;
//# sourceMappingURL=restack.js.map