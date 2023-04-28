import React, { useEffect, useRef, useState } from 'react';
import './problem.scss';
import { Dropdown, Tab, Tabs } from 'react-bootstrap';
import Description from '../../components/description/description';
import Editor from '@monaco-editor/react';
import Header from '../../components/header/header';
import { DownArrowIcon } from '../../components/icons/icons.jsx';
import NoData from '../../components/no-data/no-data';

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
    content: <NoData />
  },
  {
    id: 1,
    eventKey: "solutions",
    title: "Solutions",
    content: <NoData />
  },
  {
    id: 1,
    eventKey: "submissions",
    title: "Submissions",
    content: <NoData />
  }
]

const languagesArr = [{
  id: 1,
  language: "javascript",
  name: "Javascript",
  value: `/**
  * @param {number[]} 
  * @return {number}
  */
    var maxValue = function () {

  }`
},
{
  id: 2,
  language: "java",
  name: "Java",
  value: `class Solution {
      public int maxValue(int[] arr) {
          
      }
  }`
},
{
  id: 3,
  language: "python",
  name: "Python",
  value: `
  # @param {number[]} 
  # @return {number}
  
  class Solution(object):
      def maxValue(self, list):
  `
},
]

const Problem = () => {
  const editorRef = useRef(null);
  const [eventKey, setEventKey] = useState(tabArr[0]?.eventKey);
  const [selectedLanguage, setSelectedLanguage] = useState(languagesArr[0]);


  function handleEditorChange(value, event) {
    console.log('here is the current model value:', value);
  }



  useEffect(() => {
    editorRef.current?.focus();
  }, [selectedLanguage.name]);


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
                {selectedLanguage?.name} <DownArrowIcon />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {languagesArr?.map(lan => <Dropdown.Item key={lan?.id} onClick={() => setSelectedLanguage(lan)}>{lan?.name}</Dropdown.Item>)}
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Editor
            height="85vh"
            theme="vs-dark"
            path={selectedLanguage.value}
            defaultLanguage={selectedLanguage.language}
            defaultValue={selectedLanguage.value?.toString()}
            onChange={handleEditorChange}
            onMount={(editor) => (editorRef.current = editor)}
          />
        </div>
      </div>
    </div>
  )
}

export default Problem