# idk

> i dont know what is this project

## Key Points

1. ```git rebase -i --autosquash develop```
2. ```git fetch -p && for branch in `git branch -vv --no-color | grep ': gone]' | awk '{print $1}'`; do git branch -D $branch; done```