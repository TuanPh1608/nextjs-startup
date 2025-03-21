import Form from 'next/form'
import SearchFormReset from './SearchFormReset'
import { Search } from 'lucide-react'

const SearchForm = ({ query }: { query?: string }) => {
    return (
        <Form className="search-form" action="/" scroll={false}>
            <input
                name='query'
                defaultValue={query}
                placeholder="Search for startups"
                className='search-input'
            />

            <div className='flex gap-2'>
                {query && <SearchFormReset />}
                <button type='submit' className='search-btn text-white'>
                    <Search className='size-5' />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm