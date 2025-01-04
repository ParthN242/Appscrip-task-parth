export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await res.json();

    return Response.json({ success: true, products: data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
