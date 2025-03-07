import { Skeleton, SkeletonLine } from "keep-react";

const ProjectCardSkeleton = () => {
  return (
    <Skeleton className="mx-auto w-full space-y-3">
      <SkeletonLine className="h-52 w-full bg-muted" />
      <SkeletonLine className="h-4 w-full bg-muted" />
      <SkeletonLine className="h-4 w-3/5 bg-muted" />
      <SkeletonLine className="h-4 w-4/5 bg-muted" />
      <div className="flex justify-between sm:justify-center sm:gap-x-4 gap-y-2 lg:justify-between items-center">
        <SkeletonLine className="h-11 w-40 mt-3 bg-muted" />
        <SkeletonLine className="h-11 w-40 mt-3 bg-muted" />
      </div>
    </Skeleton>
  );
};

export default ProjectCardSkeleton;
