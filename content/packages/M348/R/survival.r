#' Leukaemia patient survival in the 1960s
#'
#' The data concern the time to death in weeks of 33 patients suffering from acute 
#' myelogeneous leukaemia (under the conditions that held sway at the time of the study 
#' in the early 1960s). There are two explanatory variables. One is the white blood count. 
#' The other is a test result for a morphological characteristic of white cells,
#' referred to as `the AG condition', made at the time of diagnosis; the factor is either positive or negative.
#'
#' @format A data frame with 33 observations and 3 variables:
#' \describe{
#'    \item{survivalTime}{time to death (weeks)}
#'    \item{logWbc}{log(white blood cell count)}
#'    \item{ag}{AG condition (`pos' or `neg')}
#' }
#'
#' @source Feigl, P. and Zelen, M.  (1965) `Estimation of exponential
#' survival probabilities with concomitant information', \emph{Biometrics}, \bold{21}, 826--38.
#'
#' @usage data(survival)

"survival"
