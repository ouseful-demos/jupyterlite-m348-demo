#' Gross domestic product for the UK
#'
#' The ONS routinely publishes GDP data for the British economy on a monthly, 
#' quarterly and annual basis. The data considered in this dataset are seasonally 
#' adjusted quarterly GDP growth figures from 1955 Q2 up to 2020 Q4. Keep in mind 
#' that this time series includes the year 2020 - the year the Covid-19 pandemic 
#' hit the world in full force and which induced a structural break in the behaviour 
#' of GDP and GDP growth.
#'
#' @format A data frame with 263 rows and 4 variables:
#' \describe{
#' \item{year}{year the observation relates to}
#' \item{quarter}{quarter the observation relates to, taking values 1, 2, 3 and 4} 
#' \item{gdp}{seasonally adjusted quarterly GDP in real terms}
#' \item{gdpGrowth}{seasonally adjusted quarterly GDP growth rate (percentage)}
#' }
#'
#'
#' @source Sourced from ONS
#' @usage data(ukGDP)

"ukGDP"
