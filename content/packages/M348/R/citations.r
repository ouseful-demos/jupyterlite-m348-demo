#' Citations of published articles
#'
#' In order to disseminate their results, researchers publish articles in
#' peer reviewed academic journals. These articles are then cited in work
#' that builds on them. As a rule of thumb, the more groundbreaking
#' the article, the more it is cited in the literature.
#' Typical numbers of citations vary between disciplines. In statistical methodology, for
#' example, it is rare to achieve more than 100 citations for an article,
#' with numbers typically in single or low double digits.
#'
#' A member of the Statistics group at the School of Mathematics and
#' Statistics at the Open University has provided her citation data (as of
#' 10 Feb 2021, Scopus).
#'
#' @format A data frame with 23 observations and 4 variables:
#' \describe{
#' \item{numCitations}{number of times the article has been cited until the year 2021}
#' \item{pubYear}{year the article was published}
#' \item{yearDiff}{Length of time (years) that the article has been published}
#' \item{journal}{factor indicating the type of academic journal, taking the
#' coded values 0 (for standard statistics journal), 1 (for prestigious
#' statistics journal), and 2 (for medical journal)}
#' }
#'
#'
#' @usage data(citations)

"citations"
