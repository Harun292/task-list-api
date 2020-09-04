# klika-expense-tracker-api

This is the api project for the klika calendar.

## 1. Setup

## 2. Contributing
This section explains the process of contributing to the project.


### Git workflow

The main branch of the repository is `master` which contains the code that has been tested and approved.

When contributing to the project you should follow the following steps:

1. Pull the latest `master` version from remote to your local `master` branch
2. Check out to a new feature branch:
    
    The branch name should have the following format: `type/trello_ticket_id-description`
    
    Example: `feature/KET-1-set-up-git-workflow`
    
3.  After you do some work, you should commit the code with a short and clear commit message that accurately explains the work that you did. Before committing you should verify the following:
    
    3.1 Code is formatted and structured well
    
    3.2 All tests are passing
    
    Do not worry much about the number of commits  because they will be squashed once your code is merged.
    
4. When you commit your files push them to the remote branch.

After you finish the whole work and you are confident that it is completed according to Acceptance Criteria and Definition of Done, you can make a pull request to the `master` branch.

The name of your pull request should follow the naming from your branch. If the code is still in progress and you need the feedback from other team members you can put a `[WIP]` label in the PR name. In the pull request description you can provide the additional info that explains your work and you should assign other team members as reviewers.

When your PR is approved by all other team members, you can merge it. It is important that you **squash your commits** into one commit with commit message that follows the same naming convention as branch and PR.

**Important note: ** If there are conflicts you have to rebase your branch from `master`, resolve the conflicts locally and push to remote before merging

After your code is merged you can delete the feature branch both locally and remotely.

