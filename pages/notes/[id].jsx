import React from "react";
import { useRouter } from 'next/router'

const NotePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return(
    <h1>Notes {id}</h1>
  )
}

export default NotePage;
