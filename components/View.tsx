import React from 'react'
import Ping from '@/components/Ping'
import { STARTUP_VIEW_QUERY } from '@/sanity/lib/queries'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/writeClient'
import { after } from 'next/server'

const View = async ({ id }: { id: string }) => {

    const { views: totalViews } = await client
        .withConfig({ useCdn: false })
        .fetch(STARTUP_VIEW_QUERY, { id })

    after(
        async () => await writeClient
            .patch(id)
            .set({ views: totalViews + 1 })
            .commit()
    )

    return (
        <div className="view-container">
            <div className='absolute -top-2 -right-2'>
                <Ping />
            </div>
            <div className="view-text">
                <span className="font-black">Views: {totalViews}</span>
            </div>
        </div>
    )
}

export default View