import React from 'react';
import './problems-list.scss';
import { Link } from 'react-router-dom';

/*
 * Temporary problems array schema
 */
const problems = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
},{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
  {
      title: "202. Happy Number",
      difficulty: "Easy",
      acceptance: "54.9%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  },
  {
      title: "203. Remove Linked List Elements",
      difficulty: "Hard",
      acceptance: "42%"
  }];


const ProblemsList = () => {
  const getSlug = (title) => {
    console.log(title?.split(". ")?.[1]?.trim());
    let slug = title?.split(". ")?.[1]?.trim()?.toLowerCase()?.replaceAll(" ", "-");
    return slug
  }
  return (
    <div className='problems__list'>
      <div className='problems__listTable'>
        <table hover stripped>
          <thead>
            <tr>
              <td className='title'>Title</td>
              <td className='acceptance'>Acceptance</td>
              <td className='difficulty'>Difficulty</td>
            </tr>
          </thead>
          <tbody>
          {problems?.map((problem, i) => <tr key={i}>
              <td className='title'><Link to={`/problems/${getSlug(problem.title)}`}>{problem.title}</Link></td>
              <td>{problem.acceptance}</td>
              <td className={problem?.difficulty?.toLowerCase()}>{problem.difficulty}</td>
            </tr>)}
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProblemsList