import React, { useEffect, useState } from 'react';
import './description.scss';
import { useParams } from 'react-router-dom';
import { makeRequest } from '../../core/axios-instance';

const Description = () => {
    const params = useParams();
    const [problem, setProblem] = useState({})

    const getProblems = async () => {
        makeRequest.post(`/question`, { slug: params?.problem_slug }).then(resp => {
            console.log(resp);
            let { question } = resp?.data
            if (!!question) {
                setProblem(question)
            } else {
                console.log(resp);
            }
        })
    }

    useEffect(() => {
        getProblems();
    }, [params?.problem_slug])

    return (
        <div className='question'>
            <span className='question__title'>{problem?.questionId}. {problem?.title}</span>
            <div className='question__actions'>
                <span className={`tag ${problem?.difficulty?.toLowerCase()}`}>{problem?.difficulty}</span>
            </div>
            <div className='question__desc'>

                {Array.isArray(problem?.description?.split("\n"))
                    ? problem?.description?.split("\n")?.map(desc => <p>{desc}</p>)
                    : <p>{problem?.description}</p>}
                <p>&nbsp;</p>
            </div>
            {problem?.examples?.map(example => <div className='question__example'>
                <p><strong>Example {example?.exampleId}:</strong></p>
                <div className='question__exampleDetails'>
                    {example?.input && <div className='heading'><strong>Input: </strong><p>{example?.input}</p></div>}
                    {example?.output && <div className='heading'><strong>Output: </strong><p>{example?.output}</p></div>}
                    {example?.explanation && <div className='heading'><strong>Explanation: </strong><p>{example?.explanation}</p></div>}
                </div>
            </div>)}
        </div>
    )
}

export default Description;