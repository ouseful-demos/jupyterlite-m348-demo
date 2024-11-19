# jupyterlite-m348-demo

*This repo / demo is largely deprecated in favour of the a customised JupyterLite kernel build and JupyterLite environment demo [here](https://github.com/ouseful-testing/jupyterlite-webr-kernel/).*

Demo of R enviromment in JupyterLite with user level configurations to allow:

- loading packages from a custom CRAN style report URL.

__Also see https://github.com/ouseful-testing/jupyterlite-webr-kernel/ for an example of building a customised kernel and a self-contained JupyterLite environment that bundles a WebR kernel as well as a CRAN style package repository as part of the JupyterLite distribtion.__

*COPYRIGHT notice: Items in the M348.tar.gz archive file and the M348 directory are Copyright The Open University and not covered by any other license terms associated with this repository.*

This repo demos a JupyterLite R environment for potential use in an OU module.

Notebooks used in the module may require access to packages which are not available via the webR CRAN-style repository.

A repo for custom packages is built into the the JupyterLite site on the path `./repo`. This means that for the JupyterLite environment running at `https://ouseful-demos.github.io/jupyterlite-m348-demo/lab/index.html`, we can install a package in the "local" repo as `install.packages("M348", repos = "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/")`.

A tidier way of setting the options is:

`options("webr_pkg_repos" = "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/")`

and then just: `library(M348)`

*Note that each notebook runs its own webR environment, which means that each notebook needs to install its required packages.*

The webR `library()` function appears to pre-emptively try to install a missing package from the webR repo. Setting `options(webr_pkg_repos= "https://ouseful-demos.github.io/jupyterlite-m348-demo/repo/")` should force `install.packages()` and the `library()` function to pull from this custom repo directly.
