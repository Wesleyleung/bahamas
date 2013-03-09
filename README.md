bahamas
=======

cs184

To run:
After cloning, check that you have the following dependencies:
npm -v
node -v

Install and run node web.js

Git
---
We're going to follow the branching model described [here](http://nvie.com/posts/a-successful-git-branching-model/).
Basically the master branch is reserved for the live code. You should never be working in the master branch, instead branch off of develop for each feature you're working on, and merge back into develop when you're done. Changes in develop can then be merged into master and become live. Use pull requests to merge code in so that everybody sees what's going on and it's easier to keep track of updates as they come in.

To checkout the develop branch for the first time after cloning:
```
git checkout -t origin/develop
```
Then to checkout your own feature branch and push to GitHub so that we can all see (make sure to do this while in the develop branch):
```
git checkout develop
git checkout -b feature/my-new-feature-branch
git push -u origin feature/my-new-feature-branch
```

Once your branch is ready to merge in, open a pull request and assign it to somebody for review. Once they approve you can merge it. Make sure to merge into ```develop``` only! The ```master``` branch should only ever have merges from ```develop```. Example below:
```
git checkout develop
git merge --no-ff feature/my-finished-feature-branch
git push origin develop
```
The pull request will automatically be closed.

Once we're happy with ```develop``` we can merge into ```master``` to go live. Open a pull request from ```develop``` into ```master``` and:
```
git checkout master
git merge --no-ff develop
git push origin master
```
Note: ```no-ff``` is a "no fast forward" tag. Basically it makes sure that we keep all merge data and can see which branches are merging where.

Let's keep the repo clean and well organized!
