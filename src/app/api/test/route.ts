export async function GET(req: Request) {
  return Response.json({ message: "This is a response back from the test route"}, {status: 200});
}
