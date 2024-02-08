export async function GET(req: Request) {
  return Response.json({message: "This hits the root route"}, {status: 200});
}
