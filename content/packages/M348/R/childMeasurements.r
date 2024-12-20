#' Public health programme on child measurements
#'
#' The National Child Measurement Programme is a public health
#' programme in England. As part of the programme, children in
#' England are weighed and measured at school when they are 4 to 5 years
#' old, and when they are 10 to 11 years old. Data are collected annually,
#' and the information is used to plan and provide better health care
#' services for children.
#'
#' This dataset contains data collected as part of the National Child
#' Measurement Programme for the 2019/20 school year. In that school
#' year, the process was interrupted by school closures due to the
#' COVID-19 pandemic. As a result, the sample size (of 890 608
#' children) is smaller than in previous years.
#' For each child being measured as part of the programme, their Body
#' Mass Index (BMI) was calculated to check that they were growing as
#' expected. 
#'
#' @format A data frame with 24 observations and 4 variables:
#' \describe{
#'  \item{count}{the number of children}
#' \item{ethnicity}{the child's ethnicity, taking the six possible values
#'     Asian, Black, Mixed, White, Chinese or other, and Unknown}
#' \item{ageGroup}{the child's age, taking the two possible values 4 to 5 years
#'            and 10 to 11 years}
#'  \item{obese}{whether a child is classified as being obese based on their
#' BMI, taking the two possible values no and yes}
#' }
#'
#'
#' @usage data(childMeasurements)

"childMeasurements"
