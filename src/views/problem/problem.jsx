import React from 'react';
import './problem.scss';
import { Tab, Tabs } from 'react-bootstrap';
import Description from '../../components/description/description';

const tabArr = [
  {
    id:1,
    eventKey: "description",
    title: "Description",
    content: <Description/>
  },
  {
    id:2,
    eventKey: "editorial",
    title: "Editorial",
    content: "rqwerqerqew"
  },
  {
    id:1,
    eventKey: "solutions",
    title: "Solutions",
    content: "rqwerqe"
  },
  {
    id:1,
    eventKey: "submissions",
    title: "Submissions",
    content: " reqewrqe"
  }
]

const Problem = () => {
  return (
    <div className='problem'>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className=""
        // justify
      >
      {tabArr?.map(tab => <Tab eventKey={tab?.eventKey} title={tab?.title}>
          {tab?.content}
        </Tab>)}
      </Tabs>
    </div>
  )
}

export default Problem