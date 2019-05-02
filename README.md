# express-ts

> 🚀 Quick Start BackEnd (Node/TypeScript/Express/TypeORM)

## Key Points

1. Use rebase autosquash `git rebase -i --autosquash develop`
2. Remove removed branches `` git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done ``
3. Watch concurrently `"watch": "concurrently -k -p \"[{name}]\" -n \"TypeScript,Node\" -c \"cyan.bold,green.bold\" \"npm run watch-ts\" \"npm run watch-node\""`
4. Check unused packages `npm i -g depcheck`
5. Check outdated packages `npm i -g npm-check-updates`
6. Check security vulnerabilities `npm i -g snyk`

## TODO

- [ ] directory plural
- [ ] error handler
- [ ] API Implement (board-get/post/put/patch/delete)
- [ ] multer validator check - filter/limits (board-post/put)
- [ ] TypeORM migration
- [ ] jwt auth (user)
- [ ] jest init


## Handler pipe

1. security issue - forbidden(403)
2. auth (401)
3. validator(route.validator+ multer) (400)
4. action(404)
5. server error(500)

## Error msg

```json
{
  "code": 404,
  "message": "User Not Founded",
  "description": "user is not founded"
}
```
```json
{
  "code": 400,
  "message": "Bad Request",
  "description": express-validator error message
}
```