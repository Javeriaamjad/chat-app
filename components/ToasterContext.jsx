"use client"

import { Toaster } from "react-hot-toast"

const ToasterContext = () => {
  return (
    <Toaster />
  )
}

export default ToasterContext

//7.React Hot Toast is a library for displaying toast notifications in React applications. Toast notifications are small, 
//non-blocking pop-up messages that provide feedback to users without interrupting their workflow. Here's what React Hot Toast does:
//and its a self closing tag we dont wrap it if usng somewhere here we use this in layout.js in auth folder