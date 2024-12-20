#' Composition of a type of liquor
#'
#' The data in this dataset relate to a particular type of Chinese liquor,
#' Luzhou-flavour liquor (Qin et al, 2021). There are a total of 40
#' samples from such liquor spanning 13 brands. (All the samples were
#' obtained from a reliable source.) The flavour profile of each of
#' samples was then determined from its chemical composition. This led
#' to a dataset with 64 columns. However we will concentrate on just
#' two of the compounds they measured in each sample: ethyl acetate
#' (an apple flavour) and ethyl lactate (a grassy flavour).
#'
#' @format{A data frame with 40 rows and 4 variables:}
#' \describe{
#'  \item{sample}{an identifier for the sample}
#'  \item{brand}{an identifier for the brand}
#'  \item{ethylAcetate}{concentration of ethyl acetate (in mg/L)}
#'  \item{ethylLactate}{concentration of ethyl lactate (in mg/L)}
#' }
#'
#' @source Qian, Y., Zhang, L., Sun, Y., Tang, Y., Li, D., Zhang, H., Yuan, S. and Li, J. (2021) 
#'  Differentiation and classification of Chinese Luzhou-flavor
#' liquors with different geographical origins based on fingerprint and
#' chemometric analysis, \emph{Journal of Food Science}, 86, pp. 1861--77.
#'
#' @usage data(liquor)

"liquor"
