import { shuffleArray } from './utils'
import QuestionCard from './Components/QuestionCard'

export type Question = {
   category: string
   type: string
   difficulty: string 
   question:string 
   correct_answer: string
   incorrect_answers: string[]
}

export type QuestionState = Question & { answers: string[]}

export enum Difficulty{
    EASY = 'easy',
    MEDIUM = 'medium',
    HARD = 'hard'
}

export const fetchQuizQuestions = async(amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&category=32`
    const data = await (await fetch(endpoint)).json()
    
    const result = data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([
            ...question.incorrect_answers,
            question.correct_answer
        ])
    }))

    console.log(result)
    return result
}