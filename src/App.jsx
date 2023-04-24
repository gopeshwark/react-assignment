import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.scss'

const ProblemsList = React.lazy(() => import('./views/problems-list/problems-list.jsx'));
const Login = React.lazy(() => import("./views/login/login.jsx"));
const Signup = React.lazy(() => import('./views/signup/signup.jsx'));
const Problem = React.lazy(() => import('./views/problem/problem.jsx'));
const Layout = React.lazy(() => import('./components/layout/layout.jsx'));
const UnderDevelopment = React.lazy(() => import('./views/under-develompent/under-develompent.jsx'));
const NotFound = React.lazy(() => import('./views/not-found/not-found.jsx'))
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
    }];


function App() {
    const underDevArr = ["explore", "contest", "interview", "discuss"];
    return (
        <>
            {/* Add routing here, routes look like - */}
            <React.Suspense fallback={<>...</>}>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route exact path="" element={<ProblemsList/>}/>
                        {/* login - Login page */}
                        <Route exact path="login" element={<Login/>}/>
                        {/* signup - Signup page */}
                        <Route exact path="signup" element={<Signup/>}/>
                        {/* problemset/all/ - All problems (see problems array above) */}
                        <Route exact path="problemset/all" element={<ProblemsList/>}/>
                        {/* problems/:problem_slug - A single problem page */}
                        <Route exact path="problems/:problem_slug" element={<Problem/>}/>
                        {underDevArr?.map((page, i) => <Route key={i}  path={page} element={<UnderDevelopment/>}/>)}
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                    <Route path="/404" element={<NotFound/>}/>
                </Routes>
            </React.Suspense>
        </>
    )
}


export default App;
