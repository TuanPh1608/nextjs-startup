import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {

  const query = (await searchParams).query

  const posts = [{
    _createdAt: "2021-09-01T00:00:00Z",
    views: 100,
    author: { _id: "1", name: "John Doe" },
    _id: 1,
    description: "A startup that does something",
    image: "https://images.unsplash.com/photo-1634912314704-c646c586b131?q=806w=2940&auto=format&f",
    catergory: "Robots",
    title: "Robotics Startup"
  }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>
      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key = {post?._id} post={post} />
            ))
          ) :
            (<p className="no-results">No startups found</p>)
          }

        </ul>
      </section>
    </>
  );
}
