import Home from "@/components/home";

export const metadata = {
	title: "Welcome to Fake Store",
	description: "Browse the best online fake products.",
};

export default function HomePage() {
	return (
    <main>
      <h1 className="hidden">Fake Store Homepage</h1>
      <Home />
    </main>
	);
}
