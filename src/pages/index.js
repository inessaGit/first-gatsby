
/*
const Layout = ({ pageTitle, children }) => {
This is a JavaScript technique called destructuring.
 It’s basically a shortcut for defining variables based on an object’s properties. 
 It’s like saying, “Take the object that gets passed into this function, 
 and unpack its pageTitle and children properties into their own variables.”

 it is a shorter way of : 
 const Layout = (props) => {
  const pageTitle = props.pageTitle
  const children = props.children
  ...
}
*/
import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage