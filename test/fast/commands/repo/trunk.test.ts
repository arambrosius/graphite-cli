import { expect } from 'chai';
import { allScenes } from '../../../lib/scenes/all_scenes';
import { configureTest } from '../../../lib/utils/configure_test';

for (const scene of allScenes) {
  describe(`(${scene}): repo trunk`, function () {
    configureTest(this, scene);

    it('Can infer main trunk', () => {
      scene.repo.createChange('2', 'a');
      scene.repo.execCliCommand("branch create 'a' -m '2' -q");
      expect(
        scene.repo.execCliCommandAndGetOutput('repo trunk').includes('main')
      ).to.be.true;
    });
  });
}
