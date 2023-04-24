import React from 'react'

const ProblemStatement = (props) => {
    const {title, acceptance, difficulty} = props;
  return (
    <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
  )
}

export default ProblemStatement