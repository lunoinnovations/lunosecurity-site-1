import { HardHat } from "lucide-react"
import { ArrowUpRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export default function Page() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <HardHat />
        </EmptyMedia>
        <EmptyTitle>Under Construction</EmptyTitle>
        <EmptyDescription>
          Welcome! This is an upcoming project of mine, soon to
          be a discord bot, an alternative to Double Counter,
          please check back soon!
          - kaosu/rj
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <a href="https://rcj.lol/?u=k">
            <Button>My Bio</Button>
          </a>
          <a href="https://instagram.com/ryderj2749">
            <Button variant="outline">My Instagram</Button>
          </a>
        </div>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <a href="mailto:rj@kaosu.dev">
          Email Me <ArrowUpRightIcon />
        </a>
      </Button>
    </Empty>
  )
}
