import { cn } from "@/lib/utils"

type ProseProps = {
  children: React.ReactNode
  className?: string
}

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        // Base styles
        "prose prose-neutral dark:prose-invert",
        // Prose size
        "prose-base",
        // Headings
        "prose-headings:scroll-mt-20 prose-headings:font-semibold prose-headings:tracking-tight",
        // Lead
        "prose-lead:text-muted-foreground",
        // Links
        "prose-a:font-medium prose-a:text-foreground prose-a:underline prose-a:underline-offset-4 prose-a:decoration-primary/50 hover:prose-a:decoration-primary",
        // Blockquotes
        "prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-foreground prose-blockquote:border-l-primary",
        // Code
        "prose-code:font-medium prose-code:text-foreground prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md",
        "prose-code:before:content-none prose-code:after:content-none",
        // Pre
        "prose-pre:bg-muted prose-pre:border prose-pre:border-border",
        // Tables
        "prose-table:border-collapse",
        "prose-th:border prose-th:border-border prose-th:bg-muted/50 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold",
        "prose-td:border prose-td:border-border prose-td:px-4 prose-td:py-2",
        // Horizontal rules
        "prose-hr:border-border",
        // Images
        "prose-img:rounded-lg prose-img:shadow-md",
        // Strong
        "prose-strong:font-semibold prose-strong:text-foreground",
        // Lists
        "prose-ul:list-disc prose-ol:list-decimal",
        "prose-li:marker:text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
