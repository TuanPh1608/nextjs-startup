import React from 'react'

const page = ({ params }: { params: { id: string } }) => {

    const { id } = params;
    return (
        <div>
            <h1 className='text-2xl'>User {id}</h1>
            <p>This is the user page</p>
        </div>
    )
}

export default page