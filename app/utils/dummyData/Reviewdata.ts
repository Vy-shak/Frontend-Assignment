import { ReviewType } from "@/app/@types/state/Reviewtype";
import { Profile1,Profile2,Profile3 } from "../../../public/index";

const reviewData: ReviewType[] = [
    {
        id: 1,
        rating: 5.0,
        review: "He is very friendly and makes you comfortable first, then he gives the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me.",
        profile: Profile1,
        author: "Vedang Shah"
    },
    {
        id: 2,
        rating: 4.5,
        review: "His ability to create a relaxed atmosphere and provide insightful feedback made the hour-long session highly productive.",
        profile: Profile2,
        author: "Anonymous"
    },
    {
        id: 3,
        rating: 5.0,
        review: "He is very friendly and makes you comfortable first, then he gives the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me. His honest and actionable feedback on my technical abilities was invaluable.",
        profile: Profile3,
        author: "Hemet Singh"
    }
];

export {reviewData}