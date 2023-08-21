export interface Question {
  question: string;
  incorrect_answers: string[];
  correct_answer: string;
}

export interface APIResponse {
  results: Question[];
}

export const API_URL = "https://opentdb.com/api.php?amount=50&category=18";