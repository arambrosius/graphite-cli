"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs_extra_1 = __importDefault(require("fs-extra"));
const message_config_1 = require("../../../../src/lib/config/message_config");
const scenes_1 = require("../../../lib/scenes");
const utils_1 = require("../../../lib/utils");
for (const scene of [new scenes_1.BasicScene()]) {
    describe(`(${scene}): upgrade message`, function () {
        utils_1.configureTest(this, scene);
        const messageConfig = message_config_1.messageConfigFactory.load();
        it('Sanity check - can read previously written message config', () => {
            var _a, _b;
            const contents = 'Hello world!';
            const cliVersion = '0.0.0';
            messageConfig.update((data) => (data.message = {
                contents: contents,
                cliVersion: cliVersion,
            }));
            const writtenContents = (_a = messageConfig.data.message) === null || _a === void 0 ? void 0 : _a.contents;
            const wirttenCLIVersion = (_b = messageConfig.data.message) === null || _b === void 0 ? void 0 : _b.cliVersion;
            chai_1.expect(writtenContents === contents).to.be.true;
            chai_1.expect(wirttenCLIVersion === cliVersion).to.be.true;
        });
        it('If no message, removes message config file', () => {
            messageConfig.update((data) => (data.message = undefined));
            chai_1.expect(fs_extra_1.default.existsSync(messageConfig.path)).to.be.false;
            // can handle removing the file "twice"
            messageConfig.update((data) => (data.message = undefined));
            chai_1.expect(fs_extra_1.default.existsSync(messageConfig.path)).to.be.false;
        });
        after(() => {
            // Make sure we clean up any temporary contents we wrote to the file.
            // Unlike the auth token, we don't need to worry about re-creating it
            // since the next run of the CLI will just re-fetch the upgrade prompt.
            if (fs_extra_1.default.existsSync(messageConfig.path)) {
                fs_extra_1.default.unlinkSync(messageConfig.path);
            }
        });
    });
}
//# sourceMappingURL=message_config.test.js.map