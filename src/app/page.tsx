"use client";

import TicketContainer from "@/components/ticket";
import { Button } from "@/components/ui/button";
import { type Ticket } from "@/types";
import supabase from "@/utils/supabase";
import { ReactNode, useEffect, useState } from "react";

export default function Home() {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);

  async function handleSubmit() {
    const ticket: Ticket = {
      title: "Test",
      description:
        "This is a test ticket only to see if ticket is getting added to database",
    };
    try {
      const { error } = await supabase.from("tickets").insert(ticket);

      if (error) {
        console.error(error);
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    async function getTickets() {
      const { data, error } = await supabase.from("tickets").select();

      console.log(data);
      setTickets(data);
    }

    getTickets();
  }, []);

  return (
    <main className="dark flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <h1 className="text-white">Hello world</h1>
      <Button
        onClick={() => {
          handleSubmit();
        }}
      >

        Submit ticket
      </Button>

      {tickets.map((ticket, idx) => (
          <TicketContainer key={idx} title={ticket.title!} description={ticket.description!} closed={ticket.closed!} />
          ))}
    </main>
  );
}
