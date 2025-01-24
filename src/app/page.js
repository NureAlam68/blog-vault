import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">All Blog Posts</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
            <h1 className="font-bold">Blog: {post.id}</h1>
              <CardTitle className="text-lg">
              <Link href={`/blog/${post.id}`} className="hover:underline">
                  {post.title}
              </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Click title to read more...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
