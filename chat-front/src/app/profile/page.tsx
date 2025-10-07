export default function Profile() {
  // Exemple de données utilisateur
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
    avatar: "/user-profile.jpg",
    bio: "Développeur passionné par le web et les nouvelles technologies.",
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-md">
        <img
          src={user.avatar}
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4 border-4 border-blue-200"
        />
        <h1 className="text-2xl font-bold mb-2">{user.name}</h1>
        <p className="text-gray-500 mb-2">{user.email}</p>
        <p className="text-center text-gray-700">{user.bio}</p>
      </div>
    </main>
  );
}