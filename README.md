BahamasFixit
=========

Intro
-----

This repo is to be used for all code related to the Fixit project for CS184. The project is currently being worked on by Wesley Leung, John YS and Diana Lee. 

Instructions
------------

When working on the project, make sure to add any new files as folders describing what it's for. The top level is currently for the django server so that it runs properly on Heroku. There is a ParseCloud folder containing the code files for custom code uploaded to Parse. iOS app files are located in the Xcode folder, and front-end web is under HTML.

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
git checkout -b my-new-feature-branch
git push -u origin my-new-feature-branch
```
