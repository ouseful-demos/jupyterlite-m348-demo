#' Wages
#'
#' A subset of the data available from the 1994 UK Labour Force Survey. 
#' Data for the variable \code{hourlyWageSqrt} is not given directly in 
#' the Labour Force Survey. Instead, the hourly wage was estimated for 
#' each individual using their annual earnings from their main job. This
#' variable was then transformed by taking its square root, and only data
#' cases with hourly wages less than 50 GBP are included: 
#' this was to remove 
#' a large amount of skew in the data.
#'
#' @format A data frame with 3331 rows and 7 variables:
#' \describe{
#' \item{hourlyWageSqrt}{the square root of the individual's hourly wage
#' (in pounds sterling)}
#' \item{workHrs}{the average number of hours the individual works each week}
#' \item{educAge}{the age, in years, at which the individual ceased education}
#' \item{gender}{the gender the individual identifies with, taking the values
#' male and female}
#' \item{edLev}{a categorical variable indicating the education level attained
#' by the individual, taking 17 possible values with codes 1 (Higher
#' degree) up to 17 (No qualifcations)}
#' \item{occ}{a categorical variable representing the occupation of the
#' individual, taking the value codes 1 (Professional), 2
#' (Employer/Manager), 3 (Intermediate non manual), 4 (Junior non
#' manual), 5 (Skilled manual), 6 (Semi skilled manual) and 7
#' (Unskilled manual)}
#' \item{computer}{a categorical variable representing whether the 
#' individual has access to a computer at home, taking the values yes and no}
#' }
#'
#' @source The Labour Force Survey, Office for National Statistics (ONS)
#'
#' @usage data(wages)

"wages"
