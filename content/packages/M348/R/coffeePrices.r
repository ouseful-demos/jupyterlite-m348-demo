#' The price of coffee
#'
#' This dataset contains the price in US cents per lb of 
#' futures and spot prices for coffee on trading days from 1st April 2020 to 
#' 31st March 2021, a total of 261 observations.
#'
#' These consist of daily prices for the Coffee C futures contract, traded on 
#' the New York futures market on weekdays, and the International Coffee 
#' Organisation's (ICO) daily indicator price for Brazilian and other natural 
#' arabicas (Brazilian naturals) from 1st April 2020 to 31st March 2021.
#'
#' @format A data frame with 261 rows and 2 variables:
#' \describe{
#' 	\item{spot}{the daily indicator price for Brazilian Naturals compiled by 
#' 		the International Coffee Association that are the weighted average of 
#' 		the price of physical coffee delivered to the ports of New York, 
#' 		Hamburg and Marseille in US cents per lb.}
#' 	\item{futures}{the price of the Coffee C Futures contract traded on the ICE 
#'		exchange in New York}
#' }
#'
#' @usage data(coffeePrices)

"coffeePrices"
