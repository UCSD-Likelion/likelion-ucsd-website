import dbConnect from "../../../lib/mongodb";

export async function GET(request) {
  try {
    await dbConnect();
    return new Response(JSON.stringify({ message: "✅ MongoDB connected" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "❌ Connection failed", error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
