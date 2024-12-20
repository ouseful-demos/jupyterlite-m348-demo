#' Wages and education
#'
#' This is a fictional panel data set with annual observations recorded between 
#' year 2000 and year 2005 for individuals living in a fictitious country. The 
#' variable identifying which individual each observation refers to is \code{id}. 
#' There are 2341 individuals in total (and as given in Notebook A1.5, 5730 
#' observations in total), and 6 distinct years, from 2000 to 2005 with no gaps. 

#'
#' @format A data frame with 5730 observations and 6 variables:
#' \describe{
#'	\item{id}{a numerical identifier for the individual in the sample}
#'	\item{year}{year the observation relates to}
#' 	\item{age}{age of the individual (years)}
#' 	\item{experience}{number of years in work up to 2005}
#'	\item{education}{years of full-time education}
#' 	\item{hourlyWage}{hourly wage (in wage units)}
#' }
#'
#' @usage data(wageEducation)

"wageEducation"
