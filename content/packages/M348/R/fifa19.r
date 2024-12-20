#' Attributes of football players
#'
#' Data for a subset of 100 football players taken from a database of 18000 
#' footballers for 2019. The database is maintained by Federation Internationale 
#' de Football Association (FIFA), and includes data regarding each individual 
#' footballer's price, wage, country, club, height, weight and assessed scores 
#' for many different skills. This dataset includes data on a subset of the 
#' available variables.
#'
#' @format A data frame with 100 rows and 6 variables:
#' \describe{
#'   \item{strength}{a score of strength, expressed as an integer between 0 and 100}
#'   \item{weight}{the player's weight, measured in pounds to the nearest pound }
#'   \item{height}{the player's height, measured in inches to the nearest inch}
#'   \item{marking}{a score of marking ability, expressed as an integer between 0 and 100}
#'   \item{preferredFoot}{the foot preferred by each player, taking possible values 
#' left and right}
#'   \item{skillMoves}{an assessment of each player's football skill moves, 
#' taking possible values 1, 2, 3, 4 and 5 (with 5 being the highest level)}
#' }
#'
#' @source \url{www.kaggle.com/karangadiya/fifa19}
#'
#' @usage data(fifa19)

"fifa19"
