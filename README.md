```markdown
# Git Command Cheat Sheet

This `README.md` provides an overview of the most commonly used Git commands to help you manage your codebase more efficiently.

## Table of Contents
- [Git Init](#git-init)
- [Git Add](#git-add)
- [Git Commit](#git-commit)
- [Git Push](#git-push)
- [Git Pull](#git-pull)
- [Force Flags](#force-flags)
- [Git Reset](#git-reset)
- [Git Merge](#git-merge)
- [Git Rebase](#git-rebase)

---

## Git Init
### Description:
Initializes a new Git repository in your project.

### Command:
```bash
git init
```
### Usage:
```bash
# Initialize a new repository
git init
```

---

## Git Add
### Description:
Stages files for the next commit. This tells Git which files you want to include in the commit.

### Command:
```bash
git add <file>
```
### Usage:
```bash
# Add a single file
git add file_name.txt

# Add all changes
git add .
```

---

## Git Commit
### Description:
Records changes in the repository. A commit represents a snapshot of your project at a specific point in time.

### Command:
```bash
git commit -m "Commit message"
```
### Usage:
```bash
# Commit with a message
git commit -m "Added new feature"

# Commit all changes with a message
git commit -a -m "Updated multiple files"
```

---

## Git Push
### Description:
Uploads local repository content to a remote repository.

### Command:
```bash
git push <remote> <branch>
```
### Usage:
```bash
# Push to the master branch on origin
git push origin master
```

---

## Git Pull
### Description:
Fetches and integrates changes from a remote repository into your current branch.

### Command:
```bash
git pull <remote> <branch>
```
### Usage:
```bash
# Pull changes from the master branch on origin
git pull origin master
```

---

## Force Flags
### Description:
Sometimes Git prevents destructive actions like overwriting commits. Force flags let you override these protections.

### Commands:
- `git push --force`: Forces a push, overwriting any conflicts.
- `git reset --hard`: Resets the repository to a specific commit, deleting any uncommitted changes.

### Usage:
```bash
# Force push to the remote repository
git push --force

# Forcefully reset to a specific commit (deletes all local changes)
git reset --hard <commit_hash>
```

---

## Git Reset
### Description:
Undoes changes in your working directory, index, or history, depending on the flags used.

### Commands:
- `git reset HEAD~1`: Unstages the last commit, leaving your changes in the working directory.
- `git reset --hard <commit_hash>`: Resets to a specific commit and deletes all changes after that commit.

### Usage:
```bash
# Undo the last commit, but keep changes
git reset HEAD~1

# Hard reset to a previous commit
git reset --hard abc123
```

---

## Git Merge
### Description:
Merges changes from one branch into another.

### Command:
```bash
git merge <branch_name>
```
### Usage:
```bash
# Merge the 'feature' branch into the current branch
git merge feature
```

---

## Git Rebase
### Description:
Reapplies commits on top of another base commit. Used to maintain a cleaner commit history.

### Command:
```bash
git rebase <branch_name>
```
### Usage:
```bash
# Rebase the current branch onto the master branch
git rebase master
```

---

## Additional Tips:
- Always ensure your local branches are in sync with remote branches before using `force` flags to avoid data loss.
- Use `git status` to check the current state of your working directory.

---

## License
This cheat sheet is provided under the MIT License.
```

This `README.md` file explains each command with its syntax and an example, providing a quick reference for anyone working with Git.