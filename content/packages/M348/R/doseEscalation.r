#' A dose escalation trial
#'
#' This dataset describes the outcomes of a Phase I (safety) trial for the
#' drug temozolomide in 49 patients with certain types of cancer.
#' In this trial, some of the patients had experienced a specific prior
#' treatment while the other patients had not. In similar trials of the
#' treatment, patients who had had the prior treatment responded to the
#' doses differently to those who hadn't had the prior treatment. So,
#' whether or not the patient had the prior treatment was used as a
#' `biomarker' in the trial: those patients who had the prior treatment
#' were said to be `biomarker positive' and those who didn't have the
#' prior treatment were said to be `biomarker negative'. (A biomarker is
#' used as an indication that a biological process in the body has
#' happened or is ongoing.)
#'
#' @format A data frame with 49 observations and 3 variables:
#' \describe{
#'   \item{toxicity}{indicator for adverse reaction, taking the values 1 if the
#'         patient has an adverse reaction, and 0 otherwise,
#'          and two explanatory variables}
#'   \item{dose}{dose of the drug administered (in mg/m^2)}
#'   \item{biomarker}{the value of the biomarker for each patient, taking the
#'         values 1 if the patient is biomarker positive, and 0 if the patient is
#'         biomarker negative.}
#' }
#'
#' @source Nicholson et al. Phase I study of Temozolomide in children and adolescents with recurrent solid tumors: a
#' report from the children's cancer group. \emph{Journal of  Clinical Oncology 1998}, 16(9): 3037-3043.
#'
#' @usage data(doseEscalation)

"doseEscalation"
