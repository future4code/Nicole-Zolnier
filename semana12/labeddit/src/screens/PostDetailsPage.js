import React from 'react'
import {useProtectedPage} from '../hooks/useProtectedPage'

function PostDetailsPage() {
  useProtectedPage()
  return (
    <div>
      PostDetailsPage
    </div>
  );
}

export default PostDetailsPage;