# A Rebasing Workflow

@emmajanehw

www.gitforteams.com

[![cover_illustration](assets/gitforteams-cover.png)](http://shop.oreilly.com/product/0636920034520.do?cmp=af-prog-books-videos-product_cj_auwidget674_0636920034520_4470479)
[![cover_illustration](assets/collabwithgit-cover.gif)](http://shop.oreilly.com/product/0636920034872.do?cmp=af-prog-books-videos-product_cj_auwidget671_0636920034872_4470479)


# Agenda

- tl;dr on rebasing
- **Rant** why I _hate_ rebasing
- **Rave** why I _love_ rebasing
- Wrap-up
- Q&A


# tl;dl

(too long; didn't listen)


## What is Rebasing?


### Rebasing: Official Definition

Forward-port local commits to the updated upstream head.


# o_O


### Rebasing: English (ish) Definition

Move my branch-specific commits to a new branch tip.


### Why We Rebase

Incorporate upstream work without leaving a merge commit.


<img alt="incorporate upstream rebase animation" src="assets/rebasing-update-branch.svg" class="inject_me" />


## What is **Interactive** Rebasing?

replay a sequence of commits <br/>_while optionally changing each commit_.


### Interactive Rebasing Makes History Easier to Read by <br />**Squashing** Related Commits into Whole Ideas


<img alt="squash rebase animation" src="assets/rebasing-interactive-squash.svg" class="inject_me" />


### Interactive Rebasing Makes History Easier by <br/>**Editing** Unrelated Commits into Separate Ideas


<img alt="edit commits rebase animation" src="assets/rebasing-interactive-edit.svg" class="inject_me" />


## Why the Fuss?<br />Because TIMTOWTDI

- `pull` => `fetch` + `merge`
- `merge --no-ff` => forces a merge commit object (“true merge”)
- `merge --ff-only` => fast forward (graph looks like rebase)
- `merge --squash` => compress commits to one; then merge
- `rebase` => forward-port local commits
- `cherry-pick` => merge individual commits

NOTE: Pull request => fetch + merge with no fast forwards. Creates a merge commit. Often completed on a remote system with a one-click button. Forcing you into whatever workflow the UI has created for you. No flexibility! Merge request => setup the incoming work as a remote; review it locally; and then merge in the branch (or rebase!) however you would like. More steps to setup, but more control over how the work looks in the history graph.


### Should I Use `merge` or `rebase`?

I will love you regardless of which strategy you use.

(But your team *might* not.)


### People Say: Merging Branches is "Messy"
### So Use Rebase to Update a Branch

![merge to update](assets/merge-to-update.png)


## What They Mean Is ...

"I find bi-directional graphs difficult to read. Can I help you become more comfortable with rebasing to update your branches so that our shared project history is easier to read?"


### People Say: Merge Commits are "Messy"
### So Use Merge with FF

![commit graph with no parents](assets/merge-commits-graphed.png)


## What They Means Is ...

"We merge a lot of little branches really, really frequently. Should we consider using `merge --ff-only`?"


See also: `git log --oneline --graph --no-merges`


#  o_O


# Let's talk about merges.


<img alt="merge vs. rebase graphs compared" src="assets/merge-types.svg" class="inject_me" />

NOTE: Compare graphs from merge and rebase


### Undoing Bad Merges in Private Branches
<img alt="private: merge commits allow you to easily undo badly merged branches" src="assets/flowchart-undo-merge.svg" class="inject_me" />


### Undoing Bad Merges in Public Branches
<img alt="public: merge commits allow you to easily undo badly merged branches" src="assets/flowchart-undo-merge-public.svg" class="inject_me" />


![merge or rebase flowchart](assets/rebase-or-merge.png)


## HOWTO...


### ... Incorporate Upstream Work?

````
$ git pull --rebase=preserve master
$ git checkout my_local_branch
$ git rebase master
````


### ... Manipulate a Series of Commits?

    $ git checkout my_local_branch
    $ git rebase --interactive [commit]


### Choose from the following options:

- `pick`: leave as-is (default)
- `edit`: separate commit into several discrete commits
- `squash`: combine commits
- delete: remove line referencing commit(s)
- re-order: change the order of the lines


### ... Stop Rebasing?

- If things go right, it will stop on its own.
- If there are tears, you can abort the process:

````
$ git rebase --abort
````


### ... Resolve a Conflict Once and for All?

Turn on REuse REcorded REsolution permanently:
````
$ git config --global rerere.enabled true
````

Forget a bad resolution:
````
$ git rerere forget
````

Remember a good resolution:
````
$ git rerere
````


# &lt;/tl;dl&gt;


# Rant

Why I don't like rebasing.


## Historical Revisionism


## Git is Commit-Aware;<br />Not Branch Aware

![gitK screenshot](assets/git-log-graphical.png)

Note: Git is commit-aware. Not Branch aware. That means every single commit is always visible. Nothing is collapsible in the default UIs. Information about parents are retained, sort of, but you have to do your merges in a very specific way to take advantage of it.


## Compare: Bazaar is branch aware.

![bzr screenshot zoomed out](assets/bzr-log-graphical.png)


# Rave

Why I love rebasing.


## Make Whole Thoughts

**The Commit Object**

- Is just the right size.
- Contains only related code.
- Conforms to coding standards.

Resources: [gitforteams.com/resources/commit-granularity.html](http://gitforteams.com/resources/commit-granularity.html)

Note: Reshape your personal work history to reflect a whole idea before sharing it with others. This essentially mimics the creation of a patch. Rebasing also allows you to tease apart multiple ideas from a single commit and separate them into two different commits.


## Convert Conversations to Conclusions

aka: make patches from pull requests

Note: With a Web-based interface, we’re now seeing a lot more conversations happen alongside the code, with tiny commits and adjustments along the way. Previously this conversation might have happened in a mailing list, with patches attached. Same conversation, but the patches reflected whole “conclusions” up to that point. There were no micro commits in the repository history. In other words, when we moved to a web-based system with conversations, we essentially switched from conclusion-based commits to conversation artefacts.


# Summary

- The benefits of rebasing are most apparent to projects with multiple branches and multiple committers.
- Rebasing allows you to reshape commit history so that you are storing conclusions, not conversations.
- Rebasing can be used in place of merge to update a branch and results in a simplified graph of your repository history.
- Rebasing can be used interactively to reshape a series of commits.



## Resources

[![cover_illustration](assets/gitforteams-cover.png)](http://shop.oreilly.com/product/0636920034520.do?cmp=af-prog-books-videos-product_cj_auwidget674_0636920034520_4470479)
[![cover_illustration](assets/collabwithgit-cover.gif)](http://shop.oreilly.com/product/0636920034872.do?cmp=af-prog-books-videos-product_cj_auwidget671_0636920034872_4470479)

Twitter: @emmajanehw

Web: gitforteams.com
