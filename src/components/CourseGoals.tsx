
import type { FC } from 'react';
import Card from './Card';

type CourseGoalsProps = {
    title: string;
    content: string
};
const CourseGoals: FC<CourseGoalsProps> = ({ title, content }) => {
    return (
        <article>
            <Card title={title} content={content} >
                <button>DELETE</button>
            </Card>
        </article>
    );
}

export default CourseGoals;