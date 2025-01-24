import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const authStatus = await isAuthenticated();
  
  if (!authStatus) {
    redirect("/api/auth/login");
  }

  const user = await getUser();
  console.log(user);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="bg-blue-100 p-3 rounded-full">
          <Image src={user.picture} alt="Profile Picture" width={50} height={50} className="rounded-full" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to your profile!</h1>
        </div>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-lg text-gray-800">
              Hello, {user?.given_name} {user.family_name}! 👋
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}