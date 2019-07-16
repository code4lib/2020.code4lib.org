# 2019.code4lib.org

## Intro

This site was developed by the [Code4Lib 2019 Conference Committee Website Working Group](https://wiki.code4lib.org/Code4Lib_2019_Conference_Committees#Website_Working_Group) based on a design by the [2016 working group](https://wiki.code4lib.org/2016_Conference_Committees#Website_Working_Group). The site was designed to provide a comprehensive overview of the Code4Lib 2019 Annual Conference. A great deal of conference and organizational info can be found on the [Code4Lib Wiki](https://wiki.code4lib.org/Main_Page) and the [Code4Lib Site](https://code4lib.org), but this site should serve as a gateway to the various sources of Code4Lib information while providing visitors with a user-friendly way to find conference-specific info.

This site was designed with future users in mind, so the group chose platforms that would be accessible to a wide range of users: [Jekyll](https://jekyllrb.com) and [GitHub Pages](https://pages.github.com).

## Resources

More details are available in the [GitHub wiki](https://github.com/code4lib/2019.code4lib.org/wiki).

## About Jekyll

[Jekyll](https://jekyllrb.com) is a Ruby gem that generates static websites from markdown, HTML, and other formats. See the [official Jekyll documentation](https://jekyllrb.com/docs/home/) for details.

## Contributing

Steps for contributing have been documented in the [wiki on the 2016 site's GitHub page](https://github.com/code4lib/2016.code4lib.org/wiki) and will be updated as needed.

See a list of [open issues](https://github.com/code4lib/2019.code4lib.org/issues). The following example uses "issue#3" as a subject. That's the branch name and is used in the commit message.

### Setup

1. ```git clone``` the [repo](https://github.com/code4lib/2019.code4lib.org) from GitHub
2. cd to repo root and ```git pull```
3. ```bundle install```
4. Continue with step 3 below

### Contributing

1. Make sure you're on the master branch
  * ```git checkout master```
2. Make sure your master branch is up to date
  * ```git pull origin master```
3. Start up jekyll
  * ```bundle exec jekyll serve```
  * open [http://localhost:4000](http://localhost:4000) in your browser
4. Create a new branch for your changes
  * ```git checkout -b issue#3```
5. Make changes, check [http://localhost:4000](http://localhost:4000) to see your changes live
6. Add your changed files
  * ```git add {changed-files}```
7. Commit your changes with a fancy message
  * ```git commit -m "fixes issue #3"```
8. Add your branch to the repo
  * ```git push --set-upstream origin issue#3```
9. Switch back to the master branch
  * ```git checkout master```
10. Go to https://github.com/code4lib/2019.code4lib.org
11. Make a pull request base:master and compare:issue-3
12. Wait for someone to test your changes and merge the pull request
13. Do the dance of joy

### Managing Pull Requests

1. Follow steps 1 - 3 above
2. Get any remote branches
  * ```git fetch```
3. Switch to the branch in question
  * ```git checkout BRANCHNAME```
4. ```bundle exec jekyll serve```
5. Check [http://localhost:4000](http://localhost:4000) that nothing is broken
6. Merge that branch into master (easiest to manage on the GitHub site)

## Dat

As an experiment the site is also available via [Dat](https://datproject.org/) which you can view
in the [Beaker Browser](https://beakerbrowser.com/) at dat://2019.code4lib.org.
If you would like to clone the site you'll need to install Dat and then:

    dat clone dat://2019.code4lib.org

If you want to update the Dat site you'll need to import the secret key from a
friend:

    dat keys import < 2019.code4lib.org

Then you'll need to:

    rm -rf _site
    dat clone dat://2019.code4lib.org _site
    jekyll build
    cd _site
    dat sync
