import React, {Suspense} from 'react'

export default function MyComponent({children}){
    return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
}
