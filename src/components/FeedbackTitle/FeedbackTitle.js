import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions"
import { Title } from "./FeedbackTitle.styled"

export const FeedbackTitle = () => {
    return (
        <div>
            <Title>Please, leave your feedback</Title>
            <FeedbackOptions/>
        </div>
    )
}