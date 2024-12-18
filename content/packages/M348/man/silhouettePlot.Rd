% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/plot.silhouette.R
\name{silhouettePlot}
\alias{silhouettePlot}
\title{A function to plot silhouette objects}
\usage{
silhouettePlot(silobj, ...)
}
\arguments{
\item{silobj}{an object produced by the function \code{silhouette}}

\item{\dots}{parameters relevant to the particular plotting method and other graphical parameters}
}
\value{
A plot of the silhouette statistic.
}
\description{
A function to plot the object created by the function \code{silhouette()}.
}
\examples{
X <- c(10,8,9,2,5,0)
silAns <- silhouette(X, clusters=c(1,1,1,2,2,2))
silhouettePlot(silAns)
summary(silAns)

}
\seealso{
{\code{\link{silhouette}}, \code{\link{summary.silhouette}}}
}
\author{
Karen Vines
}
\keyword{silhouette}
