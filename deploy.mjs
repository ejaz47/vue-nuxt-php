#!/usr/bin/env node

import { $ } from 'execa';
import fs from 'fs';
import shell from 'shelljs';

const datetime = new Date();
const commitDate = datetime.toISOString().slice(0,10);

(async function (branchDeploy = 'build', buildFolder = 'dist', temporaryFolder = 'temp') {
  const remoteHost = (await $`git config --get remote.origin.url`).stdout.trim();
  if (fs.existsSync(temporaryFolder)){
    shell.rm('-rf', `${temporaryFolder}`);
  }
  await $`git clone --branch ${branchDeploy}  ${remoteHost} ${temporaryFolder}`;

  // Copy files to release dir
  shell.rm('-rf', `./${temporaryFolder}/*`);
  shell.cp('-R', `./${buildFolder}/.`, `./${temporaryFolder}/`);

  shell.cd(`./${temporaryFolder}`);
  if ((await $`git ls-files --others -d -m`).stdout.trim()) {
    await $`git add .`;
    await $`git commit -m "LocalPublish${commitDate}"`;
    await $`git push origin ${branchDeploy}`;
    console.log('Publlished successfully!');
  } else { console.log('No changes to publish'); }
  shell.cd('..');

  shell.rm('-rf', `${temporaryFolder}`);
})();
