# React Firebase onAuthStateChanged Unsubscribe

This repo demonstrates a common error in React Firebase applications: forgetting to unsubscribe from `onAuthStateChanged`.  This can lead to memory leaks and unexpected behavior.

## The Bug

The `authBug.js` file shows the problematic code. The `onAuthStateChanged` listener is attached, but there's no mechanism to unsubscribe when the component unmounts.  This keeps the listener active, even after the component is removed from the DOM.

## The Solution

The `authSolution.js` file provides the corrected code.  It uses a closure to hold the unsubscribe function, ensuring proper cleanup when the component unmounts using a `return` statement.