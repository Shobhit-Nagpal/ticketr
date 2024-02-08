export default function TicketContainer({ title, description, closed }: {title: string, description: string, closed: boolean}) {
  return (
    <div className="bg-blue-800 p-5">
    <h1 className="text-white text-lg">{title}</h1>
    <p className="text-red-700 text-sm">{String(closed)}</p>
    </div>
  )
}
