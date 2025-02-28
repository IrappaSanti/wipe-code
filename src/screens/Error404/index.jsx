import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timeout if the component unmounts
  }, [navigate]); // Include navigate in the dependency array

  return (
    <div>No Page Found, Redirecting to home page</div>
  )
}

export default Error404
