import { z } from "zod";


const descriptionSchema = z.object({
    comment: z.string().min(1),
    correct: z.boolean().default(false)
});

const questionSchema = z.object({
    question: z.string().min(1),
    descriptions: z.array(descriptionSchema).nonempty()
});

const questionnaireSchema = z.object({
    name: z.string().min(1),
    questions: z.array(questionSchema).nonempty()
});

type questionnaireSchema = z.infer<typeof questionnaireSchema>;


export default questionnaireSchema;
