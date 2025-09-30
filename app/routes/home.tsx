import React from 'react'
import { SignUp } from '../../src/components/SignUp'
import { SignIn } from '../../src/components/SignIn'
import { authClient } from '../../src/lib/auth-client'

export default function Home() {
  const { data, isPending, error } = authClient.useSession()
  if (data) {
    return <div>Hello, {data.user.email}!</div>
  } else {
    return <div>
      <h1>Chat Bot</h1>
      <SignUp />
      <SignIn />
    </div>
  }
}