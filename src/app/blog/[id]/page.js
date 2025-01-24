import { notFound } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default async function BlogDetails({ params }) {
  const { id } = params;

  
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();


  if (!post.id) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardHeader>
        <h1 className="font-bold">Blog: {post.id}</h1>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">{post.body}</p>
        </CardContent>
      </Card>
    </main>
  );
}
