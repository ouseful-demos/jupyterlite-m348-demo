# jupyterlite-m348-demo

Demo of R enviromment in JupyterLite.

*COPYRIGHT notice: Items in the M348.tar.gz archive file and the M348 directory are Copyright The Open University and not covered by any other license terms associated with this repository.*

This repo demos a JupyterLite R environment for potential use in an OU module.

Notebooks used in the module may require access to packages which are not available via the webR CRAN-style repository.

A repo for custom packages is built into the the JupyterLite site on the path `./repo`. This means that for the JupyterLite environment running at `https://ouseful-demos.github.io/jupyterlite-m348-demo/lab/index.html`, we can install a package in the "local" repo as `install.packages("M348", repos = "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/")`.

*Note that each notebook runs its own webR environment, which means that each notebook needs to install its required packages.*

The webR `library()` function appears to pre-emptively try to install a missing package from the webR repo. Setting `options(webr_pkg_repos= "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/")` should force `install.packages()` and the `library()` function to pull from this custom repo directly.
