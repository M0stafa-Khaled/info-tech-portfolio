import { Skeleton, SkeletonLine } from "keep-react";

const CategoriesSkeleton = () => {
  return (
    <Skeleton className="max-w-fit mx-auto mt-9 lg:mt-[72px] mb-9 px-4 bg-muted h-14 rounded-2xl flex justify-center items-center gap-4">
      <SkeletonLine className="h-12 w-16 bg-[#39434a39]" />
      <SkeletonLine className="h-12 w-16 bg-[#39434a39]" />
      <SkeletonLine className="h-12 w-16 bg-[#39434a39]" />
    </Skeleton>
  );
};

export default CategoriesSkeleton;
