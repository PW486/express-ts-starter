# express-ts-starter

> 🚀 Quick Start TypeScript Express

## Key Points

1. Use rebase autosquash `git rebase -i --autosquash develop`
2. Remove removed branches `` git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done ``
3. Check unused packages `npm i -g depcheck`
4. Check outdated packages `npm i -g npm-check-updates`
5. Check security vulnerabilities `npm i -g snyk`

## refactoring & cleaning & writing readme

1. action -> handler directory
2. function action directory

## Generate Migration

1. Auto generate `typeorm migration:generate -n <migration-name>`
2. Empty file create `typeorm migration:create -n <migration-name>`
3. Run migration `typeorm migration:run`
4. Revert migration `typeorm migration:revert`