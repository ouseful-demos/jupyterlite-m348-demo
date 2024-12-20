#' Patient survival from third-degree burns
#'
#' Data on 435 adults who were treated by the University of Southern California General Hospital Burn Center. 
#' The explanatory variable, \code{larea}, is log(\code{area}+1), where \code{area} is the body area covered 
#' by third-degree burns. The binary response variable \code{survival} records whether or not the patient 
#' survived: 1 for survival, 0 for death.
#'
#' @format A data frame with 435 rows and 2 variables:
#' \describe{
#'   \item{logArea}{\code{logArea}, is log(\code{area}+1), where \code{area} is the body area covered by third-degree burns}
#'   \item{survival}{whether or not the patient survived: 1 for survival, 0 for death}
#' }
#'
#' @source{Fan, J., Heckman, N. E. and Wand, M. P. (1995) `Local polynomial
#' kernel regression for generalized linear models and quasi-likelihood
#' functions', \emph{Journal of the American Statistical Association}, \bold{90},
#'  141--50.}
#'
#' @usage data(burns)

"burns"
