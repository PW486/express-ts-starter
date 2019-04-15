# idk

> i dont know what is this project

## Key Points

1. ```git rebase -i --autosquash develop```
2. ```git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done```
3. ```"watch": "concurrently -k -p \"[{name}]\" -n \"TypeScript,Node\" -c \"cyan.bold,green.bold\" \"npm run watch-ts\" \"npm run watch-node\""```
4. unused packages ```npm i -g depcheck```
5. outdated packages ```npm i -g npm-check-updates```
6. check security vulnerabilities ```npm i -g snyk```