import { Skeleton } from "@/components/ui/skeleton";

export default function Homepageloading() {
  return (
    <div className="w-[75%] mx-auto mt-10">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="w-full h-[550px] mt-5" />

      <div className="mt-8 flex justify-between gap-x-24">
        <div className="w-2/3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/3 mt-3" />
        </div>
        <div className="w-1/3">
          <Skeleton className="w-full h-72" />
        </div>
      </div>
    </div>
  );
}
