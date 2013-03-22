bahamas
=======

cs184

We are building an HTML5 mobile web app that will allow users to capture images and submit Stanford FixIt requests from their mobile device. The application will extract data from the user’s browser location to automatically make inferences for which building the FixIt request is needed. BahamasFixit currently only works on Stanford campus.

After needfinding and interviews, we determined that FixIt employees needed a more efficient way to receive issue requests and get more context about the problem from each request. Currently, Stanford administrators and FixIt employees submit building problems in two ways. The first method is through https://fixit.stanford.edu/, which allows users to list the building name and a textual description of the problem. FixIt employees, however, cannot diagnose the issue remotely nor can they gauge the true nature of the problem without sending an inspector there first. The second method for reporting is through photos and an email request to FixIt. It’s difficult, however, for inspectors to determine where the photo was taken or which building the issue was located in. 

Key Features
---
Simple tap to upload or take photo
Automatically form filling using reverse geocoding. Locations stored serviced from MongoDB
Simple email with attachment for the Fixit request sent to stanfordfixit@gmail.com


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
