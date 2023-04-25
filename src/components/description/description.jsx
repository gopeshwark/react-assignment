import React from 'react';
import './description.scss';

const Description = () => {
    return (
        <div className='question'>
            <span className='question__title'>11. Container With Most Water</span>
            <div className='question__actions'>
                <span className='tag medium'>Medium</span>
            </div>
            <div className='question__desc'>
                <p>You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).</p>
                <p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>
                <p>Return the maximum amount of water a container can store.</p>
                <p>Notice that you may not slant the container.</p>
                <p>&nbsp;</p>
            </div>
            <div className='question__example'>
                <p><strong>Example 1:</strong></p>
                <div className='question__exampleDetails'>
                    <div className='heading'><strong>Input: </strong><p>height = [1,8,6,2,5,4,8,3,7]</p></div>
                    <div className='heading'><strong>Output: </strong><p>49</p></div>
                    <div className='heading'><strong>Explanation: </strong><p>The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</p></div>
                </div>
            </div>
            <div className='question__example'>
                <p><strong>Example 1:</strong></p>
                <div className='question__exampleDetails'>
                    <div className='heading'><strong>Input: </strong><p>height = [1,8,6,2,5,4,8,3,7]</p></div>
                    <div className='heading'><strong>Output: </strong><p>49</p></div>
                    <div className='heading'><strong>Explanation: </strong><p>The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.</p></div>
                </div>
            </div>
        </div>
    )
}

export default Description;