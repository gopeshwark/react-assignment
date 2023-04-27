import React, { useState } from 'react';
import './problem.scss';
import { Dropdown, Tab, Tabs } from 'react-bootstrap';
import Description from '../../components/description/description';
import Editor from '@monaco-editor/react';
import Header from '../../components/header/header';
import { DownArrowIcon } from '../../components/icons/icons.jsx';

const tabArr = [
  {
    id: 1,
    eventKey: "description",
    title: "Description",
    content: <Description />
  },
  {
    id: 2,
    eventKey: "editorial",
    title: "Editorial",
    content: "rqwerqerqew"
  },
  {
    id: 1,
    eventKey: "solutions",
    title: "Solutions",
    content: "rqwerqe"
  },
  {
    id: 1,
    eventKey: "submissions",
    title: "Submissions",
    content: " reqewrqe"
  }
]

const languagesArr = [{
  id: 1,
  language: "Javascript",
},
{
  id: 2,
  language: "Java",
},
{
  id: 3,
  language: "Python",
},
]

const Problem = () => {
  const [eventKey, setEventKey] = useState(tabArr[0]?.eventKey);
  const [selectedLanguage, setSelectedLanguage] = useState(languagesArr[0]?.language);
  return (
    <div className='problem'>
      <div className='problem__top'>
        <Header />
      </div>

      <div className='problem__bottom'>

        <div className='problem__tabs'>
          <Tabs
            defaultActiveKey={eventKey}
            id="justify-tab-example"
            className=""
            onClick={(k) => setEventKey(k)}
          >
            {tabArr?.map(tab => <Tab eventKey={tab?.eventKey} title={tab?.title}>
              {tab?.content}
            </Tab>)}
          </Tabs>
        </div>
        <div className='problem__editor'>
          <div className="problem__editorTop">
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic">
                {selectedLanguage} <DownArrowIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languagesArr?.map(lan => <Dropdown.Item key={lan?.id} onClick={() => setSelectedLanguage(lan?.language)}>{lan?.language}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Editor height="90vh" theme="vs-dark" defaultLanguage="javascript" defaultValue="// some comment" />
        </div>
      </div>
    </div>
  )
}

export default Problem