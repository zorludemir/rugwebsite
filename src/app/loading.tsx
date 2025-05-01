import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container py-12 md:py-20 space-y-8">
       <Skeleton className="h-12 w-1/2 mx-auto" />
       <Skeleton className="h-6 w-3/4 mx-auto" />
       <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
          <Skeleton className="h-64 w-full" />
          <div className="space-y-4">
             <Skeleton className="h-8 w-3/4" />
             <Skeleton className="h-24 w-full" />
             <Skeleton className="h-10 w-1/3" />
          </div>
       </div>
    </div>
  )
}
