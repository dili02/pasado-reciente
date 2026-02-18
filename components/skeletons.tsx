import React from "react";
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-md bg-muted/40 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-foreground/5 before:to-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };

export function ImageSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("aspect-square w-full rounded-sm flex items-center justify-center bg-muted/20", className)}>
      <div className="w-12 h-12 border-2 border-foreground/5 rounded-full flex items-center justify-center">
        <div className="w-6 h-0.5 bg-foreground/10 rotate-45 absolute" />
        <div className="w-6 h-0.5 bg-foreground/10 -rotate-45 absolute" />
      </div>
    </Skeleton>
  );
}

export function TitleSkeleton({ className }: { className?: string }) {
  return <Skeleton className={cn("h-8 w-3/4 mb-4", className)} />;
}

export function TextSkeleton({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton 
          key={i} 
          className={cn(
            "h-4", 
            i === lines - 1 ? "w-2/3" : "w-full"
          )} 
        />
      ))}
    </div>
  );
}

export function CardSkeleton() {
  return (
    <div className="p-6 border-b border-border space-y-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-3 w-16" />
      </div>
      <TitleSkeleton className="h-10 w-full" />
      <TextSkeleton lines={2} />
      <div className="flex gap-2 pt-2">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
    </div>
  );
}
