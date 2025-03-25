//startup/[id]
import { formatDate } from '@/lib/utils'
import { client } from '@/sanity/lib/client'
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import React, { Suspense } from 'react'
import Link from 'next/link'

import markdownit from 'markdown-it'
import { Skeleton } from '@/components/ui/skeleton'
import View from '@/components/View'

const md = markdownit()

export const experimental_ppr = true

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const post = await client.fetch(STARTUP_BY_ID_QUERY, { id })

    if (!post) return notFound();

    const parsedContent = md.render(post?.pitch || '')

    return (
        <>
            <section className='pink_container !min-h-[230[px]'>
                <p className="tag">{formatDate(post?._createdAt)}</p>
                <h1 className='heading'>{post.title}</h1>
                <p className="sub-heading !max-w-5xl">{post.description}</p>
            </section>
            <section className='section_container'>
                <Image src={post.image} alt={post.title} className='w-full h-auto rounded-xl' width={100} height={100} />
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex-between gap-5">
                        <Link href={`/user/${post.author?._id}`}
                            className='flex gap-2 items-center mb-3'
                        >
                            <Image
                                src={post.author.image}
                                alt={post.author.name}
                                className='rounded-full drop-shadow-lg'
                                width={64} height={64} />
                            <div>
                                <p className='text-20-medium'>{post.author.name}</p>
                                <p className='text-16-light !text-black-300'>@{post.author.username}</p>
                            </div>
                        </Link>
                        <p className="category-tag">{post.category}</p>
                    </div>
                    <h3 className='text-30-bold'>Pitch Details</h3>
                    {parsedContent ? (
                        <article
                            className='prose max-w-4xl font-work-sans break-all'
                            dangerouslySetInnerHTML={{ __html: parsedContent }} />
                    ) : (
                        <p className='no-result'>No details provided</p>
                    )}
                </div>
                <hr className='divider' />

                {/* EDITOR SELECTED STARTUP */}
                <Suspense fallback={<Skeleton />}>
                <View id={id} />
                </Suspense>
            </section>
        </>
    )
}

export default page