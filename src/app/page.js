import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="grid gap-4">
        {posts.slice(0, 10).map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                <a href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Click to read more...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
