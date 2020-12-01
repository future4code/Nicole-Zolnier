import React from 'react'
import {useProtectedPage} from '../hooks/useProtectedPage'

function FeedPage() {
  useProtectedPage()
  return (
    <div>
      FeedPage
    </div>
  );
}

export default FeedPage;