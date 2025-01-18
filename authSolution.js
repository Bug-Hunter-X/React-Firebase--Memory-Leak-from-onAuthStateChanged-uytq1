const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    setLoggedIn(true);
  } else {
    // User is signed out
    setLoggedIn(false);
  }
});

useEffect(() => {
  return () => {
    unsubscribe(); // unsubscribe on component unmount
  };
}, []);