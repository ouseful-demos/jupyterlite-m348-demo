#' Survey data from households in the Philippines
#'
#' The Philippine Statistics Authority (PSA) conducts the Family
#' Income and Expenditure Survey (FIES) nationwide every three years.
#' The survey provides household information on family size, income and
#' expenditure, amongst many other things.
#' These data were extracted from a random
#' sample of 1500 households taken from the 2015 FIES for the five
#' regions in the Philippines with the most household members, namely,
#' the regions Calabarzon, National Capital Region (NCR), Central
#' Luzon, Western Visayas and Central Visayas
#'
#' @format A data frame with 1500 rows and 9 variables:
#' \describe{
#'    \item{familySize}{the total number of family members, excluding the head
#'       of the household}
#'    \item{employed}{the total number of family members employed}
#'    \item{bedrooms}{the number of bedrooms in the household}
#'    \item{age}{the age of the head of the household}
#'    \item{income}{the total annual income of the household (in Philippine
#'       pesos, PHP)}
#'    \item{expend}{the total annual expenditure on food of the household (in
#'       PHP)}
#'    \item{bread}{the total annual expenditure on bread and cereals of the
#'      household (in PHP)}
#'    \item{roof}{the roof type in the household classified into six categories
#'      according to the material the roof is made of: the six categories are
#'         mixed strong, mixed light, salvaged, strong, light or not applicable}
#'    \item{region}{the name of the region}
#' }
#'
#' @source The Family Income and Expenditure Survey, The Philippine Statistics Authority (PSA)
#'
#' @usage data(philippines)

"philippines"
